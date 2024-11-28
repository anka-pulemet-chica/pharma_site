<template>
    <div class="content">
        <slot />
    </div>
</template>

<style scoped>
    .content {
        border: 1px solid var(--black);
        border-radius: 30px;
        padding: 9px 15px;
        width: fit-content;
        height:fit-content;
        font-size: 16px;
        font-weight: 400;

        position: relative;
        overflow: hidden;
        transition: color 0.2s;
        
        margin-bottom: var(--outer-indent-small);

        z-index: -1;
    }

    .content::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 30px;
            background-color: var(--green);
            transform: translate(-100%, -100%);
            transition: transform 0.1s;
            z-index: -1;
        }
    .content:hover::before {
            transform: translate(0, 0);
        }

    .content:hover {
        color: white;
        border-color: white;
    }

    @media (max-width: 480px) {
        .content {
            font-size: 0.9rem;
            margin-bottom: 10px;
        }
    }
</style>
