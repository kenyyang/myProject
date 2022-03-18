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
        show:true
      }
    },
    mounted(){
      if(this.$route.path!='/home'){
        this.show = true
      }
    }
}
</script>

<style>

</style>