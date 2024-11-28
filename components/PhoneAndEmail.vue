<style scoped>
.boxes {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.box {
        border-radius: 10px;
        padding: 10px 20px;
        background-color: var(--grey-light);
        border: 2px solid var(--grey-middle);

        img {
            margin-right: 10px;
        }
    }

    @media (max-width: 480px) {
        .boxes {
            font-size: 0.9rem;

        }

        .box {
            padding: 9px 15px;
            display: flex;
            justify-content: center;
            img {
                width: 16px;
            }
        }
    }
</style>

<script setup>
import { useStrapiService } from '~/composables/useStrapiService'

const { fetchData } = useStrapiService()

let dataPhones = ref(null);

let loadData = async () => {
    dataPhones = null
dataPhones = await fetchData('phone', 'en')
}

// Загружаем данные при загрузке компонента
await loadData()

</script>

<template>
    <div class="boxes">

    <div class="box">
                <NuxtImg src="/images/vacancies/Vector.svg" width="23px"/>
                <span>{{ dataPhones.data.phone_1 }}</span>
            </div>
            <div class="box">
                <NuxtImg src="/images/vacancies/Vector1.svg" width="20px"/>
                <span>{{ dataPhones.data.email }}</span>
            </div>
    </div>
</template>