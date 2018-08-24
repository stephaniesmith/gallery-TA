<template>
  <div class="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Albums from './components/Albums.vue'
import AddAlbum from './components/AddAlbum.vue'
import AlbumDetail from './components/AlbumDetail.vue'

export default {
  name: 'app',
  components: {
    Home,
    About,
    Albums,
    AddAlbum,
    AlbumDetail
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
