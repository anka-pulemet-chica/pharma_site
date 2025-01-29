<template>
    <div class="tag" id="tag">
        <slot />
    </div>
</template>

<style>
    .tag {
        border: 1px solid var(--grey);
        border-radius: 30px;
        padding: 9px 15px;
        width: fit-content;
        height:fit-content;
        font-size: 14px;
        font-weight: 300;

        transition: all 0.2s;

        position: relative;
        
        margin-bottom: var(--outer-indent-small);        

    }


    .tag:hover {
        color: white;
        border-color: white;
        background-color: var(--green);
    }

    @media (max-width: 480px) {
        .tag {
            font-size: 0.9rem;
            margin-bottom: 10px;
        }
    }
</style>