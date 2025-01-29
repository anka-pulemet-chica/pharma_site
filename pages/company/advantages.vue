<template>
    <div class="heading">
        <h1>{{ $t('advantages') }}</h1>
        <p class="text" v-html="data.data.heading"></p>
    </div>
    <PagesAdvantagesPromotion/>
    <PagesAdvantagesBlocks/>
    <div class="block_of_promotion text">
        <div v-html="extractText(data.data.promotion)"></div>
    </div>

    <div class="logistics">
        <div class="rows">
            <div class="left_part">
                <Tag> {{  $t('home-logistics-tag') }}</Tag>
                <div class="images">
                    <div v-for="(item, index) in data.data.logistics_img" :key="index" class="wrapping">
                        <NuxtImg :src="`${$config.public.StrapiUrl}${item.url}`"/>
                    </div>
                </div>
            </div>

            <div class="right_part">
                <div v-html="data.data.logistics" class="text"></div>
            </div>
        </div>
    </div>
    
    <div class="heading">
        <p class="text">{{ data.data.ending }}</p>
    </div>
</template>

<style scoped>

.heading {
    margin: var(--outer-indent-big) 0;

    display: flex;
    flex-direction: column;
    align-items: center;



    .text {
        /* font-size: 1.3rem; */
        width: 50%;
        text-align: center;
    }
}

.block_of_promotion {
    margin: var(--outer-indent-big) 0;
}

.rows {
    padding: 0;

    .right_part {
        align-self: center;
    }
}

.text {
    font-weight: 400;
}


.images {
    display: flex;
    flex-wrap: wrap;
    gap: var(--outer-indent-small);
    row-gap: var(--outer-indent-small);

    .wrapping {
        width: 40%;

        img {
            border-radius: 20px;
        }
    }

    /* img {
        width: 10%;
    } */
}
@media (max-width: 768px) {
    .heading {
        .text {
            width: 100%;
            font-size: 0.95rem;
        }
    }
}
</style>

<script setup>
import { useStrapiService } from '~/composables/useStrapiService'

import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { fetchData } = useStrapiService()
const { locale } = useI18n()

let data = ref()

let loadData = async () => {
data = null
data = await fetchData('page-advantage', locale.value);
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
await loadData()
})

</script>