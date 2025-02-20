<template>
   <div class="items">
        <div v-for="item in data.data" :key="item" class="item">
            <!-- <div class="nums"> {{ item.number }} <span class="nums_desc">{{ item.number_desc }}</span></div> -->
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

        padding: 40px; 

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        transition: all 0.2s ease-out;


        .nums {
            padding-bottom: 20px;
            margin-bottom: 40px;
            border-bottom: 1px solid var(--black);
            font-size: 2.5rem;
            font-weight: 200;

            .nums_desc {
                font-size: 1rem;
                font-weight: 400;
            }
        }

        .name {
            text-align: center;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.5rem;
        }

        .desc {
            text-align: center;
            padding-top: 20px;
            font-weight: 400;
        }


    }

    .item:hover {
        transform: scale(1.05);
        background-color: #d1d1d1;
        color: white;
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

