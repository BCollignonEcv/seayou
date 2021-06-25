<template>
  <div>
      <form v-on:submit.prevent="submitForm" class="form_container">
        <h2>Rejoindre une partie</h2>
        <div>
            <input type="text" v-model="pseudo" placeholder="Pseudo" required/>
        </div>
        <div>
            <input type="text" v-model="code" placeholder="Code de la partie" required/>
        </div>
      <button type="submit" class="btn btn_large btn_primary">Rejoindre</button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
import router from '@/router'

export default {
    data () {
        return {
            code: this.code,
        }
    },
    methods: {
        submitForm () {
            // await axios.put('http://localhost:8090/api/games/join/'+this.code, {
            //     players: []
            // }).then(res => {
            //         if (!res.data.error) {
            //             console.log(res)
        router.push('/game/' + this.code)
                //     }
                // })
        },
    }
}
</script>

<style>

</style>
