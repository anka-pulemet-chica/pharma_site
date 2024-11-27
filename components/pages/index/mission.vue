<template>
    <div class="rows">
            <div class="left_part">
                <Tag> {{ $t('home-mission-tag') }}</Tag>
            </div>
            <article class="right_part">
                <h3>{{ slogan }}</h3>
                <p> {{  slogan_description }}</p>
                <h4> {{ list_title }}</h4>
                <div v-html="list"></div>


                <NuxtImg class="image" :src="source" />
            </article>
        </div>

</template>

<style scoped>
.rows {

        article {

            .image {
                padding-top: 40px;
            }
        }
    }
</style>

<script>
export default {
  props: {
    slogan: String,
    slogan_description: String, 
    list_title: String,
    list: String,
    source: String

  }
};
</script>