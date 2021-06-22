<template>
  <div class="div">
    <el-alert
      title="不能进行用户管理"
      type="error"
      description="你需要登录管理员账号"
      center
      show-icon
    >
    </el-alert><br>
    <el-button @click="pushLogin">请登录管理员账号登录</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    pushLogin() {
      this.$router.push("/Login");
    },
  },
};
</script>
<style scoped>
.div {
  width: 80%;
  margin:  auto;
}
</style>