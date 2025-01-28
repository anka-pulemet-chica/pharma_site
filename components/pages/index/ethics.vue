<template>
    <div class="rows">
            <div class="left_part">
                <Tag>{{$t('home-ethics-tag')}}</Tag>

                <!-- <div class="doc">
                    <NuxtImg src="/images/documents/DNA.svg" width="50" />
                    <div class="desc">
                        <p>Этический кодекс</p>
                        <span class="size">1.5 МБ</span>
                        <span class="download"> Скачать PDF</span>
                    </div>
                </div> -->
            </div>
            <article class="right_part">
                <p> {{slogan}}</p>
                <h4> {{list_title}} </h4>
                <div v-html="list"></div>
                <div class="image">
                    <NuxtImg  :src="source" />
                </div>
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

    .image {
            img { 
                border-radius: 20px;
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