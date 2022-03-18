<template>
 <div>
    <typeNav/>
    <listContainer/>
    <reCommend/>
    <rank/>
    <like/>
    <floor/>
 </div>
</template>

<script>
import listContainer from'./listContainer'
import reCommend from './reCommend'
import rank from './rank'
import like from './like'
import floor from './floor'
export default {
    name:'Home',
    components:{listContainer,reCommend,rank,like,floor}
}
</script>

<style>

</style>