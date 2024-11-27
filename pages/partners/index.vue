<template>
    <div class="rows">

        <div class="left_part">
            <Tag> {{ $t('partners-result') }}</Tag>
        </div>

        <div class="right_part">
            <h1> {{$t('partners-heading')}}</h1>
            <div class="tags">
                <div v-for="item in data.data" :key="item" class="tag" :class=" {active: item.tag === activeTag }" @click=setActiveTag(item.tag)>
                        {{ item.tag }}
                </div>
            </div>


            <div class="companies">
                <div v-for="item in data.data" :key="item" class="company">
                    <div v-if="activeTag == item.tag || !activeTag">
                    <NuxtLink :to="`/partners/${item.name}`"> 
                        <img :src="`http://localhost:1337${item.icon.url}`">
                    </NuxtLink>
                </div>
                </div>
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

let activeJobId = ref(null);

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


function updateAndShowTags(tag) {
    tags.value += tag;
    return tags;  
}

</script>

<style scoped>
.tags {
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


        .company {
            width: 30%;
            

            a {
            height: 70px;
            border: 1px solid var(--grey-middle);
            border-radius: 10px;
            display: flex;
            align-items: center;
            padding: 10px 20px;
        }
        }
    }
</style>

