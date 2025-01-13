<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
useHead({
  title: 'PharmaMedicalGroup',
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" }
    ], 
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>