<template>
    <div>
    <h1>PHARMA MEDICAL GROUP</h1>
    <h2> {{ description }}</h2>
    <div class="image"> <NuxtImg :src="source"/>  </div>
    </div>
</template>

<style scoped>
    div {
        margin-top: var(--outer-indent);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        font-size: 18px;
        font-weight: 400;
        color: var(--grey);
    }

    .image {
        background-color: var(--grey-light);
        width: 100%;
        padding: 40px 0;

        img {
            height: 30vw;
        }
    }

    @media (max-width: 768px) {
        .image {
            img {
                padding: 5px 0;
                height: 30vh;
            }
        }
    }

    @media (max-width: 480px) {
        .image {
            img {
                height: 20vh;
            }
        }
    }

    
</style>


<script>
export default {
  props: {
    description: String,
    source: String
  }
};
</script>