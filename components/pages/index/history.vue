<template>
    <div class="rows">
        <div class="left_part">
            <NuxtLink :to="$localePath('/company/history')"><Tag>{{ $t('history') }}</Tag></NuxtLink>
            <NuxtLink :to="$localePath('/company/history')"><AppLink>{{ $t('home-link') }}</AppLink></NuxtLink>
        </div>
        <div class="right_part">
            <h3> {{ $t('history') }}</h3>
            <PagesHistoryTimeline/>
        </div>
    </div>
</template>

<script setup>
</script>