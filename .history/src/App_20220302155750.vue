<template>
<div>
  <Header/>

   <router-view></router-view>  
  <Footer v-show="$route.meta.show"/>
</div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {Header,Footer},
  mounted(){
    this.$store.dispatch("home/categoryList");
    this.$store.dispatch('homegetBannerList')
  }
}
</script>

<style>

</style>
