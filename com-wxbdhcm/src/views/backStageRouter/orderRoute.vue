<template>
  <div>
    <h2>订单管理</h2>
    <!-- <el-steps :active="3" align-center>
      <el-step title="" description="加入购物车"></el-step>
      <el-step title="" description=".填写核对订单信息"></el-step>
      <el-step title="" description="成功提交订单"></el-step>
    </el-steps> -->
    <el-row>
      <el-col :span="1"><div class="grid-content"></div></el-col>
      <el-col :span="22"
        ><div class="grid-content bg-purple">
          <el-table
            :data="$store.state.orderList"
            border
            style="width: 100%"
            max-height="530"
          >
          <!-- <el-table-column label="创建日期"  prop="createdTime">
             
            </el-table-column>
             <el-table-column
              prop="receiver"
              label="收货人"
            ></el-table-column> -->
             <el-table-column label="订单编号">
              <template slot-scope="scope">
               15{{scope.row.id}}{{scope.row.userPhone}}
              </template>
            </el-table-column>
             <el-table-column
              prop="createdTime"
              label="创建时间"
            ></el-table-column>
            <el-table-column label="收获地址" >
           <template slot-scope="scope">
                {{scope.row.userAddress}} {{scope.row.userAddressDetails}}
              </template>
            </el-table-column>
             <el-table-column
              prop="reciver"
              label="收获人"
            ></el-table-column>
            <el-table-column label="商品">
              <template slot-scope="scope">
                <img
                  :src="scope.row.img"
                  :style="{ height: '60px', widith: '60px' }"
                />
              </template>
            </el-table-column>
             <el-table-column
              prop="userPhone"
              label="收获号码"
            ></el-table-column>
            <el-table-column
              prop="id"
              label="订单编号"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="商品名称"
            ></el-table-column>
           
            <el-table-column prop="number" label="数量" >
              <template slot-scope="scope">
                {{ scope.row.number }}
              </template>
            </el-table-column>

            <el-table-column label="总价">
              <template slot-scope="scope">
                {{ scope.row.price * scope.row.number }}
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

export default {
  data() {
    return {};
  },
  methods: {
    deleteRow(index, rows) {
      // 删除行
      rows.splice(index, 1);
    },
  },
  created(){
    this.$store.dispatch("getOrderList");
  }
};
</script>