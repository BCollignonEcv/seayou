<template>
  <section class="home background_littoral">
    <header-app />
    <div class="wrapper-center">
      <div class="interface-center">
          <img class="logo logo-w-responsive" src="@/assets/img/logo_blanc.png" alt="">
          <landing />
          <img class="logo logo-h-small" src="@/assets/img/surfrider.png" alt="">
      </div>
    </div>
  </section>
</template>
<script>

import Landing from '@/components/Landing'
import Header from '@/components/Header'

export default {
  name: "Home",
  components: {
    "landing": Landing,
    "header-app": Header
  },
}
</script>

<style scoped>

</style>
