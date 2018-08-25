<template>
  <div>
    <div class="thumbnail"
      v-for="image in album.images"
      :key="image.id"
      :style="{ backgroundImage: 'url(' + image.url + ')' }"
    > 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ThumbnailViewer',
    props: ['album']
  }
</script>

<style scoped>
.thumbnail {
  max-width: 400px;
  max-height: 400px;
  width: 75vw;
  height: 75vw;
  margin: 20px auto;
  background-position: center;
  background-repeat: none;
  background-size: cover;
}
</style>