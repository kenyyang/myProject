<template>
  <div>
    <typeNav v-show="show"></typeNav>
  </div>
</template>

<script>
export default {
    name:'search',
    data() {
      return {
        show:false
      }
    },
    mounted(){
      if(this.$route.path!='/home'){
        
      }
    }
}
</script>

<style>

</style>