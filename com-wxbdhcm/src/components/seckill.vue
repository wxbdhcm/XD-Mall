<template>
  <div id="seckill">
    <h2>秒杀专区</h2>
    <div class="seckill-list">
      <div id="div" class="seckill-tip" title="活动每晚八点开始，十点结束">
          <div style="margin-top:2.5vw;font-size:1.5vw;color: red;height:2.5vw"> 20:00场</div>
          <img style="width:6vw;height:6vw" src="../assets/img/seckill.jpg"  ><br>
          <div :style="{ color: '#b0b0b0', 'font-size': '1.2vw','padding-top':'1vw','height':'1.5vw' }" >距离{{status}}还有</div>
          <div class="clock"><span>{{restHours}}小时</span><span>{{restMinutes}}分</span><span>{{restSeconds}}秒</span></div>
      </div>
      <div v-for="(item,index) in seckillCommodity" class="seckill-item" :key="index+1"
	   @click="setCmDetails(item.name,item.price,item.img,item.introduction,item.id,item.number)" >
        <el-card :body-style="{ padding: '0px' }">
          <img
            :src="item.img"
            class="seckill-img"
            
          />
          <div>
            <span>{{item.name}}</span><br />
            <span :style="{ color: '#b0b0b0', 'font-size': '13px' }"
              >{{item.introduction}}</span
            ><br /><br />
            <span
              :style="{ color: 'red', size: '10px', 'padding-right': '20px' }"
              >{{item.price}}</span
            >
            <span
              :style="{
                color: '#999',
                size: '10px',
                'text-decoration': 'line-through',
              }"
              >{{ parseInt(item.price) + 1000}}元</span
            >
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Bus from '../assets/js/Bus';
import {countDown} from '../assets/js/countDown'
export default {
  data() {
    return {
        seckillCommodity:[],
        restHours:'',
        restMinutes:'',
        restSeconds:'',
        status:''
    };
  },
  created(){
      this.axios.get('data.json').then(res=>{
        this.seckillCommodity.push(res.data.computer[Math.floor(Math.random()*8)])
        this.seckillCommodity.push(res.data.watch[Math.floor(Math.random()*8)])
        this.seckillCommodity.push(res.data.tv[Math.floor(Math.random()*8)])
        this.seckillCommodity.push(res.data.around[Math.floor(Math.random()*8)])
      })
  },
  mounted(){
      this.clock()
      
  },
  methods: {
    clock() {
      let obj = countDown()
      this.restHours = obj.restHours
      this.restSeconds=obj.S
      this.restMinutes = obj.restMinutes
      this.status = obj.status
      const that = this
      setTimeout(()=>{that.clock()},1000)
    },
    setCmDetails(name,price,img,introduction,id,number){  
      let isSeckill = true
      this.$router.push('/')
      this.$router.push('/cmDetails#router-link')
      this.$nextTick(()=>{
      setTimeout(() => {
          Bus.$emit('setCmDetails',{name,price,img,introduction,id,number,isSeckill})            
        }, 20);
      })  
    }
  },
  watch:{
      date(){
          return new Date()
      }
  },
  beforeDestroy(){
    Bus.$off('setCmDetails')
  }
};
</script>

<style>
#seckill {
  background-color: ghostwhite;
  height: 25vw
}

.seckill-tip{
    background-color: #f1eded;
    border-top: 1px solid skyblue;
}
.clock{
    margin-top:1.5vw ;
}
.clock span{
    font-size: 1.5vw;
}
.seckill-list {
  width: 77.5vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;

  margin: auto;
}
.seckill-list div {
  width: 15.5vw;
  height: 20vw;
}
.seckill-img {
  margin: 2vw 0 1vw 0;
  width: 10vw;
  height: 10vw;
}
.seckill-item {
  border-top: 1px solid #e53935;
  cursor: pointer; /*鼠标变成手指样式*/
  transition: all 0.5s; /*所有属性变化在0.6秒内执行动画*/
}
.seckill-item:hover {
  transform: scale(1.03);
}

</style>