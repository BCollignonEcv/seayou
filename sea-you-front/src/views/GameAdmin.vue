<template>
  <section class="home background_littoral">
    <header-app />
    <div class="wrapper-center">
      <div class="interface-center">
            <game-config-form />
      </div>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
import gameConfigurationForm from '@/components/forms/GameConfigForm'
import Header from '@/components/Header'

export default {
  components: {
    'game-config-form': gameConfigurationForm,
    "header-app": Header
  },
  data () {
    return {
        game: [],
    }
  },
  methods: {
  }
}
</script>