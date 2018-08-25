<template>
  <div class="gallery">
    <div>
      <button @click="handleDecrease" :disabled="this.imageIndex === 0">prev</button>
      <button @click="handleIncrease" :disabled="this.imageIndex === album.images.length - 1">next</button>
    </div>
    <img :src="album.images[imageIndex].url">
  </div>
</template>

<script>
export default {
  name: 'GalleryViewer',
  props: ['album'],
  data() {
    return {
      imageIndex: 0
    };
  },
  methods:{
    handleIncrease() {
      this.imageIndex ++;
    },
    handleDecrease() {
      this.imageIndex --;
    }
  }
};
</script>

<style scoped>

.gallery {
  display: block;
}

img {
  width: 75vw;
}

button {
  margin: 20px 5px;
  border-radius: 5px;
  padding: 5px 10px;
}

</style>