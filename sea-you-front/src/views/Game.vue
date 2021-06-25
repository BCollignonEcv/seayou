<template>
  <div>
      <section class="game background_littoral_game">
        <el-player v-for="(player, index) in game.players" :key="index" 
                v-bind:id="player.id" 
                v-bind:name="player.pseudo"
                v-bind:pathImg="player.pathImg"
                v-bind:mandatory="true"/>
        <el-interface />
      </section>
  </div>
</template>

<script>
import axios from 'axios'
import ElPlayer from '@/components/gameElements/elPlayer'
import ElInterface from '@/components/gameElements/elInterface'

export default {
  components: {
    'el-player': ElPlayer,
    'el-interface': ElInterface,
  },
  data () {
    return {
      game: [],
      players: [
        {pseudo: 'Mathéo', pathImg: "maire.png", id: "12EZ231"}
      ]
    }
  },
  methods: {
        async fetchData () {
            var url = 'http://localhost:8090/api/games/' + this.$route.params.id
            axios.get(url)
                .then(res => {
                    this.game = res.data
                })
        },
    },
    mounted () {
        this.fetchData()
    }
}
</script>