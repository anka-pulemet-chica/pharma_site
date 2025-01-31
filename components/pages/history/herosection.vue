<template>

<div class="wrap_img">
        <img :src="`${$config.public.StrapiUrl}${data.data.wall.url}`">
    </div>
    
    <div class="rows">
        <div class="left_part">
        
            <Tag>{{ data.data.tag }}</Tag>
        </div>
        <div class="right_part">
            <h1> {{ $t('history') }}</h1>
            <p> {{ data.data.herosection }}</p>
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
  data = await fetchData('page-history', locale.value)
}

// Загружаем данные при загрузке компонента
await loadData()

// Обновляем данные при изменении локали
watch(locale, async () => {
  await loadData()
})
</script>

<style scoped>
  
        .right_part {
            margin-bottom: var(--outer-indent-big);
        }

        .wrap_img {
            height: 300px;
            overflow: hidden;
            border-radius: 50px;
            img {
                position: relative;
                top: -30vh;
                width: 100%;
                z-index: -1;

            }
        }
@media (min-width: 1985px) {
.wrap_img {
    height: 400px;
    img {
        top: -30vh;
    }
}
}

@media (max-width: 1985px) {
        .wrap_img {
            height: 300px;
            img {
                top: -200px;
            }
        }
}


@media (max-width: 1289px) {
        .wrap_img {
            height: 300px;
            img {
                top: -10vh;
            }
        }
}


    @media (max-width: 768px) {
        .wrap_img {
            height: 200px;
            img {
                top: -100px;
            }
        }
}

@media (max-width: 480px) {
        .wrap_img {
            height: 150px;
            img {
                top: -20px;
            }
        }
}


</style>