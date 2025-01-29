<template>
    <div class="rows">

        <div class="left_part">
            <Tag> {{ $t('partners-tag') }}</Tag>
            <PhoneAndEmail />
        </div>

        <div class="right_part">
            <h1> {{$t('partners-heading')}}</h1>
        </div>
        
    </div>
<!-- 
        <div class="tags">
            <div v-for="item in allTags" :key="item" class="tag" :class=" {active: item === activeTag }" @click=setActiveTag(item)>
                    {{ item }}
            </div>
        </div> -->


        <div class="companies">
            <div v-for="(item, index) in filteredCompanies" :key="index" class="item">
                <NuxtLink :to="$localePath(`/partners/${item.documentId}`)" class="content"> 
                    <div class="text">
                        <h3> {{ item.name }}</h3>
                        <div class="short_desc"> {{ item.short_desc }}</div>
                    </div>
                    <div class="grapihic">
                    <!-- <div class="tag"> {{ item.tag }}</div> -->
                    <div class="wrapping">
                        <img :src="`${$config.public.StrapiUrl}${item.icon.url}`"> 
                    </div>
                    </div>
                </NuxtLink>
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

let loadData = async () => {
data = null
  data = await fetchData('partners', locale.value)
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
})


const allTags = computed(()=> {
    const allTags = data.data.map(company => company.tag); 
    return [...new Set(allTags)];
})

const filteredCompanies = computed(()=> {
    return data.data.filter((item) => item.tag == activeTag.value || !activeTag.value)
})


</script>

<style scoped>
.tags {
    display: flex;
    gap: 20px;

    margin-top: var(--outer-indent-big);
    
    .tag {
        border-radius: 30px;
        border: 1px solid var(--grey-middle);
        padding: 8px 14px;
        cursor: pointer;
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
        gap: var(--outer-indent);

        .item {
            width: 31%;
            background-color: #f8f7f7;
            /* border: 1px solid var(--grey-middle); */
            border-radius: 10px;
            padding: 40px 20px;
            transition: all 0.2s;

            .content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%; 

                gap: var(--outer-indent-small);

            }
            .wrapping {
            margin-top: var(--outer-indent-small);
            padding: 10px;
            background-color: white;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: 90%;
                width:fit-content;
            }
            }
        


        .name {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.5rem;
            padding-bottom: var(--outer-indent-small);
        }

        .short_desc {
            font-weight: 400;
        }

        .tag {
            border: 1px solid var(--grey-middle);
            border-radius: 30px;
            width: fit-content;
            padding: 8px 15px;
        }

    }

        .item:hover {
            background-color: #e8e8e8;
            transform: scale(1.02);
        }
    }

    @media (max-width: 1024px) {
        .companies {
        .item {
            width: 45%;
        }
        }
    }

    @media (max-width: 600px) {
        .companies {
        .item {
            width: 100%;
        }
        }
    }
</style>

