<template>
 <div>
    <typeNav/>
    <listContainer/>
    <reCommend/>
    <rank/>
 </div>
</template>

<script>
import listContainer from'./listContainer'
import reCommend from './reCommend'
import rank from './rank'
import like from './like'
export default {
    name:'Home',
    components:{listContainer,reCommend,rank,}
}
</script>

<style>

</style>