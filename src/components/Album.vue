<template>
  <li>
    <router-link :to="`/albums/${album.id}`">
      {{album.title}}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'Album',
  props: ['album']

};
</script>

<style scoped>

</style>