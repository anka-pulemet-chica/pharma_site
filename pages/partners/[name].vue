<template>
  <NuxtLink :to="$localePath('partners')"><AppLink>{{ $t('back') }}</AppLink></NuxtLink>
    <div class="rows">
      <div class="left_part">
        <Tag>{{ $t('partners-tag') }}</Tag>
        <PhoneAndEmail />
        

      </div>

      
      <div class="right_part">
        <h1>{{ data.data.name }}</h1>
        <p class="tag" >{{ data.data.tag }}</p>
        <div class="wrapping">
          <img :src="`${$config.public.StrapiUrl}${data.data.icon.url}`" :alt="data.data.name" />
        </div>
        <p v-html="data.data.description"></p>
        
      
      </div>
    </div>
  </template>

<script setup>

import { useStrapiService } from '~/composables/useStrapiService'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const { fetchData } = useStrapiService();
const { locale } = useI18n();

let data = ref(null);
const name = route.params.name;


let loadData = async () => {
    data = null;
    data = await fetchData(`partners/${name}`, locale.value)
}


await loadData()

watch(locale, async () => {
  await loadData()
})

</script>

<style scoped>
.tag {
  border-radius: 10px;
  color: white;
  background-color: var(--green);
  border: 2px solid var(--green);
  padding: 10px;
  width: fit-content;
}

.wrapping {
  margin: 20px 0;
}
</style>