<template>
    <section>
        <div class="rows">
            <div class="left_part">
                <Tag> {{ $t('home-about-tag') }}</Tag>
            </div>
            <article class="right_part">
                <h1>{{ $t('home-about-tag') }} </h1>
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