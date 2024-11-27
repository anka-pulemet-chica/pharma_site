<template>
    <div class="list">
        <div v-for="(item, index) in data.data" :key="index" class="element">
            <div class="heading" @click="toggleJob(index)">
            <div>
                <h4>{{ item.name }} </h4>
                <p>{{ item.city }}, {{ item.category }}</p>

            </div>
            <div class="right">
                <div class="department">{{ item.department }}</div>
                <button> + </button>
            </div>
        </div>
            <div v-if="index===activeJobId" class="desc">
                <span>{{ item.description }}</span>

                <h5>{{ $t('vacancies-resp') }}</h5>
                <div class="ls" v-for="(ls, index) in item.responsibilities" :key="index">
                    <div v-html=" extractTexts(ls)"></div>

                </div>

                <h5>{{ $t('vacancies-req') }}</h5>

                <div class="ls" v-for="(ls, index) in item.requirements" :key="index">
                    <div v-html=" extractTexts(ls)"></div>

                </div>

                <h5>{{ $t('vacancies-offer') }}</h5>

                <div class="ls" v-for="(ls, index) in item.requirements" :key="index">
                    <div v-html=" extractTexts(ls)"></div>

                </div>

                <h5>{{ $t('vacancies-how-to') }}</h5>
                <span>{{ $t('vacancies-join') }}</span>

                <a :href="item.link"><AppLink>{{ $t('vacancies-link') }}</AppLink></a>

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

let activeJobId = ref(null);

let loadData = async () => {
data = null
  data = await fetchData('vacancies', locale.value)
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
})

function toggleJob(id) {
      activeJobId.value = activeJobId.value === id ? null : id; 
    } // Открыть/закрыть вакансию


// function extractTexts(data) {
//   if (data.type === 'list' && data.children) {
//     return data.children.map((child) =>
//       child.children.map((c) => c.text).join('')
//     );
//   }
//   return [];
// }

function extractTexts(data) {
  if (data.type === 'list' && data.children) {
    return data.children.map((child) => {
      return `
        <div class="ls-item">
          
          ${child.children.map((c) => `<img src="/images/components/li.svg" style="position: relative; padding-right: 15px; top: 10px;"/><span style="color: #8B8B8B; line-height: 2;">${c.text}</span>`).join('')}
        </div>
      `;
    }).join('');
  }
  return [];
}

</script>



<style scoped>
.element{
    padding: 30px 0;
    border-bottom: 1px solid var(--grey-middle);


    .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;}


    h4 {
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 10px;
    }

    p {
        font-size: 14px;
        color: var(--grey);
    }

    .department {
        padding: 10px;
        border: 1px solid var(--grey-middle);
        border-radius: 10px;
    }  
    
    .right {
        display: flex;
        gap: 40px;

        button {
            color: var(--green);
            font-size: 28px;
            font-weight: 200;
            border: 1px solid var(--grey-middle);
            border-radius: 30px;
            width: 40px;
            height: 40px;
            transition: background-color 0.3ms ease;
        }
    }

    .desc {
        padding-left: 20px;
        padding-top: 20px;
        line-height: 1.5;
        

        h5 {
            padding-top: 40px;
            padding-bottom: 15px;
            font-weight: 600;
        }

        a {
            padding-top: 20px;
        }
    }

    .isActive {
        transform: rotate(90deg);
        color: white;
        background-color: var(--green);
    }
}

.element:hover button {
    color: white;
    background-color: var(--grey-middle);
}
</style>