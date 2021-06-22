<template>
  <div id="shoppingCar">
  <el-row>
      <el-col :span="1"><div class="grid-content"></div></el-col>
      <el-col :span="22"
        ><div class="grid-content bg-purple">
          <div class="top" v-if="route" >
            <el-button  type="primary" @click="$router.push('/Shopping')"
              >商品列表</el-button
            >
            <span
              :style="{
                'line-height': '50px',
                'list-style': 'none',
                color: '#409eff',
                display: 'inline-block',
              }"
            >
              <div align="center">{{componentName}}</div>
            </span>
            <el-button  type="primary" @click="$router.push(route[0].path)"
              >{{route[0].name}}</el-button
            >
          </div>

          <el-table
            :data="commodityList"
            border
            style="width: 100%"
            max-height="530"
          >
            <!-- <el-table-column label=" " v-if="isCar">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.check"></el-checkbox>
              </template>
            </el-table-column> -->
            <el-table-column label="商品" >
              <template slot-scope="scope">
                <img
                  :src="scope.row.img"
                  :style="{ height: '60px', widith: '60px' }"
                />
              </template>
            </el-table-column>
            <el-table-column
              prop="id"
              label="商品编号"
              
            ></el-table-column>
            <el-table-column
              prop="name"
              label="商品名称"
              
            ></el-table-column>
            <el-table-column
              prop="price"
              label="单价"
             
            ></el-table-column>
            <el-table-column prop="number" label="数量">
              <template slot-scope="scope">
                <el-button @click="scope.row.number++"  v-if="changeNumber">+</el-button>
                {{ scope.row.number }}
                <el-button
                  @click="if (scope.row.number > 1) scope.row.number--;"
                   v-if="changeNumber"
                  >-</el-button
                >
              </template>
            </el-table-column>
           
            <el-table-column label="总价">
              <template slot-scope="scope">
                {{ scope.row.price * scope.row.number }}
              </template>
            </el-table-column>
             <el-table-column label="操作" v-if="isCar"  >
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, commodityList)"
                  type="primary"
                  icon="el-icon-delete"
                  size="small"
                  >{{isCar2? '移除':'申请退款'}}</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- <p :style="{'line-height':'50px','margin-right':'100px','color':'red'}">合计：{{countTotalPrice}}</p> -->

          <div class="bottom-div" v-if="isCar">
            <el-button
              type="primary"
              :style="{ 'line-height': '22px', 'text-align': 'center' }"
              v-on:click="Submit_Orders"
            >
              提交订单</el-button
            >
          </div>
        </div>
      </el-col>
      <el-col :span="1"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['commodityList','componentName','route','isCar','isCar2','changeNumber'],
  data() {
    return {
      checked: true
    }
  },
  methods: {
    deleteRow(index, rows) {
      // 删除行
      rows.splice(index, 1);
    },
     Submit_Orders() {  
        this.$router.push("/orderDetails");
    },
  },
};
</script>
<style  scoped>
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10 0 10;
  width: 100%;
}
.bottom-div {
  text-align: center;
  height: 50px;
}
</style>