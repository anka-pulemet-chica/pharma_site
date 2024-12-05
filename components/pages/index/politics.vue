<template>
    <div class="rows">
            <div class="left_part">
                <Tag>{{$t('home-politics-tag')}}</Tag>
            </div>
            <article class="right_part">
                <h3>{{$t('home-politics-title')}}</h3>
                <p v-html="policy"></p>
            </article>
        </div>

</template>

<style scoped>
.rows {
  text-wrap: wrap;

  h3 {
    text-wrap: wrap;
  }
}
</style>

<script>
export default {
  props: {
    policy: String,

  }
};
</script>