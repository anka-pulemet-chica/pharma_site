<template>

    <div class="blocks">
        <div class="inner" :style="innerStyle">
        <div v-for="(item,index) in sortedData" :key="index" class="block" :class="{ 'slide-out-left': item.isSlidingOut, 'slide-out-right': item.isSlidingOutRight }"
                @scroll.passive="handleScroll">
           <div class="year" >{{ item.year }}</div> 
           <div class="desc">{{ item.description }}</div>
           </div>
        </div>
    </div> 
</template>


<script setup>
import { useStrapiService } from '~/composables/useStrapiService'
import { useI18n } from 'vue-i18n'
import { ref, computed, watch } from 'vue'

const { fetchData } = useStrapiService()
const { locale } = useI18n()

let data = ref(null);
let sortedData = ref(null);


let loadData = async () => {
data = null
data = await fetchData('histories', locale.value)
sortedData = data.data.sort((a, b) => {
        const yearA = parseInt(a.year.match(/\d+/)[0], 10)
        const yearB = parseInt(b.year.match(/\d+/)[0], 10)
        return yearA - yearB
    })
}

await loadData()

watch(locale, async () => {
  await loadData()
})
</script>

<style scoped>
.blocks {    
    .inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    /* margin: 80px 0 20px; */
    row-gap: 20px;
  }

    .block {
        display: flex;
        align-items: center;
        background-color: var(--grey-light);
        border-radius: 20px;
        padding: 20px;


        .year { 
            font-weight: 600;
            color: var(--green);
            padding: 20px;
            font-size: 1.5rem;

        }
    }
}

@media (max-width: 768px) {
    .blocks {
        flex-direction: column;

        .block {
            width: 100%;
        }
    }
}
</style>