<template>
<div>
  <Header/>
  <router-link ></router-link>
  <Footer/>
</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import router from './router'

export default {
  name: 'App',
  components: {Header,Footer}
}
</script>

<style>

</style>
