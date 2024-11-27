<template>
    <div class="rows">
            <div class="left_part">
                <Tag>{{$t('home-politics-tag')}}</Tag>
            </div>
            <article class="right_part">
                <h4>{{$t('home-politics-title')}}</h4>
                <p v-html="policy"></p>
            </article>
        </div>

</template>

<style scoped>
.rows {
  text-wrap: wrap;
}
</style>

<script>
export default {
  props: {
    policy: String,

  }
};
</script>