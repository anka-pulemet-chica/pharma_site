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
                <p> {{slogan}}</p>
                <h4> {{list_title}} </h4>
                <div v-html="list"></div>



                <NuxtImg class="image" :src="source" />
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

        article {
            .image {
                width: 100%;
                padding-top: 40px;
            }
        }
    }
</style>

<script>
export default {
  props: {
    slogan: String,
    list_title: String,
    list: String,
    source: String
  }
};
</script>