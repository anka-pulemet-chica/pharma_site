<template>
    <div class="rows">
        <div class="left_part">
                <NuxtLink :to="$localePath('/contacts')"><Tag>{{ $t('contactUs') }}</Tag></NuxtLink>
            </div> 

        <section class="right_part">
            <div class="content">
                <div>
                <div class="text">
                    <div class="hooks"> « </div>
                    <p>{{quote_text}}</p>
                    <div class="hooks"> » </div>
                </div>
                    <span>{{ quote_fio }}</span>
                    <span>{{quote_position}}</span>
                </div>
                
                <div class="wrapping">
                    <NuxtImg :src="quote_image" />
                </div>
            </div>

            <div class="contacts">
                <span class="text">{{ quote_contacts_title }}</span>
                <div class="box">
                    <NuxtImg src="/images/index/quote/Vector.svg" width="23px"/>
                    <span>{{quote_email}}</span>
                </div>
                <div class="box">
                    <NuxtImg src="/images/index/quote/Vector1.svg" width="20px"/>
                    <span>{{quote_number}}</span>
                </div>
                
            </div>

        </section>
    </div>

</template>

<style scoped>
.right_part {
    .content {
        display: flex;
        align-items: stretch;
        
        gap: 20px;
        padding: 40px;
        
        background-color: var(--grey-light);
        border-radius: 20px;
        font-size: 0.9rem;
        

        .text {
            line-height: 1.2;
            display: flex;
            gap: 10px;
            padding-bottom: 20px;


            .hooks {
            line-height: 0.9;
            font-size: 40px;
            font-weight: 100;
            color: var(--green);

            position: relative;
            top: -5px;
            }      
        }

        span {
                padding-top: 10px;
                display: block;
                padding-left: 20px;
                font-weight: 200;
            }

        .wrapping {
            flex-shrink: 0;
            width: 30%;
            display: flex;
            align-items: center;  
        }
      
    }

    .contacts {
        .text {
            padding: 40px 0;
            display: block;
            
        }
    }

    .box {
        display: inline-block;
        border-radius: 10px;
        padding: 10px 20px;
        background-color: var(--green);
        color: white;
        margin-right: 40px;

        img {
            margin-right: 10px;
        }
    }
}

@media (max-width: 768px) {
    .right_part {

        .content {
        flex-wrap: wrap;
        gap: 10px;
        padding: 20px;

        .text {
            .hooks {
                font-size: 28px;
            }
        }

        .wrapping {
            flex-shrink: 0;
            width: 100%;
            display: flex;
            align-items: center;  
        }
        }
        .box {
            display: block;
            margin: 20px 0;

            display: flex;
            justify-content: center;
        }
    }

    
}


</style>

<script>
export default {
  props: {
    quote_text: String,
    quote_fio: String, 
    quote_position: String,
    quote_contacts_title: String,
    quote_number: String, 
    quote_email: String,
    quote_image: String

  }
};
</script>