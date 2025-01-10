<template>
     <div class="scroll">
        <button class="arrow" @click="prevSlide" :disabled="startIndex == 0">
            <img src="/images/components/arrow-left.svg">
        </button>
        <button class="arrow" @click="nextSlide" :disabled="startIndex + 3 >= data.data.length">
            <img src="/images/components/arrow-right.svg">
        </button>
    </div>

    <div class="blocks">
        <div class="inner">
        <div v-for="(item,index) in visibleItems" :key="index" class="block">
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
let sortedData = ref(null);
let startIndex = ref(0);
let itemsPerRow = 3;
let transitioning = ref(false);

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

const visibleItems = computed(() => {
      return sortedData.slice(startIndex.value, startIndex.value + 3);
    })

function prevSlide() {
      if (startIndex.value > 0) {
        startIndex.value -= 3;
      }
    }

function nextSlide() {
      if (startIndex.value + 3 < data.data.length) {
        startIndex.value += 3;
      }
    }

</script>

<style scoped>
.blocks {  
    min-height: 650px;
  
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

.scroll {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: var(--outer-indent-small);

    .arrow {
        border: 2px solid var(--grey-middle);
        border-radius: 30px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 200;
        padding: 7px;
        cursor: pointer;
    }

    .arrow:hover {
        background-color: var(--grey-middle);
    }

    .arrow:disabled {
        opacity: 0.5;
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