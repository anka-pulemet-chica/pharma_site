<template>
    <div class="rows">
            <div class="left_part">
                <Tag>{{$t('home-ethics-tag')}}</Tag>

                <div class="doc">
                    <NuxtImg src="/images/documents/DNA.svg" width="50" />
                    <a href="/docs/Кодекс корпаративной этики_2025.pdf" download>
                    <div class="desc">
                        <p>Этический кодекс</p>
                        <span class="size">1.5 МБ</span>
                        <span class="download"> {{$t('downloadPDF')}}</span>
                    </div>
                </a>
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
   
    list: String,
    title: String
  }
};
</script>