<template>
  <div id="orderDetail">
    <el-steps :active="orderActive" align-center>
      <el-step title="" description="加入购物车"></el-step>
      <el-step title="" description=".填写核对订单信息"></el-step>
      <el-step title="" description="成功提交订单"></el-step>
    </el-steps>
    <h3 align="left">填写并核对订单信息</h3>
    <div class="allCard2">
      <div
        v-for="(item, index) in $store.state.user.userAddressList"
        :key="index + 'address'"
      >
        <el-card
          class="personalAddress"
          :class="active == index ? 'active2' : ''"
        >
          <div @click="show(index)">
            <div style="font-weight: 700">{{ item.receiver }}</div>
            <span>所在区域：</span>{{ item.userAddress }} <span>详细地址：</span
            >{{ item.userAddressDetails }} <span>联系电话:</span
            >{{ item.userPhone }}
          </div>
        </el-card>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="color">
      <p style="font-weight: 700">支付方式:</p>
      <el-radio v-model="pay" label="red" border>货到付款</el-radio>
      <el-radio v-model="pay" label="yellow" border>分期付款</el-radio>
      <el-radio v-model="pay" label="bule" border>微信支付</el-radio>
      <el-radio v-model="pay" label="green" border>银行卡支付</el-radio>
    </div>
    <commodity-list
      v-if="isCar"
      :isCar2="true"
      :commodityList="$store.state.Shopping_Car"
      :componentName="'购物车'"
    ></commodity-list>
    <commodity-list
      :changeNumber="true"
      v-else
      :commodityList="commodityList"
    ></commodity-list>
    <el-button
      v-if="isCar"
      @click="
        Submit_Orders($store.state.Shopping_Car, receivingAddress[active])
      "
    >
      确认购买</el-button
    >
    <el-button
      v-else
      @click="
        Submit_Orders_fromShop(commodityList[0], receivingAddress[active])
      "
    >
      确认购买</el-button
    >
  </div>
</template>

<script>
import commodityList from "../components/commodityList.vue";
import Bus from "../assets/js/Bus";
import qs from "qs";
export default {
  components: { commodityList },
  data() {
    return {
      orderActive: 2,
      receivingAddress: [...this.$store.state.user.userAddressList],
      pay: "dw",
      active: 0,
      commodityList: [],
      isCar: true,
    };
  },
  methods: {
    show(index) {
      this.active = index;
    },
    Submit_Orders(commodity, receivingAddress) {
      let date = new Date();
      let user = this.$store.state.user.Username;
      let createdTime = `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDate()}日${date.getHours()}:${date.getMinutes()}`;

      for (let i in commodity) {
        let commodityList = commodity[i];
        let orderList = {
          userName: user,
          reciver: receivingAddress.receiver,
          userAddress: receivingAddress.userAddress,
          userAddressDetails: receivingAddress.userAddressDetails,
          userPhone: receivingAddress.userPhone,
          id: commodityList.id,
          number: commodityList.number,
          createdTime: createdTime,
        };
        let parms = qs.stringify(orderList);
        this.axios.post("api/postOrder", parms).then((res) => {});
        this.$store.commit("Submit_Orders_fromShop", {
          commodityList,
          receivingAddress,
          createdTime,
          user,
        });
      }

      window.alert("购买成功");
      this.$router.push("/Order");
      this.$store.state.Shopping_Car = [];
    },
    Submit_Orders_fromShop(commodityList, receivingAddress) {
      let date = new Date();
      let user = this.$store.state.user.Username;
      let createdTime = `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDate()}日${date.getHours()}:${date.getMinutes()}`;
      let orderList = {
        userName: user,
        reciver: receivingAddress.receiver,
        userAddress: receivingAddress.userAddress,
        userAddressDetails: receivingAddress.userAddressDetails,
        userPhone: receivingAddress.userPhone,
        id: commodityList.id,
        number: commodityList.number,
        createdTime: createdTime,
      };
      console.log(orderList);
      let parms = qs.stringify(orderList);
      this.axios.post("api/postOrder", parms).then((res) => {});

      this.$store.commit("Submit_Orders_fromShop", {
        commodityList,
        receivingAddress,
        createdTime,
        user,
      });
      window.alert("购买成功");
      this.$router.push("/Order");
    },
    postOrder() {},
  },
  created() {
    Bus.$on("submitOrder", (data) => {
      this.isCar = data.isCar;
      this.commodityList.push(data.item);
    });
  },
};
</script>

<style >
#orderDetail {
  width: 70%;
  margin: auto;
}
.allCard2 {
  height: 200px;
  overflow-y: auto;
}
.active2 {
  border: 1px solid red;
}
/* .allCard2::-webkit-scrollbar{
  display: none;
} */
</style>