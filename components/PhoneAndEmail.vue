<template>
<div class="boxes">
        <div class="box">
            <NuxtImg src="/images/vacancies/Vector1.svg" width="20px"/>
            <a :href=" `tel:${data.data.number1}`"> <span>{{ data.data.number1 }}</span> </a>
        </div>
        <div class="box">
            <NuxtImg src="/images/vacancies/Vector1.svg" width="20px"/>
            <a :href=" `tel:${data.data.number2}`"> <span>{{ data.data.number2 }}</span> </a>
        </div>
        <div class="box">
            <NuxtImg src="/images/vacancies/fax.svg" width="20px"/>
            <span>{{ data.data.fax }}</span>
        </div>
        <div class="box">
            <NuxtImg src="/images/vacancies/Vector.svg" width="23px"/>
            <a :href=" `mailto:${data.data.email}`"><span> {{ data.data.email }}</span> </a>
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
  data = await fetchData('page-contact', locale.value)
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
    width: fit-content;
}
.box {
        display: inline-block;
        font-size: 0.9rem;
        border-radius: 10px;
        padding: 10px 20px;
        background-color: var(--grey-light);
        border: 1px solid var(--grey-middle);

        transition: all 0.2s;

        img {
            margin-right: 10px;
        }
    }

.box:hover {
    background-color: #e8e8e8;
    transform: scale(1.02);
}
</style>