<template>

    <div class="rows">
        <div class="left_part">
        </div>

        <div class="right_part">
            <h5> {{ data.data.title }}</h5>

            <div v-html="extractText(data.data.list)"></div>
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
  data = await fetchData('numbers-2-4', locale.value)
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
})
</script>

<style scoped>

.right_part {
    h5 {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 500;
        padding-bottom: 20px;
    }
}
</style>

