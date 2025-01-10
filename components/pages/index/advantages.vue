<template>
    <div class="rows">
        <div class="left_part">
            <Tag>{{ $t('advantages') }}</Tag>
            <NuxtLink :to="$localePath('/company/advantages')"><AppLink>{{ $t('home-link') }}</AppLink></NuxtLink>
            <NuxtImg :src="img1" class="image" />

            <div v-html="logistics"></div>
        </div>
        <div class="right_part">
            <h3>{{ $t('advantages') }} </h3>
            <div v-html="list">
            </div>

            <div class="image">
              <NuxtImg :src="img2"/>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  props: {
    list: String,
    img1: String, 
    img2: String,
    logistics: String
  }
};
</script>