<template>
    <div class="content">
        <div class="text">
        <h1>PHARMA MEDICAL GROUP</h1>
        <h2> {{ description }}</h2> 
    </div>
    <div class="image"> 
        <img src="/public/images/layouts/logo.svg"/> </div>
    </div>
</template>

<style scoped>
    .content  {
        margin-top: var(--outer-indent-big);
        display: flex;
        justify-content: space-between; 
        align-items: center;
    }

    h2 {
        font-size: 18px;
        color: var(--grey);
        font-weight: 200;
    }

    .image {

        display: flex;

        img {
            height: 250px;
        }
    }

    @media (max-width: 768px) {

        .content  {
            flex-direction: column;
        }
        .image {
            img {
                padding: 5px 0;
                height: 200px;
            }
        }
    }

    @media (max-width: 480px) {
        .image {
            img {
                height: 200px;
            }
        }
    }

    
</style>


<script>
export default {
  props: {
    description: String  }
};
</script>