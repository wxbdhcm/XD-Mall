<template>
  <div id="Login">
    <div class="login">
      <h2 :style="{ 'text-align': 'center' }">登录</h2>
      <div>
        <span id="user">username:</span>
        <el-input :style="{ width: '300px' }" v-model="user" />
      </div>
      <div>
        <span id="span">password:</span>
        <el-input
          type="password"
          v-model="pass"
          :style="{ width: '300px', 'padding-left': '2px' }"
        />
      </div>
      <el-button style="margin-bottom: 20px" type="primary" v-on:click="check"
        >登录</el-button
      >
      <div style="display: flex; justify-content: space-between; width: 80%">
        <el-link type="primary" @click="$router.push('/')">返回首页</el-link>
        <el-link type="primary" @click="$router.push('/register')"
          >前往注册</el-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import store from "../store/index";
export default {
  name: "login",
  data() {
    return {
      user: "admin",
      pass: "1234566",
      users: [],
       receivingAddress: [
        {
          name: "qwj",
          phone: "13377512770",
          address: "广东广州市花都区城区",
          detailedAddress: "迎宾大道西30号广东第二师范学院",
        },
      ],
    };
  },

  computed: {
    usersss() {
      return this.$store.getters.account;
    },
  },
  methods: {
    check() {
      let check = false;
      if (this.$store.state.user) {
        window.alert("你已经登录过");
      } else {
        for (let i in this.$store.state.account) {
          if (
            this.user === this.$store.state.account[i].Username &&
            this.pass === this.$store.state.account[i].Password
          ) {
            window.alert("登录成功");
            this.$store.state.user = this.$store.state.account[i];
            this.$store.state.count_exist = true;
            this.$set(this.$store.state.user,'userAddressList',[])
            let u = this.$store.state.user.Username
            let url = '/api/address?userName=' + u
            this.axios.get(url).then(res=>{
              this.$store.state.user.userAddressList = res.data
            })
            // let userAddress = this.$store.state.user.userAddress.split("&")
            // this.$store.state.user.userAderss.push({
            //   name:  this.$store.state.user.Username,
            //   phone: this.$store.state.user.userPhone,
            //   address: userAddress[0],
            //   detailedAddress: userAddress[1]
            // })
            check = true;
            if (this.user === "admin") {
              this.$store.state.isAdmin = true;
            }
            this.user = "";
            this.pass = "";
            // sessionStorage.setItem("logined", true);
            this.$router.push("/Shopping"); 
            break;
          }
        }
        if (check === false) {
          window.alert("登陆失败");
          this.user = "";
          this.pass = "";
        }
      }
    },
  },
};
</script>
<style scoped>
#Login {
  background-image: url("../assets/img/bg-login.jpg");
  position: relative;
  height: 700px;
}
.login {
  position: absolute;
  background-color: white;
  width: 450px;
  height: 300px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 15px;
}
.login div {
  margin: 0 auto;
  width: 450px;
  padding-bottom: 10px;
}
</style>