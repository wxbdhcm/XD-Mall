<template>
  <div >
    <br />
    <el-row>
      <el-col :span="3">
        <el-menu
          router
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#409EFF"
        >
          <el-menu-item-group v-for="(item, index) in indexRoutes" :key="index+''"
            ><!-- 路径前面要加上 /    /代表根路径 -->
            <el-menu-item :class="menuIndex==index?'el-menu-active2':'' " :index="item.path" @click="menuIndex = index">{{item.name}}</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-col>
      <el-col :span="1"></el-col>
      <el-col :span="20" style="background-color:rgb(240, 254, 255);height:602px;width:81%">
        <keep-alive>
          <router-view v-if="$route.meta.include"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.include"></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      user_data: this.$store.state.account,
      Shop: this.$store.state.Commoditys,
      Order: "",
      indexRoutes: [
		  { path: "/backStage/personal", name: "个人中心" },
        { path: "/backStage/user", name: "账号管理" },
        { path: "/backStage/shopCar", name: "购物车" },
        { path: "/backStage/order", name: "订单管理" },
        { path: "/backStage/shop", name: "商品管理" },
      ],
      menuIndex:0,
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  components: {},
};
</script>
<style >
.el-menu-vertical-demo {
  width: 200px;
  height: 600px;
  border: 1px solid blue;
}
/* .el-menu-active2{
    background-color: red;
    border: 1px solid red;
} */
</style>