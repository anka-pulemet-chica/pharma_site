<template>

    <div class="blocks">
        <div class="inner" :style="innerStyle">
        <div v-for="(item,index) in data.data" :key="index" class="block">
           <div class="year" >{{ item.year }}</div> 
           <div class="desc">{{ item.description }}</div>
           </div>
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
  data = await fetchData('histories', locale.value)
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
        background-color: var(--grey-light);
        border-radius: 20px;
        padding: 20px;


        .year { 
            font-weight: 700;
            color: var(--green);
            padding-bottom: 20px;
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