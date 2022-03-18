<template>
 <div>
    <typeNav/>
    <listContainer/>
    <reCommend/>
    <rank/>
    <like/>
 </div>
</template>

<script>
import listContainer from'./listContainer'
import reCommend from './reCommend'
import rank from './rank'
import like from './like'
import floor from './fo'
export default {
    name:'Home',
    components:{listContainer,reCommend,rank,like}
}
</script>

<style>

</style>