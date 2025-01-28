<template>
   <div class="items">
        <div v-for="item in data.data" :key="item" class="item">
            <div class="nums"> {{ item.number }} <span class="nums_desc">{{ item.number_desc }}</span></div>
            <div class="name">{{ item.name }}</div>
            <div class="desc"> {{ item.description }}</div>
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
  data = await fetchData('numbers-2-2s', locale.value)
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
})

</script>

<style scoped>

.items {
    display: flex;
    justify-content: space-between;

    .item {
        width: 30%;
        background-color: var(--grey-light);
        border: 1px solid var(--grey-middle);
        border-radius: 20px;

        padding: 30px 20px; 

        display: flex;
        flex-direction: column;
        justify-content: space-between;


        .nums {
            padding-bottom: 20px;
            margin-bottom: 40px;
            border-bottom: 1px solid var(--grey-middle);
            font-size: 2.5rem;
            font-weight: 200;

            .nums_desc {
                font-size: 1rem;
                font-weight: 200;
            }
        }

        .name {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.5rem;
        }

        .desc {
            padding-top: 60px;
            font-weight: 200;
        }


    }

}

@media (max-width: 768px) {
    .items {
        flex-direction: column;
        gap: var(--outer-indent);
        .item {
            width: 100%;
        }
    }
}
</style>

