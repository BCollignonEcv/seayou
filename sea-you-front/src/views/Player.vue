<template>
    <section class="background_littoral">
        <header-app />
        <div class="wrapper-center">
            <div class="interface-center">
                <el-player name="Pseudo"/>
                <player-form />
            </div>
        </div>
    </section>
</template>

<script>

import PlayerForm from '@/components/forms/PlayerForm'
import ElPlayer from '@/components/gameElements/elPlayer'
import Header from '@/components/Header'


export default {
  components: {
    "player-form": PlayerForm,
    'el-player': ElPlayer,
    'header-app': Header
  },
} 
</script>