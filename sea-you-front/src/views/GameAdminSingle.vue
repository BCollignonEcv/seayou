<template>
  <section class="home background_littoral">
    <header-app />
    <div class="wrapper-center">
      <div class="interface-center">
            <h5>Code de la partie</h5>
            <h2>{{ code }}</h2>
            <p class="playerNumber">0/5</p>
            <p>En attente de joueur</p>
            <a :href="'/game/'+ code"><button class="btn btn_primary">Commencer</button></a>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
import Header from '@/components/Header'

export default {
  components: {
    "header-app": Header
  },
  data () {
    return {
        code: this.$route.params.id
    }
  },
  methods: {
  },
}
</script>

<style scoped>
    h2{
        font-size: 2.5rem;
    }

    .playerNumber{
        background-color: var(--color-secondary);
        font-weight: bold;
        padding: 8px 12px;
        border-radius: 25px;
        display: inline-block;
    }
</style>