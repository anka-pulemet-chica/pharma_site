<template>
    <div class="header">
        <div class="logo">
            <NuxtLink to='/'><NuxtImg src="/images/layouts/logo.svg" /> </NuxtLink>
        </div>
        

        <div class="content" >

        <nav class="nav desktop">
            <div v-for="(item, index) in items" :key="index">
                <div v-if="item.items" @click.prevent="toggleDropdown">
                    <div>
                        <NuxtLink :to="item.path"> {{ $t(item.title) }}</NuxtLink>
                        <img src="/images/components/down.svg" class="dropdown-arrow" :class="{ open: isDropdownOpen }">
                    </div>

                    <div class="dropdown">
                        <div v-if="isDropdownOpen" v-for="(subitem, index) in item.items" :key="index">
                            <NuxtLink :to="$localePath(subitem.path)" activeClass="activenav">{{ $t(subitem.title )}} </NuxtLink>
                        </div>                    </div>
                </div>

                <div v-else>
                    <NuxtLink :to="$localePath(item.path)" activeClass="activenav"> {{ $t(item.title) }}</NuxtLink>
                </div>
            </div>
        </nav>

        <div class="links">
                <button @click="togglePhone" class="link green"><NuxtImg src="/images/layouts/call.svg" :class="{'active': isPhoneActive}"/> </button>
                    <div :class="{ 'is-active': isPhoneActive,'is-not-active': !isPhoneActive}">
                       <Phones/>
                    </div>
                <button class="link green" @click="toggleLocation"><NuxtImg src="/images/layouts/location.svg" /></button>
                <div :class="{ 'is-active': isLocationActive,'is-not-active': !isLocationActive}">
                       <Location />
                    </div>

                

                <div class="language-switcher desktop">
                    <button
                    v-for="locale in availableLocales"
                    :key="locale"
                    @click="switchLocale(locale)"
                    class="link white"
                    :class="{ active: locale === currentLocale }"
                    >
                    {{ locale.toUpperCase() }}
                    </button>
                </div>
        </div>


        <div class="mobile-only">
            
            <button @click="toggleMenu" class="menu-toggle">☰</button>
            <div :class="{ 'is-active': isMenuActive, 'mobile-nav': isMenuActive, 'is-not-active': !isMenuActive}">
                <button @click="toggleMenu" class="menu-toggle">X</button>



                <div class="mobile-links">
                    <nav class='nav'>
                        <div v-for="(item, index) in items" :key="index" >
                    <div v-if="item.items" @click.prevent="toggleDropdown">
                        <div>
                            <NuxtLink :to="item.path"> {{ $t(item.title) }}</NuxtLink>
                            <img src="/images/components/down.svg" class="dropdown-arrow" :class="{ open: isDropdownOpen }">
                        </div>

                        <div class="dropdown">
                            <div v-if="isDropdownOpen" v-for="(subitem, index) in item.items" :key="index">
                                <NuxtLink :to="$localePath(subitem.path)" activeClass="activenav">{{ $t(subitem.title )}} </NuxtLink>
                            </div>                    </div>
                    </div>

                    <div v-else>
                        <NuxtLink :to="$localePath(item.path)" activeClass="activenav"> {{ $t(item.title) }}</NuxtLink>
                    </div>
                        </div>
                    </nav>
                    <div class="language-switcher">
                    <button
                    v-for="locale in availableLocales"
                    :key="locale"
                    @click="switchLocale(locale)"
                    class="link white"
                    :class="{ active: locale === currentLocale }"
                    >
                    {{ locale.toUpperCase() }}
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>


<style scoped>
    .header {
        
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: 12px;
        font-weight: bold;

        .logo {
            img {
                width: 160px;
            }
        }

        .content {
            display: flex;
            align-items: center;
            gap: 5vw;
        }

        .is-not-active {
                display: none;
            }

        .is-active {
            display: content;
        }

        .nav {
            display: flex;
            gap: 15px;
            text-transform: uppercase;

            a {
                transition: transform 0.1s ease;
                position: relative;
            }

            a:hover {
                cursor: pointer;
            }

            a::after {
                content: '';
                display: inline-block;
                position: absolute;
                left: 0;
                bottom: -2px;
                width: 100%;
                border: 1px solid var(--green);
                transform: scaleX(0);
                transition: transform 0.3s ease;
            }

            a:visited {
                color: var(--black);
            }

            a:hover::after{
                transform: scaleX(1);
            }

            .dropdown {
                position: absolute;
                margin-top: 10px;
                line-height: 1.8;
                
                padding-right: 20px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 5px;
                backdrop-filter: blur(5px);
                
            }

            .activenav {
                color: #22439A !important;
            }

            .dropdown-arrow {
                position: relative;
                top: 2px;
                left: 3px;
                transition: transform 0.3s ease;
            }

            .dropdown-arrow.open {
                transform: rotate(180deg);            
            }


        }

        .links {

            display: flex;
            gap: 5px;

            .green {
                background-color: var(--green);
                border: 1px solid white;
            }

            .green:hover {
                background-color: var(--black);
            }         
        }

        .link {
                width: 40px;
                height: 40px;
                border-radius: 20px;
                position: relative;

                img {
                    width: 25px;
                }
            }

        .language-switcher {
                margin-left: 10px;
                display: flex;
                gap: 0.1rem;

                button.active {
                background-color: #22439A;
                color: white;
                border-color: #22439A;
            }

            .white {
                border: 2px solid var(--grey-middle);
                font-weight: bold;
            }
            }

    }

    .mobile-only {
            display: none;
        }

    @media (max-width: 1096px) {

        .desktop {
            display: none !important;
        }

        .mobile-only {
            display:block;

            .menu-toggle {
                position: relative;
                font-weight: 200;
                color: var(--green);
                margin-right: 2vw;
                font-size: 32px;
            }

            .mobile-nav {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 40px;
                padding: 2vw 4vw;

                position: absolute;
                width: 100%;
                right: 0;
                top: 0;
                background: rgba(255, 255, 255, 0.2);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                border: 1px solid rgba(255, 255, 255, 0.3);

                .nav {
                    flex-direction: column;
                    align-items: flex-end;

                    .dropdown {
                        position: relative;
                        margin-top: 0; 
                    }
                }

                .language-switcher {
                    align-self: stretch;
                    margin-left: 0;
                    margin-right: 20px;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
            }
        }

        h2 {
            font-size: 20px;
        }



        
    }
    
</style>


<script>
export default {
    data() {
        return {
            items: [

                {
                    title: 'company', path: '', items: [
                        { title: 'advantages', path: '/company/advantages' },
                        { title: 'history', path: '/company/history' },
                        { title: 'aboutus', path: '/company/aboutus' }
                    ]
                },
                { title: 'partners', path: '/partners/' },
                { title: 'clients', path: '/clients/' },
                { title: 'vacancies', path: '/vacancies' },
                { title: 'contacts', path: '/contacts' },
                ],
                isDropdownOpen: false,
                isMenuActive: false,
                isPhoneActive: false,
                isLocationActive: false
        }
    },
    methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    switchLocale(locale) {
        this.$i18n.setLocale(locale);
      },
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    togglePhone() {
      this.isPhoneActive = !this.isPhoneActive;
    },
    toggleLocation() {
      this.isLocationActive = !this.isLocationActive;
    }
    },

    computed: {
      availableLocales() {
        return this.$i18n.locales.map((locale) => locale.code);
      },
      currentLocale() {
        return this.$i18n.locale;
      },
    }
}

</script>