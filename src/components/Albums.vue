<template>
  <div class="albums">
    <h3>
      Albums
    </h3>
    <ul>
        <Album 
          v-for="album in albums"
          :key="album.id"
          :album="album"
        />
    </ul>
  </div>
</template>

<script>
import albumsApi from '../services/albumsApi.js';
import Album from './Album.vue'

export default {
  name: 'Albums',
  components: { Album },
  data() {
    return {
      albums: albumsApi.getAlbums()
    }
  }
}
</script>

<style scoped>
li {
  background-color: lightgrey;
  margin: 40px auto;
  list-style: none;
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
}
</style>
