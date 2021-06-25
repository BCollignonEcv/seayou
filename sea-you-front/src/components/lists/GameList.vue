<template>
  <div class="game-list">
    <ul>
        <li v-for="(game, index) in games" :key="index" class="flex justify-between">
            <p>{{ game.name }}</p>
            <p>Nombre de joueur : {{Object.keys(game.players[0]).length}} / {{ game.limit_user }}</p>
            <button v-on:click="joinGame(game.id)">Rejoindre</button>
        </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'
import router from '@/router'

export default {
    props: ['statusParam', 'ownerParam', 'privateParam'],
    data () {
        return {
            games: [],
            status: this.statusParam,
            owner: this.ownerParam,
            private: this.privateParam
        }
    },
    methods: {
        async fetchData () {
            var url = 'http://localhost:3000/games?_extend=players'
            if (this.status) {
                url = url + '&status=' + this.status
            }
            if (this.owner) {
                url = url + '&userId=' + this.owner
            }
            if (this.private) {
                if (this.private === 'private') {
                    url = url + '&private=' + true
                }
                if (this.private === 'public') {
                    url = url + '&private=' + false
                }
            }
            axios.get(url)
                .then(res => {
                    this.games = res.data
                    console.log(res)
                })
        },
        joinGame(id){
            router.push('/game/'+id)
        }
    },
    mounted () {
        this.fetchData()
    }
}
</script>

<style scoped>
    .game-list{
        width: 50vw;
    }
</style>
