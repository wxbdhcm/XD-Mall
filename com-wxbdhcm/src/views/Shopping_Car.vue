<template>
  <div class="Shoping_Car" :style="{ height: '530px' }">
 <commodity-list :commodityList="$store.state.Shopping_Car" :changeNumber='true' :componentName="'购物车'" :route="[{name:'订单',path:'/Order'}] " :isCar2="true" :isCar=true></commodity-list>
  </div>
</template>
<script>
import CommodityList from '../components/commodityList.vue';
export default {
  name: "shopCar",
  data() {
    return {
    };
  },
  components: { CommodityList},
  computed: {
    countTotalPrice() {
      var sum = 0;
      for (let i in this.Shopping_Car) {
        sum += this.Shopping_Car[i].price * this.Shopping_Car[i].number;
      }
      return sum;
    },
  },

};
</script>
<style scoped>

</style>