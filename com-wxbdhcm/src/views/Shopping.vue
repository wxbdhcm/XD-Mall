<template>
<div id="shop">
  <Commodity :Shop_list="$store.state.shop_list" :navName="navName"></Commodity>
  <Commodity :Shop_list="$store.getters.Shop_list2" :navName="navName2"></Commodity>
</div>
  
</template>
<script>
import Commodity from '../components/Commodity.vue';
export default {
  components: { Commodity },
  name:'shop',
    data() {
      return {
        Shop_list:this.$store.state.shop_list,
        Shopping_Car: this.$store.state.Shopping_Car,
        navName:["热门机型","笔记本 ","充电配件","周边商场"],
        navName2:["运动周边","手机周边 ","生活必备","周边商场"]
      }
    },
    computed:{
      Shop_list2(){
        return [this.Shop_list[4],this.Shop_list[3],this.Shop_list[2],this.Shop_list[1]]
      }
    }
}
</script>
<style >
/* .el-tabs__nav-scroll{
  margin-left:500px  !important;
} */
.el-tabs__nav-scroll
{
  margin-left:552px  !important;

}
.col-item{
  height: 260px;
  margin-bottom: 5px ;
  cursor:pointer;/*鼠标变成手指样式*/
  transition: all 0.5s;/*所有属性变化在0.6秒内执行动画*/
}
.col-item:hover{
   transform: scale(1.03)
}
.el-tabs__item{
  width: 100px;
}

  .bottom {
    margin-top: 7px;
    line-height: 12px;
   
  }

  .button {
    padding: 0;
    height: 35px;
    display: inline-block;
    width: 65px;
    
  }
.el-button{
border-radius: 30 0 0 30;
}
  .image {
    position: relative;
    width: 160px;
    height: 160px;
    display: block;
    left: 45px;
  }
  .image2 {
    position: relative;
    width: 160px;
    height: 140px;
    display: block;
    left: 45px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>