<template>
  <div id="cm-details">
    <div class="cm-detalis">
      <div class="cm-img">
        <!-- <img :src="commodityData.img" /> -->
        <img
          style="width: 80%; height: 80%; margin-top: 10%"
          :src="commodityData.img"
         
        />
        
      </div>
      <div class="cm-shop">
        <h3 align="left">{{ commodityData.name }}</h3>
        <div class="cm-introduction">{{ commodityData.introduction }}</div>
        <div class="cm-price" v-if="commodityData.isSeckill">
          <span> 距离{{ status }}:</span>
          <span>{{ restHours }}小时</span><span>{{ restMinutes }}分</span
          ><span>{{ restSeconds }}秒</span>
        </div>
        <div class="cm-price" v-else>立即抢购</div>
        <div class="cm-price">￥{{ commodityData.price }}</div>
        <div class="color">
          <span>选择颜色：</span>
          <el-radio v-model="color" label="red" border>红色</el-radio>
          <el-radio v-model="color" label="yellow" border>黄色</el-radio>
          <el-radio v-model="color" label="bule" border>蓝色</el-radio>
          <el-radio v-model="color" label="green" border>绿色</el-radio>
        </div>
        <div class="color">
          <span>是否分期：</span><br /><br />
          <div class="flex">
            <el-radio v-model="price" label="1" border
              >￥{{ Math.floor(commodityData.price / 3) }} x 3期</el-radio
            >
            <el-radio v-model="price" label="2" border
              >￥{{ Math.floor(commodityData.price / 6) }} x 6期</el-radio
            >
            <el-radio v-model="price" label="3" border
              >￥{{ Math.floor(commodityData.price / 12) }} x 12期</el-radio
            >
            <el-radio v-model="price" label="4" border
              >￥{{ Math.floor(commodityData.price / 24) }} x 24期</el-radio
            >
          </div>
        </div>
        <el-button @click="commodityData.number++">+</el-button>
        {{
          commodityData.number == 0
            ? (commodityData.number = 1)
            : commodityData.number
        }}
        <el-button
          @click="commodityData.number > 0 ? commodityData.number-- : ''"
          >-</el-button
        >
        <div class="btn">
          <el-button
            type="primary"
            :disabled="commodityData.isSeckill ? status !== '结束' : false"
            @click="
              pushCar(
                commodityData,
                commodityData.id,
                commodityData.name,
                commodityData.img,
                commodityData.price,
                commodityData.number
              )
            "
          >
            加入购物车
          </el-button>
          <el-button
            type="primary"
            :disabled="commodityData.isSeckill ? status !== '结束' : false"
            @click="Submit_Orders_fromShop(commodityData)"
            >立即购买</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "../assets/js/Bus";
import { countDown } from "../assets/js/countDown";
export default {
  data() {
    return {
      show: false,
      color: "",
      price: "",
      restHours: "",
      restMinutes: "",
      restSeconds: "",
      status: "",
    };
  },
  mounted() {
    this.countDown();
    if (this.commodityData.img) {
      this.show = true;
    }
  },

  // beforeUpdate() {
  //   this.show = true;
  // },
  props: ["commodityData"],
  methods: {
    pushCar(item, id, name, img, price, number) {
      this.$store.commit("pushCar", { item, id, name, img, price, number });
      this.$router.push("/Shopping_Car");
      window.alert("加入购物车成功");
    },
    Submit_Orders_fromShop(item) {
      // this.$store.commit('Submit_Orders_fromShop',item)
      this.$nextTick(()=>{
        setTimeout(() => {
        Bus.$emit("submitOrder", { item, isCar: false });
      }, 20);
      })
      this.$router.push("/orderDetails");
    },
    countDown() {
      let obj = countDown();
      this.restHours = obj.restHours;
      this.restSeconds = obj.S;
      this.restMinutes = obj.restMinutes;
      this.status = obj.status;
      setTimeout(() => {
        this.countDown();
      }, 1000);
    },
  },
  deactivated() {
    setTimeout(() => {
      Bus.$off("submitOrder");
    }, 2000);
  },
};
</script>

<style>
#cm-details {
  height: 550px;
  width: 80%;
  margin: auto;
  margin-top: 20px;
}
.cm-img {
  width: 45%;
  float: left;
  background-color: rgb(255, 245, 245);
  height: 500px;
  margin-right: 20px;
  border-radius: 10px;
}
.cm-img img {
  width: 70%;
  height: 70%;
  margin-top: 50px;
}
.cm-shop {
  width: 52%;
  float: left;

  height: 500px;
}
.cm-introduction {
  text-align: left;
  color: red;
}
.cm-price {
  height: 50px;
  text-align: left;
  background: linear-gradient(to right, rgb(230, 224, 224), blue);
  font-weight: 800;
  font-size: 25px;
  color: red;
  line-height: 50px;
  margin-top: 20px;
}
.btn {
  margin-top: 20px;
}
.color {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
}
.flex {
  width: 620px;
  display: flex;
  justify-content: space-between;
}
.el-radio {
  margin-right: 5px;
}
</style>