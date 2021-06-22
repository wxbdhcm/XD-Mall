<template>
  <div id="shoppingCar">
    <h2>购物车</h2>
    <commodity-list :commodityList="$store.state.Shopping_Car" :componentName="'购物车'" :isCar2="true"></commodity-list>
  </div>
</template>

<script>
import commodityList from '../../components/commodityList.vue';
export default {
  components: { commodityList },

};
</script>

<style>
</style>