<template>
    <section>
        <div class="rows">
            <div class="left_part">
                <NuxtLink :to="$localePath('/company/aboutus')"><Tag> {{ $t('home-about-tag') }}</Tag></NuxtLink>
                <NuxtLink :to="$localePath('/company/aboutus')"><AppLink>{{ $t('home-link') }}</AppLink></NuxtLink>
            </div>
            <article class="right_part">
                <h3>{{ $t('home-about-tag') }} </h3>
                <p v-html="about"></p>
            </article>
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
    about: String
  }
};
</script>