<template>
  <ul class="albums">
    <li 
      v-for="album in albums"
      :key="album.id"
    >
    {{album.title}}
    </li>
  </ul>
</template>

<script>
import albumsApi from '../services/albumsApi.js';

export default {
  name: 'Albums',
  data() {
    return {
      albums: albumsApi.getAlbums()
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
