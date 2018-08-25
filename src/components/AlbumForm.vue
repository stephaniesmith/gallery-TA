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
  export default {
    data() {
      return {
        id: '',
        title: '',
        description: '',
      }
    },
    methods: {

    }
  },
</script>

<style scoped>

</style>