<template>
    <div class="header">
        <div class="logo">
            <NuxtLink :to="$localePath('index')"><NuxtImg src="/images/layouts/logo.svg" /> </NuxtLink>
        </div>
        

        <div class="content" >

        <nav class="nav desktop">
            <div v-for="(item, index) in items" :key="index">
                <div v-if="item.items" @click.prevent="toggleDropdown">
                    <div>
                        <NuxtLink :to="$localePath(item.path)"> {{ $t(item.title) }} </NuxtLink>
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
                <button @click="toggleSection('phone')" class="link green"><NuxtImg src="/images/layouts/call.svg"/> </button>
                    <div :class="{ 'is-active': activeSection === 'phone', 'is-not-active': activeSection !== 'phone' }">
                       <Phones/>
                    </div>
                <button class="link green"  @click="toggleSection('location')"><NuxtImg src="/images/layouts/location.svg" /></button>
                <div :class="{ 'is-active': activeSection === 'location', 'is-not-active': activeSection !== 'location' }">
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
                    <span v-if="locale=='zh'">
                            CH
                        </span>
                    <span v-else>
                        {{ locale.toUpperCase() }}
                    </span>
                    </button>
                </div>
        </div>


        <div class="mobile-only">
            
            <button @click="toggleMenu" class="menu-toggle">☰</button>
            <div :class="{ 'is-active': isMenuActive, 'mobile-nav': isMenuActive, 'is-not-active': !isMenuActive}">
                <button @click="toggleMenu" class="menu-toggle">X</button>



                    <div class="language-switcher">
                        <button
                        v-for="locale in availableLocales"
                        :key="locale"
                        @click="switchLocale(locale)"
                        class="link white"
                        :class="{ active: locale === currentLocale }"
                        >
                        <span v-if="locale=='zh'">
                            CH
                        </span>
                        <span v-else>
                            {{ locale.toUpperCase() }}
                        </span>
                        
                        </button>
                    </div>

                    <nav class='nav'>
                        <div v-for="(item, index) in items" :key="index" >
                    <div v-if="item.items" @click.prevent="toggleDropdown">
                        <div class="dropdown_parent">
                            <NuxtLink :to="$localePath(item.path)"> {{ $t(item.title) }}</NuxtLink>
                            <img src="/images/components/down.svg" class="dropdown-arrow" :class="{ open: isDropdownOpen }">
                        </div>

                        <div class="dropdown">
                            <div v-if="isDropdownOpen" v-for="(subitem, index) in item.items" :key="index">
                                <NuxtLink :to="$localePath(subitem.path)" activeClass="activenav" @click="toggleMenu">{{ $t(subitem.title )}} </NuxtLink>
                            </div>                    </div>
                    </div>

                    <div v-else>
                        <NuxtLink :to="$localePath(item.path)" activeClass="activenav" @click="toggleMenu"> {{ $t(item.title) }}</NuxtLink>
                    </div>
                        </div>
                    </nav>
                    
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
                width: 200px;
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

            .dropdown_parent {
                display: flex;
                flex-wrap: nowrap;
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
                left: 5px;
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
                align-items: flex-start;
                gap: 40px;
                padding: 2vw 4vw;

                position: absolute;
                width: 100%;
                min-height: 100vh;
                right: 0;
                top: 0;
                background: rgba(255, 255, 255, 0.5);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                border: 1px solid rgba(255, 255, 255, 0.3);

                .nav {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 40px;
                    padding-bottom: 20px;
                    padding-right: 20px;
                    font-size: 1.05rem;

                    .dropdown {
                        position: relative;
                        margin-top: 0; 
                        backdrop-filter: none;
                        background: transparent;


                        div {
                            margin-top: 10px;
                            padding-top: 10px;
                            padding-left: 40px;
                        }
                    }

                    .dropdown-arrow {
                    top: 0px;
                    left: 10px;
            }
                }

                .language-switcher {
                    align-self: center;
                    margin-left: 0;
                    margin-top: 20px;
                    margin-bottom: 60px;
                    gap: 20px;

                    .link {
                        width: 60px;
                        height: 60px;
                        border-radius: 30px;
                        font-size: 1.1rem;
                    }
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
                // { title: 'clients', path: '/clients/' },
                { title: 'vacancies', path: '/vacancies' },
                { title: 'contacts', path: '/contacts' },
                ],
                isDropdownOpen: false,
                isMenuActive: false,
                activeSection: null,
        }
    },
    methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    switchLocale(locale) {
        this.$i18n.setLocale(locale);
        if (this.isMenuActive) {
            this.toggleMenu()
        }
      },
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    toggleSection (section) {
        this.activeSection = this.activeSection === section ? null : section;
        console.log(this.activeSection);
    },
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