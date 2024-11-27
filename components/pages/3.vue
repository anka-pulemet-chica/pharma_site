<template>

    <div class="rows">
        <div class="left_part">
            <Tag> {{ data.data.tag}} </Tag>
            <NuxtLink :to="$localePath('/company/history')"><AppLink>{{ $t('home-link') }}</AppLink> </NuxtLink>
        </div>

        <div class="right_part">
            <h3> {{ data.data.title }}</h3>
            <p> {{ data.data.text }}</p>
        </div>
    </div>
</template>

<script setup>
import { useStrapiService } from '~/composables/useStrapiService'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'
import { extractText } from '~/composables/extractText'

const { fetchData } = useStrapiService()
const { locale } = useI18n()

let data = ref(null);

let loadData = async () => {
data = null
  data = await fetchData('numbers-3', locale.value)
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
})
</script>