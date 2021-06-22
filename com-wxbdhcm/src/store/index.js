import Vue from 'vue'
import Vuex, { mapState } from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    count_exist: false,   //检测是否登录
    isAdmin: false,   //判定是否为管理员
    account: [],     // 账户注册
    user: null,//当前用户
    //商品列表
    shop_list: [],
    //购物车管理
    Shopping_Car: [],
    //订单管理
    Order: [],
    // 所有用户订单
    orderList: [],
  },

  getters: {
    Shop_list2(state) {
      return [state.shop_list[4], state.shop_list[3], state.shop_list[2], state.shop_list[1]]
    },
    account(state) {
      return state.account
    }

  },
  mutations: {
    adduser(state, playload) {
      state.account.push(playload.adduser)
    },
    pushCar(state, playload) {
      if (state.Shopping_Car.length == 0) {
        state.Shopping_Car.push({
          id: playload.id,
          img: playload.img,
          name: playload.name,
          price: playload.price,
          number: playload.number,
          check: true,
        });
      } else {
        let i = 0;
        var check = false;
        while (i < state.Shopping_Car.length) {
          if (playload.item.id == state.Shopping_Car[i].id) {
            state.Shopping_Car[i].number++;
            check = true;
          }
          i++;
        }
        if (check == false) {
          state.Shopping_Car.push({
            id: playload.id,
            img: playload.img,
            name: playload.name,
            price: playload.price,
            number: playload.number,
            check: true,
          });
        }
      }
    },
    Submit_Orders(state) {
      Array.prototype.push.apply(state.Order, state.Shopping_Car)
      state.Shopping_Car = []
    },
    Submit_Orders_fromShop(state, item) {
      item.number = 1
      state.Order.push(item)
    },
    hasUser: (state) => {
      if (state.account.length !== 0) {
        sessionStorage.setItem('hasUser', true)
      }
    },
    //获取已注册用户
    getUsers(state) {
      axios.get('/api/users').then(
        res => {
          state.account = [...res.data]
        }
      ).catch((err) => { console.log(err) })
    },
    //获取商品数据
    getShop(state) {
      new Promise((resolve, reject) => {
        axios.get("/api/data.json").then(res => {
          resolve(res.data)
          state.shop_list = [res.data.tv, res.data.around, res.data.computer, res.data.parts, res.data.watch]
        }).catch((err) => {
          console.log("store请求接口失败" + err)
        })
      })
    },
    // 获取所有用户的订单
    getOrderList(state){
      axios.get('/api/orderList').then(res=>{
        state.orderList = [...res.data]
      })
    }

  },
  actions: {
    //异步接收商品数据
    getShop(context) {
      context.commit('getShop')
    },
    getUsers(context) {
      context.commit('getUsers')
    },
    getOrderList(context){
      context.commit('getOrderList')
    }
  },
  modules: {
  }
})
