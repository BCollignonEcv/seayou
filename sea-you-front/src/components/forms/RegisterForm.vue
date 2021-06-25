<template>
  <div>
    <form v-on:submit.prevent="submitForm" class="form_container">
      <h2>S'inscrire</h2>
      <div>
        <input type="email" placeholder="Email" name="email" v-model="email" required/>
      </div>
      <div>
        <input type="password" placeholder="Mot de passe" v-model="password" required/>
      </div>
      <div>
        <input type="text" placeholder="Prénom" v-model="firstname" required/>
      </div>
      <div>
        <input type="text" placeholder="Nom" v-model="lastname" required/>
      </div>
      <div>
        <input type="text" placeholder="Organisme" v-model="organisme" required/>
      </div>
      <div style="position: relative">
        <select v-model="degree" required class="">
          <option value="6">6ème</option>
          <option value="5">5ème</option>
          <option value="4">4ème</option>
          <option value="3">3ème</option>
          <option value="2">2nd</option>
          <option value="1">1er</option>
        </select>
      </div>
    <button type="submit" class="btn btn_large">S'inscrire</button>
  </form>
  </div>

</template>

<script>
import axios from 'axios'
import jwt_decode from "jwt-decode"
import router from '@/router'

export default {
  components: {
  },
  data () {
    return {
      email: null,
      password: null,
      firstname: null,
      lastname: null,
      organisme: null,
      degree: null,
    }
  },
  methods: {
    async submitForm () {
      const res = await axios.post('http://localhost:3000/api/users', {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        organisme: this.organisme,
        degree: this.degree,
      })
      if (res) {
        const { accessToken } = res.data

        const { sub } = jwt_decode(accessToken)

        localStorage.setItem('vuejs_token', accessToken)
        localStorage.setItem('vuejs_user_id', sub)

        router.push('/admin')
      }
    }
  }
}
</script>

<style>
input{
  background-color: white;
}
</style>
