<template>
            <PagesAboutusAbout :about="data.data.about"/>
            <PagesAboutusEthics :list="extractText(data.data.ethics)" :title="data.data.ethics_title"/>
            <PagesAboutusPolitics :policy="data.data.policy"/>
            <PagesDocuments /> 
            <PagesIndexHistory />

</template>


<script setup>
import { useStrapiService } from '~/composables/useStrapiService'
import { extractText } from '~/composables/extractText'

import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { fetchData } = useStrapiService()
const { locale } = useI18n()

let data = ref()
const localeKey = computed(() => locale.value);

let loadData = async () => {
data = null
data = await fetchData('page-about-us', locale.value);
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
await loadData()
})

</script>