<template>

    <div class="content">
    <div class="tags">
                <div v-for="item in data.data" :key="item" class="tag" :class=" {active: item.tag === activeTag }" @click=setActiveTag(item.tag)>
                        {{ item.tag }}
                </div>
            </div>


            <div class="spheres">
                <div v-for="item in data.data" :key="item">
                    <div v-if="activeTag == item.tag" class="sphere">

                        <div class="text">
                            <div class="title"> {{ item.title }}</div>
                            <div class="subtitle"> {{item.subtitle}}</div>

                            <div v-html="extractText(item.list)"></div>
                        </div>
                        
                        <img :src="`${$config.public.StrapiUrl}${item.img[0].url}`">
                    
                </div>
                </div>
            </div>

        </div>
</template>

<script setup>

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
import { extractText } from '~/composables/extractText'

const { fetchData } = useStrapiService()
const { locale } = useI18n()

let data = ref(null);

let loadData = async () => {
data = null
  data = await fetchData('numbers-2-1s', locale.value)
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
})

let activeTag = ref(data.data[0].tag || null);

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

.spheres {
    
    width: 100%;
    border-radius: 20px;
    background-color: var(--grey-light);


    .sphere {
        margin: 20px 0;
        padding: 60px 0;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;

        img {
            max-width: 150px;
        }
        .text {
            width: 43%;
        }


        .title {
            text-transform: uppercase;
            font-size: 1.5rem;
            font-weight: 600;
            padding-bottom: 20px;
        }

        .subtitle {
            padding-bottom: 20px;
        }
    }
}

.content {
    margin-bottom: 60px;
}


@media (max-width: 768px) {
    .tags {
        flex-wrap: wrap;
    }
}

@media (max-width: 480px) {

    .spheres {
        .sphere {
            flex-direction: column;
            gap: var(--outer-indent-small);
            padding: var(--outer-indent-small);

            .text {
            width: 100%;
        }
        img {
            align-self: center;
        }
        
        }
    }

}
</style>