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
      <button>add</button>
    </p>
  </form>
</template>

<script>

  export default {
    name: 'AddAlbum',
    props: ['onComplete'],
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
        this.onComplete(album);
      }

    }
  }
</script>

<style scoped>

</style>