<template>
  <div id="swiper" @mouseleave="show_right = false" >
    <el-carousel  height="450px"  >
      <el-carousel-item v-for="(item,i) in imgUrl" :key="i" >
         <div   :style="{width:'100%',height:'480px',backgroundImage: 'url(' + item + ')', backgroundSize:'contain' ,backgroundSize:'100%'}"  >
           <div >
            <div class="left">
              <ul >
                <li :class="active==index?ss:''" v-for="(list,index) in left_list" :key="index" @mousemove="show(index)"  >
                  {{list}}
                </li>
              </ul>
            </div>
            <div v-show="show_right"  >
              <div class="right">
                <div class="right_item" v-for="(item, index2) in right_tv[active]" :key="index2"
                 @click="setCmDetails(item.name,item.price,item.img,item.introduction,item.id,item.number)"  > 
                  <img :src="item.img">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
           </div> 
         </div>
      </el-carousel-item>
    </el-carousel>
    <slot name="footer"></slot>
  </div>
</template>


<script>
import Bus from '../assets/js/Bus';
  export default {
   data() {
      return {
        activeName: 'second',
        active :0,
        ss:'active',
        left_list:['手机','电视','家具','出行','配件','穿戴','路由器'],
        show_right:false,  
        imgUrl:['https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85fe83512254832000635fb15f048df5.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7ba16ae1893689b362837c1143e3bd3b.jpeg?thumb=1&w=1533&h=575&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e023dd94c146d0f27f7ae8e98213abff.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1062b1dc546c7695f846ed9602571f65.jpg?thumb=1&w=1533&h=575&f=webp&q=90'],
        right_tv:[],
      };
    },
     props:{   //接受父组件传值
        fatherName:null
    },
    created(){
      new Promise((resolve, reject)=>{
          this.axios.get("data.json").then(res=>{          //"http://localhost:3000/db"
            this.right_tv.push(res.data.tv)
            this.right_tv.push(res.data.computer)
            this.right_tv.push(res.data.around)
            this.right_tv.push(res.data.watch)
            this.right_tv.push(res.data.parts)
            this.right_tv= [...this.right_tv,...this.right_tv] 
          })
        }).catch(() => {})
    },
    methods: {
      show(num){
        this.show_right = true   
        this.active = num   
      },
      setCmDetails(name,price,img,introduction,id,number){  
      this.$router.push('/')
      this.$router.push('/cmDetails#router-link')
      this.$nextTick(()=>{
      setTimeout(() => {
          Bus.$emit('setCmDetails',{name,price,img,introduction,id,number})            
        }, 20);
      })  
    }
     
    }
  }
</script>
<style>
#swiper{
  margin-top: 20px;
  width: 85vw;
  height: 65vh;
  margin: auto;
}
.el-carousel{
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
  height: 450px;
}
  .left{
    margin: 0 10px 0 0;
    background-color: transparent; 
    height: 400px;
    float: left;
    width: 20%;

  }
  .left ul {
    margin: 0 ;
    padding-top: 14px;
    padding-left: 0;
  
  }
  .left li{
    list-style: none;
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
  .active{
    background: red;
    border:solid 2px slategray ;
  }
  .right{
   display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 400px;
    width: 75%;
    padding-top:40px;
    background: white;

    
  }
  .right_item{
    cursor:pointer;
    width:12% ;
    height: 100px;
    margin: 40px;   
  }

  .right_item img{
    width: 100px;
    height: 70px;

  }


  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    
    
  }


</style>