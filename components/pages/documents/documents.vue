<template>
    <div class="documents">
            <div class="left_part">
                <Tag>{{$t('home-docs-tag')}}</Tag>
            </div>
            <article>
                <h3>{{$t('home-docs-tag')}}</h3>
                <p> {{ docs }}</p>
                
                <div class="docs">
                <div class="doc">
                    <NuxtImg src="/images/documents/shield.svg"/>
                    <div class="desc">
                        <h5>Свидетельство</h5>
                        <p>о государственной регистрации</p>
                        <span class="size">3.87 МБ</span>
                        <span class="download">  {{$t('downloadPDF')}}</span>
                    </div>
                </div>

                <div class="doc">
                    <NuxtImg src="/images/documents/man.svg" />
                    <div class="desc">
                        <h5>GDP</h5>
                        <p>надлежащая практика дистрибьюции</p>
                        <span class="size">3.3 МБ</span>
                        <span class="download">  {{$t('downloadPDF')}}</span>
                    </div>
                </div>

                <div class="doc">
                    <NuxtImg src="/images/documents/pill.svg" />
                    <div class="desc">
                        <h5>Лицензия</h5>
                        <p>фармацевтической деятельности</p>
                        <span class="size">1.8 МБ</span>
                        <span class="download">  {{$t('downloadPDF')}}</span>
                    </div>
                </div>

                <div class="doc">
                    <NuxtImg src="/images/documents/DNA.svg" />
                    <div class="desc">
                        <h5>Кодекс</h5>
                        <p>стандарты поведения</p>
                        <span class="size">1.5 МБ</span>
                        <span class="download">  {{$t('downloadPDF')}}</span>
                    </div>
                </div>

                <div class="doc">
                    <NuxtImg src="/images/documents/note.svg"  />
                    <div class="desc">
                        <h5>Устав</h5>
                        <p>стандарты поведения</p>
                        <span class="size">2 МБ</span>
                        <span class="download">  {{$t('downloadPDF')}}</span>
                    </div>
                </div>

                <div class="doc">
                    <NuxtImg src="/images/documents/case.svg"  />
                    <div class="desc">
                        <h5>Кодекс</h5>
                        <p>стандарты поведения</p>
                        <span class="size">1 МБ</span>
                        <span class="download">  {{$t('downloadPDF')}}</span>
                    </div>
                </div>
            </div>
            </article>
        </div>

</template>

<style scoped>

.documents {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding-top: 80px;

        
            .docs {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .doc {
                    width: 30%;
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    padding-top: 40px;

                    img {
                        width: 64px;
                        flex-shrink: 0;
                    }
                }
            }


            .desc {
                h5 {
                    color: var(--black);
                    font-size: 18px;
                    font-weight: 600;
                }
                
                display: flex;
                flex-direction: column;
                color: var(--grey);
                gap: 10px;


                .download {
                    padding: 20px 0 10px;
                    color: var(--green);
                    width: fit-content;
                    border-bottom: 2px solid var(--green);
                }
            }

        article {
            width: 60%;

            h3{
                font-size: 32px;
                font-weight: 700;
                text-transform: uppercase;
                color: var(--black);
                padding-bottom: 20px;
            }

            p {
                font-size: 16px;
            }
        }
    }
</style>


<script>
export default {
  props: {
    docs: String

  }
};
</script>