<template>
  <div class="main-page">
      <nav-header></nav-header>
  </div>
</template>

<script>
import NavHeader from './NavHeader'
export default {
  name: 'MainPage',
  components: {
    NavHeader
  }
}
</script>

<style scoped>
  .main-page {
    height: 100%;
    width: 100%;
    background-color:  #f0f7ff;
  }
</style>
