<template>
  <div id="home">
    <Nav></Nav>
    <Swiper></Swiper>
    <Seckill></Seckill>
    <!-- keep-alive影响组件数据更新 -->
    <div id="router-link">
      <router-view
        v-if="!$route.meta.include"
      ></router-view>
      <keep-alive>
        <!-- 购物车第二次正常运行 -->
        <router-view
          v-if="$route.meta.include"
        ></router-view>
      </keep-alive>
    </div>
    <div ref="testRef"></div>
    <!-- 固定定位 -->
    <RightFixed></RightFixed>
    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from "../components/swiper.vue";
import Nav from "../components/nav.vue";
import { mixin } from "../assets/js/mixin";
import focus from "../assets/js/diretives";
import RightFixed from "../components/fixed-right.vue";
import Footer from "../components/footer.vue";
import Seckill from "../components/seckill.vue";

export default {
  name: "home",
  data() {
    return {
      serach: "",
      shoppingcar: this.$store.state.Shopping_Car,
      order: this.$store.state.Order,
      flag: true,
      timer: "",
      inputMsg: "",
      reg_show: false,
    };
  },
  mixins: [mixin],
  created() {
    this.$store.dispatch("getUsers"); //已注册用户
    this.$store.dispatch("getShop");
    this.$store.dispatch("getOrderList");
  },
  mounted() {
    this.$store.commit("hasUser");
    // this.axios.get('/page?currentPage=1&pageSize=4').then(res=>{
    //   console.log(res)
    // })

  },
  methods: {
    getAxois() {
      //节流
      if (this.flag) {
        this.flag = false;
        this.axios({
          method: "get",
          url: "data.json",
        }).then((res) => {
          console.log(res);
        });
        setTimeout(() => {
          this.flag = true;
        }, 2000);
      }
      //防抖
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.axios({
          method: "get",
          url: "data.json",
        }).then((res) => {
          console.log("防抖实现");
        });
      }, 1000);
      // console.log(this.$refs.testRef)
      // this.$nextTick(()=>{
      //   let dom = document.getElementById("h1").innerHTML
      //   console.log(this.$refs.testRef)
      //   console.log(dom)

      // })
    },
    axoisGet(id) {
      let get = (url) => {
        return (params) => {
          return this.axios
            .get(url, {
              params,
            })
            .then((res) => {
              return res.data;
            });
        };
      };
      let getdetial = get("/api/axios.json");
      getdetial({
        id: id,
      });
    },
  },
  directives: {
    focus: focus,
  },
  components: {
    Swiper,
    RightFixed,
    Footer,
    Seckill,
    Nav,
  },
};
</script>

<style>
#backtop {
  width: 80px;
  height: 80px;

  position: fixed;
  right: 10px !important;
  bottom: 20px !important;
}

#input {
  height: 36px;
  padding-right: 0;
}
</style>
<style>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.serach {
  width: 400px;
}
.color {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
}
</style>
