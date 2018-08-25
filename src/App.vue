<template>
  <div class="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/addalbum">Add Album</router-link>
    </header>

    <router-view></router-view>

  </div>
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Albums from './components/Albums.vue';
import AddAlbum from './components/AddAlbum.vue';
import AlbumDetail from './components/AlbumDetail.vue';

export default {
  name: 'app',
  components: {
    Home,
    About,
    Albums,
    AddAlbum,
    AlbumDetail
  }
};
</script>

<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
header {
  display: flex;
  justify-content: space-around;
  width: 100vw;
}
</style>
