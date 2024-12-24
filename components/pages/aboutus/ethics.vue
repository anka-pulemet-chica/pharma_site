<template>
    <div class="rows">
            <div class="left_part">
                <Tag>{{$t('home-ethics-tag')}}</Tag>

                <div class="doc">
                    <NuxtImg src="/images/documents/DNA.svg" width="50" />
                    <div class="desc">
                        <p>Этический кодекс</p>
                        <span class="size">1.5 МБ</span>
                        <span class="download"> Скачать PDF</span>
                    </div>
                </div>
            </div>
            <article class="right_part">
                <h3>{{ title }}</h3>
                
                <div v-html="list"></div>
            
            </article>
        </div>

</template>

<style scoped>

.rows {

    .desc {
        display: flex;
        flex-direction: column;
        color: var(--grey);

        .size {
            font-size: 14px;
        }

        .download {
            padding: 20px 0 10px;
            color: var(--green);
            width: fit-content;
            border-bottom: 2px solid var(--green);
        }
    }
}

</style>

<script>
export default {
  props: {
   
    list: Array,
    title: String
  }
};
</script>