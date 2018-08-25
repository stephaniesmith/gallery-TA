<template>
  <div>
    <div class="thumbnail"
      v-for="image in album.images"
      :key="image.id"
    > 
      <h2>{{ image.title }}</h2>
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

.thumbnail {
  width: 75vw;
  margin: 0 auto;
}

h2 {
  font-size: 1.25em;
  font-weight: bold;
  margin: 10px auto;
}

</style>