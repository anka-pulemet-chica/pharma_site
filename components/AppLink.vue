<template>

    <div class="content">
        <slot />
        <NuxtImg src="/images/components/arrow.svg" width="20px"/>
    </div>

</template>

<style scoped>
    .content {
        text-transform: uppercase;
        color: var(--green);

        display: flex;
        flex-direction: row;
        justify-content:flex-start;
        gap:10px;
        font-size: 16px;
        font-weight: 600;

        img {
            transition: transform 0.2s;
        }
    }

    .content:hover img {
            transform: translate(5px, -5px);
            cursor: pointer;
        }

       
</style>