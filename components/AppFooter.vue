<template>
    <footer>
    <div class="columns">
        <div class="info">
            <div class="logo">
                <NuxtImg src="/images/layouts/logo.svg" />
            </div>
            <div v-if="dataInfo?.data">{{ dataInfo.data.info }}</div>
            <div class="address">{{ dataAddress.data.address }}</div>
            <div class="years" v-if="dataInfo?.data">{{ dataInfo.data.years }}</div>
        </div>

        <div class="contacts">
            <nav class="nav">
            <div v-for="(item, index) in items" :key="index">
                <div v-if="item.items" @click.prevent="toggleFooterDropdown">
                    <div class="dropdown_parent">
                        <NuxtLink :to="$localePath(item.path)"> {{ $t(item.title) }}</NuxtLink>
                        <img src="/images/components/down.svg" class="dropdown-arrow" :class="{ open: isDropdownFooterOpen }">
                    </div>

                    <div class="dropdown">
                        <div v-if="isDropdownFooterOpen" v-for="(subitem, index) in item.items" :key="index">
                            <NuxtLink :to="$localePath(subitem.path)" activeClass="activenav">{{ $t(subitem.title )}} </NuxtLink>
                        </div>                    
                    </div>
                </div>

                <div v-else>
                    <NuxtLink :to="$localePath(item.path)" activeClass="activenav"> {{ $t(item.title) }}</NuxtLink>
                </div>
            </div>
        </nav>
            <div class="email"> {{ dataPhones.data.email }}</div>
            <div class="row"> 
                <div class="phone"> {{ dataPhones.data.phone_1 }}</div>
                <div class="phone"> {{ dataPhones.data.phone_2 }}</div>
            </div>
            <div class="phone"> {{ dataPhones.data.phone_3 }}</div>
        </div>
    </div>
    </footer>
    </template>


<script setup>
const items = [

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
    ];
let isDropdownFooterOpen = ref(false);


function toggleFooterDropdown() {
      isDropdownFooterOpen.value = !isDropdownFooterOpen.value;
      console.log(isDropdownFooterOpen)
    }
import { useStrapiService } from '~/composables/useStrapiService'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { fetchData } = useStrapiService()
const { locale } = useI18n()

let dataPhones = ref(null);
let dataInfo = ref(null);
let dataAddress = ref(null);

let loadData = async () => {
dataPhones.value = await fetchData('phone', 'en')
}

let loadDataFooter = async () => {
dataInfo.value = await fetchData('footer', locale.value)
}

let loadDataAddress = async () => {
dataAddress.value = await fetchData('address', locale.value)
}

await loadData();
await loadDataFooter();
await loadDataAddress();

watch(locale, async () => {
  await loadDataFooter();
  await loadDataAddress()
})
</script>

<style scoped>
footer {
    background-color: var(--grey-light);
    padding: 4vw 8vw;

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--outer-indent-small);
        
    }

    .logo {
        width: 150px;
    }

    .nav {
            display: flex;
            gap: 15px;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: bold;
            justify-content: space-evenly;


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
                position: relative;
                margin-top: 10px;
                line-height: 1.8;
                
                background: rgba(255, 255, 255, 0.2);
                border-radius: 5px;
                backdrop-filter: blur(5px);
                
            }

            

            .dropdown-arrow {
                position: relative;
                left: 5px;
                transition: transform 0.3s ease;
            }

            .dropdown-arrow.open {
                transform: rotate(180deg);            
            }

            .dropdown_parent {
                display: flex;
                flex-wrap: nowrap;
            }


        }

    .columns {
        display: flex;
        justify-content: space-between;
        padding-top: var(--outer-indent);

        .info {
            width: 40%;
            display: flex;
            flex-direction: column;
            gap: var(--outer-indent-small);
            font-size: 0.9rem;

            .address {
                font-weight: 800;
            }

            .years {
                color: var(--grey);
                font-weight: 300;
            }
        }
        
        .contacts {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            flex-wrap: wrap;
            gap: var(--outer-indent-small);
            .email {
                font-size: 1.3rem;
            }

            .phone {
                padding: 10px 15px;
                border-radius: 10px;
                border: 1px solid var(--grey-middle);
                font-size: 0.9rem;
                text-align: center;
                width: fit-content;
            }
        }
    }
}

@media (max-width: 768px) {

    footer {
    .columns {
        flex-direction: column;
        gap: var(--outer-indent);

        .info {
            width: 100%;
        }

        .row {
            flex-direction: column;
            width: 100%;
        }

        nav {
            flex-wrap: wrap;
            align-self: flex-start;
            margin: var(--outer-indent-small) 0;
        }

        .contacts {
            align-items: center;

            .phone, div .phone {
                width: 100%;
            }
        }

        .logo {
            align-self: center;
        }
    }
}
}
</style>