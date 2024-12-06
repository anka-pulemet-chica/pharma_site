<template>
    <div class="rows">
    <div class="left_part">
        <Tag>{{ $t('vacancies-contacts-dep') }}</Tag>
        <PhoneAndEmail />
    </div>

    <div class="right_part">
        <h1>{{$t('vacancies')}}</h1>
        <p>{{ data.data.description }}</p>

        <h3>{{ $t('vacancies-position') }}</h3>
        <p>{{ data.data.slogan }}</p>

        <PagesVacanciesList />
    </div>
    

    
</div>
</template>


<script setup>
import { useStrapiService } from '~/composables/useStrapiService'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { fetchData } = useStrapiService()
const { locale } = useI18n()

let data = ref(null)

let loadData = async () => {
data = null
  data = await fetchData('page-vacancy', locale.value)
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
})
</script>

<style scoped>
.rows {
  h3 {
    margin-top: var(--outer-indent);
  }
}
</style>