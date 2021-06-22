<template>
  <div class="Order" :style="{ height: '530px' }">
    <h2>我的订单</h2>
    <el-steps :active="3" align-center>
      <el-step title="" description="加入购物车"></el-step>
      <el-step title="" description=".填写核对订单信息"></el-step>
      <el-step title="" description="成功提交订单"></el-step>
    </el-steps>
    <el-row>
      <el-col :span="1"><div class="grid-content"></div></el-col>
      <el-col :span="22"
        ><div class="grid-content bg-purple">
          <el-table
            :data="$store.state.Order"
            border
            style="width: 100%"
            max-height="530"
          >
          <el-table-column label="创建日期"  prop="createdTime">
             
            </el-table-column>
             <el-table-column
              prop="receivingAddress.receiver"
              label="收货人"
            ></el-table-column>
            <el-table-column label="收获地址" width="230px">
           <template slot-scope="scope">
                {{scope.row.receivingAddress.userAddress}} {{scope.row.receivingAddress.userAddressDetails}}
              </template>
            </el-table-column>
             <el-table-column
              prop="receivingAddress.userPhone"
              label="联系电话"
            ></el-table-column>
            <el-table-column label="商品">
              <template slot-scope="scope">
                <img
                  :src="scope.row.commodityList.img"
                  :style="{ height: '60px', widith: '60px' }"
                />
              </template>
            </el-table-column>
            <el-table-column
              prop="commodityList.id"
              label="订单编号"
            ></el-table-column>
            <el-table-column
              prop="commodityList.name"
              label="商品名称"
            ></el-table-column>
            <el-table-column
              prop="commodityList.price"
              label="单价"
            ></el-table-column>
            <el-table-column prop="commodityList.number" label="数量" >
              <template slot-scope="scope">
                {{ scope.row.commodityList.number }}
              </template>
            </el-table-column>

            <el-table-column label="总价">
              <template slot-scope="scope">
                {{ scope.row.commodityList.price * scope.row.commodityList.number }}
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, commodityList)"
                  type="primary"
                  icon="el-icon-delete"
                  size="small"
                  >{{  "申请退款" }}</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- <p :style="{'line-height':'50px','margin-right':'100px','color':'red'}">合计：{{countTotalPrice}}</p> -->    
        </div>
      </el-col>
      <el-col :span="1"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>
<script>
// import CommodityList from "../components/commodityList.vue";
export default {
  data() {
    return {};
  },
  methods: {
    // deleteRow(index, rows) {
    //   rows.splice(index, 1);
    // },
  },
  // deactivated(){
  //     console.log('---deactivated')
  // },
  // activated(){
  //     console.log('---activated')
  // },
  components: {
    // CommodityList,
  },
  computed: {
    // countTotalPrice() {
    //   var sum = 0;
    //   for (let i in this.$store.state.Order) {
    //     sum +=
    //       this.$store.state.Order[i].price * this.$store.state.Order[i].number;
    //   }
    //   return sum;
    // },
  },
};
</script>
<style scoped>
</style>