<template>
<div><commodity-detail :commodityData="commodityData"></commodity-detail></div>
  
</template>

<script>
import commodityDetail from '../components/commodityDetail.vue'
import Bus from '../assets/js/Bus'
export default {
    data() {
        return {
            commodityData:{},    
        }
    },
    components: { commodityDetail },
    created(){
        Bus.$on('setCmDetails',data=>{
            this.commodityData = data
        })
        
    }
}
</script>

<style>

</style>