<template>
    <div>
        <AppHeader class="margins"/>
        <div class="margins">
            <slot />
        </div>
        
        <AppFooter />
    </div>
</template>

<style>
.margins {
  margin: 1vw 8vw;
  color: var(--black);
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