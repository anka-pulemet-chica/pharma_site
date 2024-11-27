<template>
    <!-- <div>
      <h1>{{ company.name }}</h1>
      <p>{{ company.description }}</p>
      <p><strong>Tag:</strong> {{ company.tag }}</p>
      <img :src="company.logo" :alt="company.name" />
    </div> -->

    HELLO

    {{ data }}
  </template>



<script setup>

import { useStrapiService } from '~/composables/useStrapiService'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const route = useRoute();
const { fetchData } = useStrapiService();
const { locale } = useI18n();

let data = ref(null);
const name = route.params.name;

let loadData = async () => {
    data = null;
    data = await fetchData('partners', locale.value, {name: { $eq: name }})
}

await loadData()

watch(locale, async () => {
  await loadData()
})

</script>