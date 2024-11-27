<template>

<section>
    <div class="partners">
        <div v-for="(item, index) in source_gallery" :key="index">
            <NuxtImg :src="`http://localhost:1337${item.url}`" />
        </div>
    </div>
</section>

</template>

<style scoped>

section {
    padding: var(--outer-indent-big) var(--outer-indent-small);
    display: flex;
    flex-direction: column;
}

.partners {
    display: flex;
    justify-content: space-between;
    gap: 5px;


    img {
        height: 40px;
    }
}

@media (max-width: 768px) {
    section {
        padding: var(--outer-indent-small);
    }
}

</style>

<script>
export default {
  props: {
    source_gallery: Array
  }
};
</script>