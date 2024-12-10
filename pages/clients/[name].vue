<template>
    <NuxtLink :to="$localePath('clients')"><AppLink>{{ $t('back') }}</AppLink></NuxtLink>

    <div class="rows">
      <div class="left_part">
        <Tag>{{ $t('partners-tag') }}</Tag>
        <PhoneAndEmail />

      </div>

      
      <div class="right_part">
        <div class="rows">
            <div class="right_part">
        <h1>{{ data.data.name }}</h1>
        <p class="tag" >{{ data.data.tag }}</p>
            </div>
        
        <div class="wrapping">
          <img :src="`${$config.public.StrapiUrl}${data.data.icon.url}`" :alt="data.data.name" />
        </div>
    </div>
        <p v-html="data.data.description" class="description"></p>
        
      
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
    data = await fetchData(`clients/${name}`, locale.value)
}

let loadDataPhones = async () => {
  dataPhones = null;
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

.description {
    padding-top: var(--outer-indent);
}


@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>