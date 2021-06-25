<template>
    <div>
        <div class="gameOption-component flex justify-between">
            <button class="btn-interface btn-interface-text secondary">
                <img class="btn-icon" src="/static/img/icons/timer.svg">
                <p>00:00</p>
            </button>
            <button  class="btn-interface btn-interface-text clickable thirdly">
                <img class="btn-icon" src="/static/img/icons/livre.svg">
                <p>Règles du jeu</p>
            </button>
            <button class="btn-interface clickable fourth">
                <img class="btn-icon" src="/static/img/icons/carte.svg">
            </button>
            <button class="btn-interface clickable secondary">
                <img class="btn-icon" src="/static/img/icons/parametres.svg">
            </button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
    .btn-interface{
        font-size: 18px;
        border-radius: 100%;
        border: none;
        height: 46px;
        width: 46px;
    }

    .btn-interface.clickable{
        cursor: pointer;
    }

    .btn-interface-text{
        display: flex;
        border-radius: 25px;
        width: auto;
    }

    .btn-interface img.btn-icon{
        margin: 9px 8px;
    }

    .btn-interface-text img.btn-icon{
        margin: 12px;
    }

    .btn-interface-text p{
        margin: 12px 8px 12px 0;
    }

    .btn-interface.primary{
        background-color: var(--color-primary);
        color: var(--color-primary);
    }

    .btn-interface.secondary{
        background-color: var(--color-secondary);
    }

    .btn-interface.secondary.clickable:hover{
        background-color: var(--color-thirdly);
    }

    .btn-interface.thirdly{
        background-color: var(--color-thirdly);
    }

    .btn-interface.thirdly.clickable:hover{
        background-color: var(--color-secondary);
    }

    .btn-interface.fourth{
        background-color: var(--color-fourth);
    }

    .btn-interface.fourth:hover{
        background-color: var(--color-neutral);
    }

    img.btn-icon{
        height: 20px;
        width: auto;
    }
</style>