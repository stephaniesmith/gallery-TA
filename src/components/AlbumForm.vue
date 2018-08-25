<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>
        Title: <input v-modle="title">
      </label>
    <p>
    <p>
      <label>
        Description: <input v-modle="description">
      </label>
    <p>
    <p>
      <button>add</button>
    <p>
  </form>
</template>

<script>
import albumsApi from '../services/albumsApi';

  export default {
    data() {
      return {
        id: '',
        title: '',
        description: '',
      }
    },
    methods: {
      handleSubmit() {
        const album = {
          title: this.title,
          description: this.description
        }
        albumsApi.postAlbum(album);
      }

    }
  },
</script>

<style scoped>

</style>