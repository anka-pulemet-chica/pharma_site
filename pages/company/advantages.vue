<template>
    <div class="heading">
        <h1>{{ $t('advantages') }}</h1>
        <p class="text" v-html="data.data.heading"></p>
    </div>
    <PagesAdvantagesPromotion/>
    <PagesAdvantagesBlocks/>
    <Pages23/>
    <Pages24/>
    <Pages3/>
</template>

<style scoped>

.heading {
    margin: var(--outer-indent-big) 0;

    display: flex;
    flex-direction: column;
    align-items: center;



    .text {
        font-size: 1.2rem;
        width: 50%;
        text-align: center;

        font-weight: 200;
    }
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