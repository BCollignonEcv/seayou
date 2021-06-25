<template>
  <div class="gameConfiguration">
    <form v-on:submit.prevent="submitForm" class="form_container">
        <h2> Créer une partie - Paramètres </h2>
        <div class="flex flex-item">
          <div>
            <label for="name">Nom de la partie</label>
            <input type="text" placeholder="Nom de la partie" v-model="name"/>
          </div>
          <div>
            <label for="limit_player">Nombre de joueur</label>
            <input type="number" placeholder="Nombre de joueur" max="6" v-model="limit_player"/>
          </div>
          <div>
            <label for="vocal">Chat vocal</label>
            <select v-model="vocal" required>
              <option value="true" selected>Activer</option>
              <option value="false">Désactiver</option>
            </select>
          </div>
        </div>
        <div v-if="limit_player > 0">
          <h5>Choix du littoral</h5>
            <select v-model="littoralId" @change="setupRoles()" required>
              <option selected hidden disabled>Choisir</option>
              <option v-for="(littoral, index) in littorals" :key="index" :value="littoral.id">
                {{ littoral.name }}
              </option>
            </select>
        </div>
        <div v-if="littoralId">
          <h5>Roles classique</h5>
            <div class="flex flex-item">
              <el-role v-for="(role, index) in rolesMandatory" :key="index" 
                      v-bind:name="role.fr.name" 
                      v-bind:pathImg="role.pathImg"
                      v-bind:mandatory="true"/>
            </div>
          <h5>Choix des roles</h5>
            <div class="flex flex-item" >
                <el-role v-for="(role, index) in roles" :key="index" 
                         v-bind:name="role.fr.name" 
                         v-bind:pathImg="role.pathImg"
                         v-bind:mandatory="role.mandatory"
                         :disabled="reachPlayerLimit"
                         @click.native="selectRole(role.id)" />
            </div>
        </div>
      <button type="submit" class="btn btn_large btn_primary">Créer la partie</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'
import ElRole from '@/components/gameElements/elRole.vue'
// import router from '@/router'


export default {
  components: {
    'el-role': ElRole
  },
  data () {
    return {
      name: "",
      limit_player: 0,
      littorals: [],
      littoralId: null,
      rolesMandatory: [],
      roles: [],
      roleSelected: [],
      reachPlayerLimit: false,
      vocal: null
    }
  },
  methods: {
    async submitForm () {
      await axios.post('http://localhost:8090/api/games', {
        name: this.name,
        limitPlayers: this.limit_player,
        littoralId: this.littoralId,
        roles: this.roleSelected,
        private: true,
        vocal: this.vocal,
        status: 1,
        user: "60d5874ae1e2265afcfd2248"
      }).then(res => {
        if (!res.message) {
          router.push('/admin/game/waiting/' + res.data.id)
        }})
        .catch( error => {
          this.message = error.name
      })
    },

    async setupLittorals () {
      axios.get('http://localhost:8090/api/littorals')
        .then(res => (this.littorals = res.data))
    },

    async setupRoles () {
      this.roles = []
      this.rolesMandatory = []
      this.roleSelected = []
      axios.post('http://localhost:8090/api/roles/littoral', {littoralId: this.littoralId})
        .then(res => {
          this.rolesMandatory = res.data[0]
          this.roles = res.data[1]
          res.data[0].forEach(element => {
            this.roleSelected.push(element.id)
          });
        })
    }, 
    selectRole: function (id){
      if(this.roleSelected === (this.limit_player - 1)){
        this.reachPlayerLimit = true
        alert("Limite de "+ this.limit_player +" atteinte")
      } else {
        this.reachPlayerLimit = false
        const index = (this.roleSelected).indexOf (id)
        if (index >= 0) {
          this.roleSelected.splice(index, 1)
        } else {
          this.roleSelected.push(id)
        }
      }
    }
  },
  beforeMount () {
    this.setupLittorals()
  }
}
</script>

<style>
  .gameConfiguration{
    width: 50vw;
    min-height: 70vh;
    background-color: var(--color-secondary);
    border-radius: 25px;
    padding: 25px;
    text-align: left;
  }

  .gameConfiguration h2{
    text-align: left;
  }

  .gameConfiguration input, .gameConfiguration select{
    width: 250px;
    margin-left: 0;
  }

  .gameConfiguration form> *+*{
    margin-top: 12px;
  }

  .littoral{
    width: 8vw;
  }

  .flex.flex-item{
    flex-wrap: wrap;
  }

  .flex.flex-item > *{
    margin: 5px;
  }
</style>