<template>
    <div>
      <form v-on:submit.prevent="submitForm" class="form_container">
        <h2> Se connecter en administrateur</h2>
        <div>
          <input type="email" class="form-control"  placeholder="Email" v-model="email"/>
        </div>
        <div>
          <input type="password" class="form-control" placeholder="Mot de passe" v-model="password"/>
        </div>
      <button type="submit" class="btn btn_large">Connexion</button>
      <p v-if="message" class="error">{{message}}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'

export default {
  components: {
  },
  data () {
    return {
      email: null,
      password: null,
      message: null
    }
  },
  methods: {
    async submitForm () {
      await axios.post('http://localhost:8090/api/users/login', {
        email: this.email,
        password: this.password,
      }).then(res => {
        if (!res.message) {
          router.push('/admin/game/' + res.data[0].id)
        }})
        .catch( error => {
          this.message = error.name
      })
    },

    register () {
      router.push('/register')
    }
  }
}
</script>
