<template>
  <div id="shopRoute">
    
    <el-col :span="1"><div class="grid-content"></div></el-col>
    <el-col :span="22"
      ><div >
        <h2>商品管理</h2>
        <el-table :data="shopData" border style="width: 100%" max-height="500">
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
            label="订单编号"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="商品名称"
          ></el-table-column>
          <el-table-column
            prop="price"
            label="单价"

          ></el-table-column>
          <el-table-column label="库存">
            <template slot-scope="scope">
              {{ 1000 - scope.row.number }}
            </template>
          </el-table-column>

          <el-table-column label="操作" >
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, shop_data)"
                type="primary"
                icon="el-icon-delete"
                size="small"
                >移除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopData: [],
    };
  },
  methods: {
    deleteRow(index, rows) {
      // 删除行
      rows.splice(index, 1);
    },
  },
  mounted(){
    this.shopData=[...this.$store.state.shop_list[1],...this.$store.state.shop_list[0],...this.$store.state.shop_list[2],...this.$store.state.shop_list[3]]
  }

};
</script>
<style >
.el-table .cell{
  text-align: center;
}
</style>