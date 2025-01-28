<template>

<section>
    <p> {{ $t('partners-heading') }} </p>
    <div class="partners">
        <div v-for="(item, index) in source_gallery" :key="index">
            <NuxtImg :src="`${$config.public.StrapiUrl}${item.url}`" />
        </div>
    </div>
</section>

</template>

<style scoped>

section {
    margin: var(--outer-indent-big) 0;
    display: flex;
    flex-direction: column;

   

    p {
        padding-bottom: var(--outer-indent-small);
        /* font-size: 0.9rem; */
        font-weight: 200;
        /* text-align: center; */
        /* text-transform: uppercase; */
    }
}

.partners {
    display: flex;
    justify-content: space-between;
    gap: 10px;


    img {
        height: 40px;
    }
}

@media (max-width: 768px) {
    section {
        padding: var(--outer-indent-small);
    }

    .partners {
        flex-wrap: wrap;
        row-gap: 20px;
        gap: 20px;
        justify-content: center;
    
        img {
        height: 20px;
    }
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