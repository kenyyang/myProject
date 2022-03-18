<template>
  <div>
    <typeNav></typeNav>
  </div>
</template>

<script>
export default {
    name:'search',
    data() {
      return {
        show:true
      }
    },
    mounted(){
      if(this.$route.path!='/home'){
        this.show = false
      }
    }
}
</script>

<style>

</style>