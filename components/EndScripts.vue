<template>
  <div>
    <script :key="index" v-for="(script, index) in scripts" :src="script"></script>
  </div>
</template>

<script>
export default {
  name: 'EndScripts',
  data: () => {
    return {
      scripts: [
        '/js/jquery-3.3.1.min.js',
        '/js/bootstrap.min.js',
        'js/swiper.min.js',
        '/js/main.js'
      ]
    }
  }
}
</script>

<style scoped>

</style>
