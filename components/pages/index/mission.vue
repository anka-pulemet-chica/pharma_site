<template>
    <div class="rows">
            <div class="left_part">
                <Tag> {{ $t('home-mission-tag') }}</Tag>
                <NuxtImg :src="img1" class="image" />

            </div>
            <article class="right_part">
                <h3>{{ slogan }}</h3>
                <p> {{  slogan_description }}</p>
                <h4> {{ list_title }}</h4>
                <div v-html="list"></div>


                <div class="image">
                    <NuxtImg :src="img2"/>
                </div>
            </article>
        </div>

</template>

<style scoped>
.rows {

    .left_part{
        .image {
            width: 90%;
            border-radius: 20px;
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
    img1: String,
    img2: String

  }
};
</script>