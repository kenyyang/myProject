<template>
 <div>
    <typeNav/>
    <listContainer/>
    <reCommend/>
    <rank/>
    <like/>
    <floor v-for=" floor in floorList" :key= "floor.id "/>
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
import {mapState} from 'vuex'
export default {
    name:'Home',
    components:{listContainer,reCommend,rank,like,floor,brand},
    mounted(){
        this.$store.dispatch('home/floorList')
    },
    computed:{
        ...mapState({
            floorList:state=>state.f
        })
    }
}
</script>

<style>

</style>