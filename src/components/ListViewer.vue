<template>
  <div>
    <div class="thumbnail"
      v-for="image in album.images"
      :key="image.id"
    > 
      <h3>{{ image.title }}</h3>
      <p>{{ image.description }}</p>
      <p>{{ image.url }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListViewer',
    props: ['album']
  }
</script>

<style scoped>

</style>