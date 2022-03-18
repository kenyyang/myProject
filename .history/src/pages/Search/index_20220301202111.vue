<template>
  <div>
    <typeNav/ v-show="condition">
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
}
</script>

<style>

</style>