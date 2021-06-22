<template>
  <el-tabs v-model="activeName">
    <el-tab-pane :label="navName[0]" name="first">
      <el-row>
        <el-col :span="4"><div class="grid-content"></div></el-col>
        <el-col :span="16">
          <el-col
            :span="6"
            v-for="(item, i) in Shop_list[0]"
            :key="i"
            class="col-item"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img :src="'https:' + item.img" class="image" />
              <div style="padding: 14px">
                <span>{{ item.name }}</span
                ><br />
                <span :style="{ color: 'red', size: '10px' }"
                  >{{ item.price }}起</span
                >
                <div class="bottom clearfix" v-if="$store.state.count_exist">
                  <el-button
                    icon="el-icon-circle-plus"
                    class="button"
                    @click="
                      pushCar(item, item.id, item.name, item.img, item.price),
                        open()
                    "
                    >购物车</el-button
                  >
                  <el-button
                    icon="el-icon-s-goods"
                    class="button"
                    @click="Submit_Orders_fromShop(item)"
                    >购买</el-button
                  >
                </div>
                <div class="bottom clearfix" v-else>
                  <el-button @click="$router.push('/Login')"
                    >登录后查看</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane :label="navName[1]" name="second">
      <el-row>
        <el-col :span="4"><div class="grid-content"></div></el-col>
        <el-col :span="16">
          <el-col
            :span="6"
            v-for="(item, i) in Shop_list[1]"
            :key="i"
            class="col-item"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img :src="'https:' + item.img" class="image2" />
              <div style="padding: 14px">
                <span>{{ item.name }}</span
                ><br />
                <span :style="{ color: '#b0b0b0', 'font-size': '12px' }">{{
                  item.introduction
                }}</span
                ><br />
                <span :style="{ color: 'red', size: '10px' }"
                  >{{ item.price }}起</span
                >
                <div class="bottom clearfix" v-if="$store.state.count_exist">
                  <el-button
                    icon="el-icon-circle-plus"
                    class="button"
                    @click="
                      pushCar(item, item.id, item.name, item.img, item.price),
                        open()
                    "
                    >购物车</el-button
                  >
                  <el-button
                    icon="el-icon-s-goods"
                    class="button"
                    @click="Submit_Orders_fromShop(item)"
                    >购买</el-button
                  >
                </div>
                <div class="bottom clearfix" v-else>
                  <el-button @click="$router.push('/Login')"
                    >登录后查看</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane :label="navName[2]" name="third">
      <el-row>
        <el-col :span="4"><div class="grid-content"></div></el-col>
        <el-col :span="16">
          <el-col
            :span="6"
            v-for="(item, i) in Shop_list[2]"
            :key="i"
            class="col-item"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.img" class="image2" />
              <div style="padding: 14px">
                <span>{{ item.name }}</span
                ><br />
                <span :style="{ color: '#b0b0b0', 'font-size': '12px' }">{{
                  item.introduction
                }}</span
                ><br />
                <span :style="{ color: 'red', size: '10px' }"
                  >{{ item.price }}起</span
                >
                <div class="bottom clearfix" v-if="$store.state.count_exist">
                  <el-button
                    icon="el-icon-circle-plus"
                    class="button"
                    @click="
                      pushCar(item, item.id, item.name, item.img, item.price),
                        open()
                    "
                    >购物车</el-button
                  >
                  <el-button
                    icon="el-icon-s-goods"
                    class="button"
                    @click="Submit_Orders_fromShop(item)"
                    >购买</el-button
                  >
                </div>
                <div class="bottom clearfix" v-else>
                  <el-button @click="$router.push('/Login')"
                    >登录后查看</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane :label="navName[3]" name="fourth">
      <el-row>
        <el-col :span="4"><div class="grid-content"></div></el-col>
        <el-col :span="16">
          <el-col
            :span="6"
            v-for="(item, i) in Shop_list[3]"
            :key="i"
            class="col-item"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.img" class="image2" />
              <div style="padding: 14px">
                <span>{{ item.name }}</span
                ><br />
                <span :style="{ color: '#b0b0b0', 'font-size': '12px' }">{{
                  item.introduction
                }}</span
                ><br />
                <span :style="{ color: 'red', size: '10px' }"
                  >{{ item.price }}起</span
                >
                <div class="bottom clearfix" v-if="$store.state.count_exist">
                  <el-button
                    icon="el-icon-circle-plus"
                    class="button"
                    @click="
                      pushCar(item, item.id, item.name, item.img, item.price),
                        open()
                    "
                    >购物车</el-button
                  >
                  <el-button
                    icon="el-icon-s-goods"
                    class="button"
                    @click="Submit_Orders_fromShop(item)"
                    >购买</el-button
                  >
                </div>
                <div class="bottom clearfix" v-else>
                  <el-button @click="$router.push('/Login')"
                    >登录后查看</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Bus from "../assets/js/Bus";
export default {
  name: "commodity",
  data() {
    return {
      activeName: "first",
      Shopping_Car: this.$store.state.Shopping_Car,
     

    };
  },
  props: ["Shop_list", "navName"],
  created() {
    this.$store.dispatch("getShop"); //加载商品
  },
  methods: {
    open() {
      this.$confirm("加入购物车成功", "提示", {
        confirmButtonText: "查看购物车",
        cancelButtonText: "继续添加",
        type: "warning",
      })
        .then(() => {
          this.$router.push("/Shopping_Car");
        })
        .catch(() => {});
    },
    pushCar(item, id, name, img, price, number = 1) {
      //因为 商品组件缓存了，所以this.$store.state.Shopping_Car清空后商品组件的数据不会更新
      this.$store.commit("pushCar", { item, id, name, img, price, number });
    },
    Submit_Orders_fromShop(item) {
      item.number = 1;
      // this.$store.commit('Submit_Orders_fromShop',item)
      this.$router.push("/orderDetails");
      this.$nextTick(()=>{
        setTimeout(() => {
        Bus.$emit("submitOrder", {item,isCar:false});
      }, 200);
      })
    },
  },
  deactivated() {
    setTimeout(() => {
      Bus.$off("submitOrder");
    }, 2000);
  },
};
</script>
<style >
.el-tabs__nav-scroll {
  margin-left: 552px !important;
}
.col-item {
  height: 260px;
  margin-bottom: 5px;
  cursor: pointer; /*鼠标变成手指样式*/
  transition: all 0.5s; /*所有属性变化在0.6秒内执行动画*/
}
.col-item:hover {
  transform: scale(1.23);
}
.el-tabs__item {
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
.el-button {
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
  clear: both;
}
</style>