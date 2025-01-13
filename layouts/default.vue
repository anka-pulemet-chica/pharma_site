<template>
    <div>
        <header>
            <div class="logo">
                <NuxtLink :to="$localePath('index')"><NuxtImg src="/images/layouts/logo.svg" /> </NuxtLink>
            </div>
            <AppHeaderWithoutLogo class="margins"/>
        </header>
        <div class="margins">
            <slot />
        </div>
        
        <AppFooter />
    </div>
</template>

<style>
header {
    display: flex;
    justify-content: space-between;
}
.margins {
  margin: 1vw 8vw;
  color: var(--black);
}

.logo {
            img {
                width: 200px;
            }
        }
        

@media (max-width: 1024px) {
    .margins {
    margin: 1vw 6vw;
  }
}

@media (max-width: 768px) {
    .margins {
      margin: 2vw;
    }
}

@media (max-width: 480px) {
    .margins {
margin: 20px;
}
}
</style>