import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if(to.meta.requireLogin){
    if(store.state.user){
      next()
    }
    else{
      window.alert('请先登录')
      next('/login')
    }
  }
  else{
    next()
  } 
})
Vue.mixin({
  data() {
    return {
      mixinName:'mixin',
      globalmixin:'global'
    }
  },
  methods:{
    mixinMethods(){
      console.log("its mixin methods")
    }
  }
})