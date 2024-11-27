<template>
    <section>
        <div class="phone">{{ data.data.phone_1 }}</div>
        <div class="phone">{{ data.data.phone_2 }}</div>
        <div class="phone">{{ data.data.phone_3 }}</div>
        <div class="phone">{{ data.data.email }}</div>
    </section>
    
</template>

<script setup>
import { useStrapiService } from '~/composables/useStrapiService'

const { fetchData } = useStrapiService()

let data = ref(null);

let loadData = async () => {
data = null
  data = await fetchData('phone', 'en')
}

// Загружаем данные при загрузке компонента
await loadData()

</script>

<style scoped>
    section {
        position: absolute;
        border: 2px solid var(--green);
        background-color: white;
        border-radius: 10px;
        top: 80px;

        padding: 20px;
        margin-left: -80px;
        
    }
</style>