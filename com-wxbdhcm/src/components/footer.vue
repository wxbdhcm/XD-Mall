<template>
    <div id="footer">
        <div class="footer-list">
            <div class="joinUs" >
                <span>cccqq</span>
                <ul v-for="(item, index) in helpList" :key="index+1">
                    <li><el-link type="primary">{{item}}</el-link></li>
                </ul>
            </div>
            <div class="portal ">
                <span>传送门</span>
                <div class="portal-div">
                    <ul v-for="(item, index) in helpList" :key="index+10">
                         <li><el-link>{{item}}</el-link></li>
                    </ul>
                </div>
                <div class="portal-div">
                    <ul v-for="(item, index) in helpList" :key="index+5">
                        <li><el-link type="success">{{item}}</el-link></li>
                    </ul>
                </div>
                 <div class="portal-div">
                    <ul v-for="(item, index) in helpList" :key="index+15">
                        <li><el-link type="info">{{item}}</el-link></li>
                    </ul>
                </div>
            </div>
            <div class="img">
                <div><i class="el-icon-download"></i><span>下载APP</span></div>
                <div><i class="el-icon-share"></i><span>分享我们</span></div>
                <div><i class="el-icon-loading"></i><span>更多功能</span></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            helpList:['帮助指南','购物信息','售后服务','订单操作']
        }
    },
}
</script>
<style scoped>
#footer{
    height: 300px;
    background-color:aliceblue;
    margin-top: 20px;
}
.footer-list{
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin:auto
}
.footer-list div{
    margin-top: 20px;

}
h4{
    text-align: left;
}
.joinUs {
    border-right: 1px solid #999;
    width: 300px;
    
}
.joinUs span{
    margin-left: -170px;
    font-weight: 600;
    color: #999;
}
.joinUs li{
    list-style: none;
    text-align: left;
}
.portal span{
    margin-left: -850px;
    font-weight: 600;
    color: #999;
}
.portal li{
    list-style: none;
    text-align: left;
}
.portal  {
  width:550px;
   border-right: 1px solid #999;
}
.portal-div{
    margin-left: 10px;
    width: 140px;
    float: left;
}
.img{
    width: 350px;
    display: flex;
    justify-content: space-around;
   
}
.img i {
     margin-left: 10px;
    width: 50px;
    height: 50px;
    font-size: 50px;
    margin-top: 20px;
    display: block;
}
</style>