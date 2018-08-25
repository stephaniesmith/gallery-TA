<template>
  <div>
    <h3 class="add">
      Add Album
    </h3>
    <AlbumForm :onComplete="handleAdd"/>
  </div>
</template>

<script>
import AlbumForm from './AlbumForm'
import albumsApi from '../services/albumsApi';

export default {
  name: 'Add',
  components: { AlbumForm },
  methods: {
    handleAdd(album) {
      const added = albumsApi.postAlbum(album);
      this.$router.push(`/albums/${added.id}`);
    }
  }
}
</script>

<style scoped>

</style>
