<template>
    <form @submit.prevent="handleSubmit">
    <p>
      <label>
        Title: <input v-model="title">
      </label>
    </p>
    <p>
      <label>
        Description: <input v-model="description">
      </label>
    <p>
    <p>
      <label>
        Image URL: <input v-model="url">
      </label>
    <p>
    <p>
      <button>add</button>
    </p>
  </form>
</template>

<script>
import albumsApi from '../services/albumsApi';

  export default {
    name: 'NewImage',
    props: ['album'],
        data() {
      return {
        id: '',
        title: '',
        description: '',
        url: ''
      }
    },
    methods: {
      handleSubmit() {
        const image = {
          title: this.title,
          description: this.description,
          url: this.url
        }
        this.onComplete(image);
      },
      handleAdd(image) {
        albumsApi.postImage(image);
        this.$router.push(`/albums/${this.album.id}`);
      }
    }
  }
</script>

<style scoped>


</style>