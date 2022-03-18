<template>
 <div>
    <typeNav/>
    <listContainer/>
    <reCommend/>
    
 </div>
</template>

<script>
import listContainer from'./listContainer'
import reCommend from './reCommend'
import rank from './rank'
export default {
    name:'Home',
    components:{listContainer,reCommend,rank}
}
</script>

<style>

</style>