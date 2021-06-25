<template>
  <div id="app">
    <router-view />
    <embed name="backgroundMusic" src="/static/music/music.mp3" loop="true" hidden="true" autostart="true">
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
}
</script>

<style>

</style>
