<template>
    <div class="content">
        <img :src="`${$config.public.StrapiUrl}${data.data.wall.url}`">

    <div class="rows">
        <div class="left_part">
            <Tag>{{ data.data.tag }}</Tag>
        </div>
        <div class="right_part">
            <h1> {{ $t('history') }}</h1>

            <p> {{ data.data.herosection }}</p>


            <img :src="`${$config.public.StrapiUrl}${data.data.first_img.url}`" 

        </div>
    </div>
    </div>
</template>

<script setup>
import { useStrapiService } from '~/composables/useStrapiService'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { fetchData } = useStrapiService()
const { locale } = useI18n()

let data = ref(null);

let loadData = async () => {
data = null
  data = await fetchData('page-history', locale.value)
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
})
</script>

<style scoped>
.content {
    .right_part{
        p {
            padding-bottom: 20px;
        }
    }
}
</style>