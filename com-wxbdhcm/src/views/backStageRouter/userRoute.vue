<template>
  <div id="userRoute" v-if="this.$store.state.isAdmin">
    <div class="userRoute">
      <h2>账号管理</h2>
      <el-col :span="2"><div class="grid-content"></div></el-col>
      <el-col :span="20"
        ><div class="grid-content bg-purple">
          <el-table
            :data="user_data"
            border
            max-height="500"
          >
            <el-table-column prop="userPhone" label="号码"></el-table-column>
            <el-table-column prop="Username" label="账号"></el-table-column>
            <el-table-column prop="Password" label="密码"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="
                    deleteRow(scope.$index, user_data, scope.row.Username)
                  "
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
      <el-col :span="3"><div class="grid-content"></div></el-col>
    </div>
  </div>
  <div v-else>
    <elseView></elseView>
  </div>
</template>
<script>
import qs from "qs";
import elseView from "../else.vue";
export default {
  components: { elseView },
  data() {
    return {
      user_data: this.$store.state.account,
    };
  },
  methods: {
    deleteRow(index, rows, username) {
      // 删除行
      rows.splice(index, 1);
      let user = {
        username: username,
      };
      let parms = qs.stringify(user);
      console.log(parms);
      this.axios.post("/api/deleteSql", parms).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style >
.userRoute {
  width: 100%;
  height: 100%;
  margin: auto;
}
.el-table .cell{
  text-align: center;
}
</style>