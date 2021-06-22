<template>
  <div id="nav">
    <div class="responsive">
      <div>
		   <el-dropdown  @command="handleCommand">
      <el-avatar
          class="avatar"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :icon="userIcon" command="/backStage/personalRoute" >个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-remove " :command="$store.state.user">注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
        
      </div>
      <div></div>
      <div>
        <router-link to="/"
          ><el-link type="primary" style="font-size: 18px"
            >主页</el-link
          ></router-link
        >
      </div>
      <div>
        <router-link to="/register"
          ><el-link type="primary" style="font-size: 18px"
            >注册</el-link
          ></router-link
        >
      </div>
      <div>
        <router-link to="/Login"
          ><el-link type="primary" style="font-size: 18px"
            >登录</el-link
          ></router-link
        >
      </div>
      <div>
        <router-link to="/Shopping"
          ><el-link type="primary" style="font-size: 18px"
            >商品</el-link
          ></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputMsg: "input",
      userIcon:'el-icon-user'
    }
  },
  methods:{
	 handleCommand(val){
		if(typeof val === 'string'){
			this.$router.push('/backStage/personal')
		}
		else{
			this.$router.push('/')
			this.$store.state.user = null
			window.alert('注销成功')
		}
	  }
  }
};
</script>

<style>
@media only screen and (min-width: 768px) and (max-width: 1024px) {
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
}
#nav {
  width: 96vw;
  height: 50px;
  position: relative;
  margin: auto;
  background-color: rgb(96, 99, 99);
}
.responsive {
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 1fr 1fr 1fr;
}
.responsive {
  height: 50px;

  line-height: 50px;
}
.el-input {
  width: 50%;
  height: 50px;
}
.avatar {
  vertical-align: middle;
}
.avatar:hover{
	cursor: pointer; /*鼠标变成手指样式*/
  transition: all 0.5s; 
}
</style>
