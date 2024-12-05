<template>
    <section>
        <div class="wrapping">
            <NuxtImg :src="source"/>
        </div>
        <div class="rows">
            <div class="left_part">
                <Tag> {{ $t('home-about-tag') }}</Tag>
                <NuxtLink :to="$localePath('/company/aboutus')"><AppLink>{{ $t('home-link') }}</AppLink></NuxtLink>
            </div>
            <article class="right_part">
                <h3>{{ $t('home-about-tag') }} </h3>
                <p v-html="about"></p>
            </article>
        </div>

        <div class="galery">
            <div v-for="(item, index) in source_gallery" :key="index" class="wrapping">
                <NuxtImg :src="`${$config.public.StrapiUrl}${item.url}`" />
            </div>

        </div>
    </section>
</template>


<style scoped>

    .galery {
        display: flex;
        justify-content: center;
        padding-top: var(--outer-indent);
        gap: var(--outer-indent-small);
        align-items: flex-start;

        .wrapping:nth-child(2) {
            margin-top: 20px;
        }
    }

    @media (max-width: 480px) {
        .galery {
            align-items: center;
            flex-direction: column;
            gap: 10px;
            
            .wrapping:nth-child(2) {
            margin-top: 0;
        }
        }
        
    }
</style>

<script>
export default {
  props: {
    about: String,
    source: String,
    source_gallery: Array
  }
};
</script>