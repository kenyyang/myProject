<template>
 <div>
    <typeNav/>
    <listContainer/>
    <reCommend/>
    <rank/>
    <like/>
    <floor/>
    <floor/>
    <brand/>
 </div>
</template>

<script>
import listContainer from'./listContainer'
import reCommend from './reCommend'
import rank from './rank'
import like from './like'
import floor from './floor'
import brand from './brand'
export default {
    name:'Home',
    components:{listContainer,reCommend,rank,like,floor,brand},
    mounted:{
        this.$store0
    }
}
</script>

<style>

</style>