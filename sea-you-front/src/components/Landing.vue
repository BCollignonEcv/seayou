<template>
    <div>
        <button class="btn btn_thirdly btn_large" @click="toggleAdmin">Créer une partie</button>
        <button class="btn btn_primary btn_large" @click="togglePlayer">Rejoindre une partie</button>
    </div>
</template>

<script>

import router from '@/router'

export default {
    data (){
        return {
        }
    },
    methods: {
        toggleAdmin: function(){
            router.push('/admin')
        },
        togglePlayer: function(){
            router.push('/player')
        }
    }
} 
</script>