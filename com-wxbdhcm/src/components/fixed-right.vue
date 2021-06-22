<template>
    <div class="right-fiexd">
      <div  >
        <i :class="icon" @click="icon = 'el-icon-loading'"></i>
        <p>联系我们</p>
      </div>
       <div @click="$router.push({ path: '/backStage/user'},onComplete => {}, onAbort => {})">
        <i class="el-icon-user"></i>
        <p>个人中心</p>
      </div>
       <div @click="$router.push({ path: '/Shopping_Car'},onComplete => {}, onAbort => {})">
        <i class="el-icon-shopping-cart-2" v-if="this.$store.state.Shopping_Car.length ==0"></i>
        <i class="el-icon-shopping-cart-full" v-else></i>
        <p>购物车</p>
      </div>
       <!-- Error in v-on handler (Promise/async): "NavigationDuplicated: Navigating to current local -->
       <div @click="$router.push({ path: '/Order'},onComplete => {}, onAbort => {})">
        <i class="el-icon-shopping-bag-2" v-if="this.$store.state.Order.length == 0"></i>
        <i class="el-icon-shopping-bag-1" v-else></i>
        <p>订单</p>
      </div>
       <div @click="$router.push({ path: '/Shopping'},onComplete => {}, onAbort => {})">
        <i class="el-icon-wallet"></i>
        <p>充值入口</p>
      </div>
      <el-backtop id="backtop">回顶部</el-backtop>
    </div>
</template>

<script>
export default {
  data() {
    return {
      icon:'el-icon-phone',
    }
  },

}
</script>

<style>
  .right-fiexd{
    position:fixed;
    right: 0;
    top: 100px;
    width: 100px;
    height: 510px;
    display: flex;
    flex-direction: column;
  }
  .right-fiexd :hover{
    cursor: pointer;
    transform: scale(1.1);
  }
  .right-fiexd div{
    height: 100px;
   

  }
  .right-fiexd div i {
    width: 50px;
    height: 50px;
    font-size: 50px;
    padding-top: 10px;
    color: #757575;
  }
  .right-fiexd div p {
    margin: 5px;
  }
</style>