<template>
        <PagesIndexHerosection :description="data.data.herosection_description"/>
        <PagesIndexPartners :source_gallery="dataPartners.data.slice(0,6)"/>
        <PagesIndexAbout :about="data.data.about"/>
        <PagesIndexAdvantages :list="extractText(data.data.advantages)" :img1="`${$config.public.StrapiUrl}${data.data.advantages_image_1.url}`" :img2="`${$config.public.StrapiUrl}${data.data.advantages_image_2.url}`" :logistics="extractText(data.data.advantages_logistics)"/>
        <PagesIndexMission :slogan="data.data.mission_slogan" :slogan_description="data.data.mission_slogan_description" :list_title="data.data.mission_list_title" :list="extractText(data.data.mission_list)" :img1="`${$config.public.StrapiUrl}${data.data.mission_image_1.url}`"/>
        <PagesIndexEthics :slogan="data.data.ethics_slogan" :list_title="data.data.ethics_list_title" :list="extractText(data.data.ethics_list)" :source="`${$config.public.StrapiUrl}${data.data.ethics_image.url}`"/>
        <PagesIndexHistory />
        <PagesIndexQuote :quote_text="data.data.quote_text" :quote_fio="data.data.quote_fio" :quote_position="data.data.quote_position" :quote_contacts_title="data.data.quote_contacts_title" :quote_number="data.data.quote_number" :quote_email="data.data.quote_email" :quote_image="`${$config.public.StrapiUrl}${data.data.quote_image.url}`"/>
 

</template>


<script setup>

definePageMeta({
  layout: 'withoutlogo'
})

import { useStrapiService } from '~/composables/useStrapiService'
import { extractText } from '~/composables/extractText'

import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { fetchData } = useStrapiService()
const { locale } = useI18n()

let data = ref()
let dataPartners = ref()
const localeKey = computed(() => locale.value);

let loadData = async () => {
data = null
dataPartners = null
  data = await fetchData('home-page', locale.value);
  dataPartners = await fetchData('partners', locale.value);
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
})

</script>