<template>
  <div>
    <h3 class="detail">
      {{ album.title }}
    </h3>

    <nav>
      <router-link to="thumbnail">Thumbail</router-link>
      <router-link to="gallery">Gallery</router-link>
      <router-link to="list">List</router-link>
      <router-link to="new">Add Image</router-link>
    </nav>

    <router-view :album="album"></router-view>
  </div>
</template>

<script>
import albumsApi from '../services/albumsApi';

export default {
  name: 'AlbumDetail',
  data() {
    return {
      album: null
    };
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
  }
};
</script>

<style scoped>
nav {
  width: 50vw;
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
}
</style>
