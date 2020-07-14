<template>
  <div>
    <Nav />
    <Nuxt />
    <ScrollToTop />
    <Loader />
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/Nav'
import Loader from '../components/Loader'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
export default {
  components: {
    Nav,
    Loader,
    ScrollToTop,
    Footer
  }
}
</script>

<style>

</style>
