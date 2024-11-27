<template>
    <div class="rows">
    <div class="left_part">
        <Tag>{{ $t('vacancies-contacts-dep') }}</Tag>

        <div class="boxes">

        <div class="box">
                    <NuxtImg src="/images/vacancies/Vector.svg" width="23px"/>
                    <span>info@pharma-mg.by</span>
                </div>
                <div class="box">
                    <NuxtImg src="/images/vacancies/Vector1.svg" width="20px"/>
                    <span>+375 (17) 364-47-36</span>
                </div>
            </div>
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

.boxes {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.box {
        display: inline-block;
        border-radius: 10px;
        padding: 10px 20px;
        background-color: var(--grey-light);
        border: 2px solid var(--grey-middle);

        img {
            margin-right: 10px;
        }
    }



</style>