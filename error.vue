<template>        
<NuxtLayout>
    <div class="err">
            <h1>{{ $t('error-heading') }}</h1>
            <h4 v-if="error"> {{ $t('error-status')}} {{ error.statusCode }}</h4>
            <NuxtLink :to="$localePath('index')"> {{ $t('error-button-back') }} </NuxtLink>
    </div>
</NuxtLayout>

</template>


<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>


<style scoped>
.err {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 22vh 0;
    gap: 30px;

    a {
        border: 1px solid var(--grey);
        border-radius: 20px;
        padding: 10px 20px;
        position: relative;
        transition: all 0.15s ease-in-out;

        font-weight: 400;
    }

    a:hover {
        background-color: var(--green);
        border-color: var(--green);
        color: white;
    }

    a::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: var(--color-pale-blue);
        opacity: 10%;
        transition: width 0.15s ease-in-out;

    }

    a:hover::before  {
        width: 100%;
    }
    
    a:active {
        transform: scale(0.95);
        background-color: var(--color-common-blue);
        color: white;
    }

    

}

</style>