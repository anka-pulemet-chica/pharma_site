<template>
    <div class="rows">

        <div class="left_part">
            <Tag> {{ $t('clients-tag') }}</Tag>
            <PhoneAndEmail />
        </div>

        <div class="right_part">
            <h1> {{$t('clients-heading')}}</h1>
            <p> {{ data.data.description }}</p>
        </div>
    </div>
            <div class="tags">
                <div v-for="item in data_pharm.data" :key="item" class="tag" :class=" {active: item.tag === activeTag }" @click=setActiveTag(item.tag)>
                        {{ item.tag }}
                </div>
            </div>


            <div class="companies">
                <div v-for="item in data_pharm.data" :key="item" class="item">
                    
                    <div v-if="activeTag == item.tag || !activeTag" class="company">
                        <NuxtLink :to="$localePath(`/clients/${item.documentId}`)"> 
                        <div class="heading_nums"> {{ item.heading_nums }} <span class="heading_nums_desc"> {{ item.heading_nums_desc }}</span></div>
                        <div class="name"> {{ item.name }}</div>
                        <div class="short_desc"> {{ item.short_desc }}</div>
                        <div class="client_time"> {{ item.client_time }}</div>
                        <div class="container_img">
                            <img :src="`${$config.public.StrapiUrl}${item.icon.url}`">
                        </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>


        
    


</template>


<script setup>

let activeTag = ref(null);

function setActiveTag (tag) {
    if (activeTag.value != tag) {
            activeTag.value = tag;
        }
    else {
        activeTag.value = null;
    }
    }


import { useStrapiService } from '~/composables/useStrapiService'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { fetchData } = useStrapiService()
const { locale } = useI18n()

let data = ref(null);
let data_pharm = ref(null);

let activeJobId = ref(null);

let loadData = async () => {
data = null
  data = await fetchData('page-client', locale.value)
}

let loadDataPharm = async () => {
data_pharm = null
  data_pharm = await fetchData('clients', locale.value)
}

// Загружаем данные при загрузке компонента
await loadData()
await loadDataPharm()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
  await loadDataPharm()
})
</script>

<style scoped>
.tags {
    padding-top: 40px;
    display: flex;
    gap: 20px;
    
    .tag {
        border-radius: 10px;
        border: 2px solid var(--grey-middle);
        padding: 10px 10px;
    }

    .active {
        color: white;
        background-color: var(--green);
        border-color: var(--green);
    } 
}


.companies {
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        gap: 20px;


        .item {
            width: 30%;

            .company{
            display: flex;
            flex-direction: column;
            background-color: var(--grey-light);
            border: 1px solid var(--grey-middle);
            border-radius: 20px;
            padding: 40px 20px;


            .container_img {
            height: 70px;
            width: 90%;
            background-color: white;
            display: flex;
            align-items: center;
            align-self: center;
            justify-content: center;  
        }

        img {
            height: 100%;
        }
        }

        .heading_nums {
            padding-bottom: 20px;
            margin-bottom: 40px;
            border-bottom: 1px solid var(--grey-middle);
            font-size: 2.5rem;
            font-weight: 200;

            .heading_nums_desc {
                font-size: 1rem;
                color: var(--grey);
                font-weight: 400;
            }
        }

        .name {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.5rem;
            padding-bottom: 40px;
        }

        .short_desc {
            color: var(--grey);
            padding-bottom: 20px;
        }

        .client_time {
            border: 1px solid black;
            border-radius: 30px;
            width: fit-content;
            padding: 8px 15px;
            margin-bottom: 40px;
        }

    }
    }
</style>
