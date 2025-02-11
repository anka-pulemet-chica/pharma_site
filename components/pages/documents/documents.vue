<template>
    <div class="rows">
            <div class="left_part">
                <Tag>{{$t('home-docs-tag')}}</Tag>
            </div>
            <div class="right_part">
                <h3>{{$t('home-docs-tag')}}</h3>
                
                <div class="docs">
                    <div class="doc">
                        <NuxtImg src="/images/documents/shield.svg"/>
                        <a href="/docs/svidedelstvo.pdf" download>
                            <div class="desc">
                            <h5>Свидетельство</h5>
                            <p>о государственной регистрации</p>
                            <span class="size">3.87 МБ</span>
                            <span class="download">  {{$t('downloadPDF')}}</span>
                        </div>
                        </a>
                    </div>

                <div class="doc">
                    <NuxtImg src="/images/documents/man.svg" />
                    <a href="/docs/GDP.pdf" download>
                    <div class="desc">
                        <h5>ГДП</h5>
                        <p>надлежащая практика дистрибьюции</p>
                        <span class="size">3.3 МБ</span>
                        <span class="download">  {{$t('downloadPDF')}}</span>
                    </div>
                </a>
                    
                </div>

                <div class="doc">
                        <NuxtImg src="/images/documents/pill.svg" />
                        <a href="/docs/licence.pdf" download> 
                            <div class="desc">

                            <h5>Лицензия</h5>
                            <p>фармацевтической деятельности</p>
                            <span class="size">1.8 МБ</span>
                            <span class="download">  {{$t('downloadPDF')}}</span>
                        </div>
                    </a>
                </div>

                <!-- <div class="doc">
                    <NuxtImg src="/images/documents/DNA.svg" />
                    
                    <div class="desc">
                        <h5>Кодекс</h5>
                        <p>стандарты поведения</p>
                        <span class="size">1.5 МБ</span>
                        <span class="download">  {{$t('downloadPDF')}}</span>
                    </div>
                  
                </div> -->

                <div class="doc">
                    <NuxtImg src="/images/documents/note.svg"  />
                    <a href="/docs/docs/Антикоррупционная политика_2025.pdf" download> 
                    <div class="desc">
                        <h5>Политика компании</h5>
                        <p>антикоррупционная политика</p>
                        <span class="size">2 МБ</span>
                        <span class="download">  {{$t('downloadPDF')}}</span>
                    </div>
                </a>
                </div>

                <div class="doc">
                    <NuxtImg src="/images/documents/case.svg"  />
                    <a href="/docs/Кодекс корпаративной этики_2025.pdf" download>
                    <div class="desc">
                        <h5>Этика компании</h5>
                        <p>Этический кодекс</p>
                        <span class="size">1 МБ</span>
                        <span class="download">  {{$t('downloadPDF')}}</span>
                    </div>
                    </a>
                </div>
            </div>
        </div>
        </div>

</template>

<style scoped>

.rows {      
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
                height: 100%;
                h5 {
                    color: var(--black);
                    font-size: 18px;
                    font-weight: 600;
                }
                
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 10px;


                .download {
                    padding: 20px 0 10px;
                    color: var(--green);
                    width: fit-content;
                    border-bottom: 2px solid var(--green);
                }
            }
    }

    @media (max-width: 1190px) {

        .rows {
            .docs {
                .doc {
                    flex-direction: column;
                    justify-content: flex-end;
                }
            }
        }
        
    }

    @media (max-width: 768px) {

.rows {
    .docs {
        .doc {
            width: 50%;
            justify-content: flex-start;

            .desc {
                h5{
                font-size: 0.95rem;
            }
            font-size: 0.8rem;
                   }
        }
    }
}

}
</style>
