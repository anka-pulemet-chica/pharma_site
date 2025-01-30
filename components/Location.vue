<template>
    <section @click="closeAddress" v-if="model">
        <div class="location" id="card">
            <div class="close">
                X
            </div>
            <div class="wrapping" id="card">
                <div class="text" id="card">
                <p id="card"> {{ $t('contacts') }}: </p>
                <div id="card" class="info" v-if="address"> {{ props.address.data.address }}</div>
                <p id="card"> {{ $t('contacts-tel') }}: </p>
                <a :href=" `tel:${props.phones.data.phone_1}`"> <div id="card" class="info" v-if="phones"> {{ props.phones.data.phone_1 }}</div> </a>
                <a :href=" `tel:${props.phones.data.phone_2}`">  <div id="card" class="info" v-if="phones"> {{ props.phones.data.phone_2 }}</div> </a>
                <a :href=" `tel:${props.phones.data.phone_3}`"> <div id="card" class="info" v-if="phones"> {{ props.phones.data.phone_3 }}</div> </a>

            </div>
                <div class="tree">
                <NuxtImg src="/images/layouts/tree.svg"  id="card"/>
                </div>
            </div> 
    </div>
    </section>
    
</template>

<script setup>
    const props = defineProps(['address', 'phones'])
    const model = defineModel()

    function closeAddress(event) {
        if(event.target.id !== 'card') {
            model.value = null
        }
    }

</script>

<style scoped>
    section {
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.7);
        

        display: flex;
        justify-content: center;
        align-items: center;
        
        .location {
            background-color: var(--green);
            color: white;
            border-radius: 10px;
            padding: 10px 20px;
            width: fit-content;
            
            position: relative;
            
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);

            display: flex;
            flex-direction: column;
            align-items: flex-end;

            a {
                color: white;
            }



            .close {

                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 30px;
                padding: 8px 12px;
                font-size: 12px;
                font-weight: 200;
                background-color: rgba(255, 255, 255, 0.1);
                cursor: pointer;

            }

            .close:hover {
                background-color: rgba(255, 255, 255, 0.2);

            }

            .wrapping {
                display: flex;
                justify-content: space-between;
            }

            .text {
                padding-bottom: 40px;
                max-width: 300px;

                p {
                    padding-top: 20px;
                    text-transform: uppercase;
                    font-weight: 400;
                    padding-bottom: 10px;
                    text-wrap: wrap;
                }
            }

            .tree {

                align-self: flex-end;

                img {
                    height: 70px;

                }
            }
        }
        
    }
</style>