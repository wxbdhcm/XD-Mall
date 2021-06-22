<template>
  <div id="personalRoute">
    <br />
    <div class="user-info">
      <div class="avatar">
        <el-avatar class="user-info-img" :src="imageUrl"></el-avatar>
      </div>
      <div class="user-info-Id">
        <span class="user-info-name">{{ $store.state.user.Username }}</span
        ><br />
        <span class="user-info-id">{{ $store.state.user.userPhone }}</span>
      </div>
      <div class="upload">
        <el-upload
          class="avatar-uploader"
          action="/api/avatar"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <span>点击更换头像:</span>
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
    <div class="userAddress">
      <div style="font-weight: 700; text-align: left">收货地址管理</div><br>
      <el-popover
        placement="right"
        width="400"
        trigger="click"
        v-model="visible"
      >
        <div class="chooseAddress">
          收货人：<br /><el-input v-model="rgName"></el-input><br />
          联系电话：<br /><el-input v-model="rgPhone"></el-input><br />
          所在地区：<br />
          <el-cascader
            style="width: 600px"
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"
          >
          </el-cascader>
          详细地址:<br />
          <el-input v-model="detailedAddress"></el-input><br />
          <el-button @click="newAddress()"
            >保存地址</el-button
          >
        </div>
        <el-button style="margin-right:900px" slot="reference">新创收货地址</el-button>
      </el-popover>

      <div class="allCard">
        <div v-for="(item, index) in receivingAddress" :key="index + 'address'">
          <el-card class="personalAddress">
            <div style="font-weight: 700">{{ item.receiver }}</div>
            <br /><br />
            <span>所在区域：</span>{{ item.userAddress }}<br /><br />
            <span>详细地址：</span>{{ item.userAddressDetails }}<br /><br />
            <span>联系电话:</span>{{ item.userPhone }}
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import { regionData, CodeToText } from "element-china-area-data";
export default {
  data() {
    return {
      userName: "qwj",
      userId: "123",
      imageUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      options: regionData,
      selectedOptions: [],
      addtions: {},
      visible: false,
      detailedAddress: "",
      rgName: "",
      rgPhone: "",
      receivingAddress: this.$store.state.user.userAddressList,
    };
  },
  methods: {
    //邮政编码
    handleChange(value) {
      //我们选择地址后，selectedOptions 会保存对应的区域码，例如北京的区域码为'110000'
      //我们要取出区域码对应的汉字，就需要用CodeToText(区域码)进行输出
      this.addtions.selectedOptions = value;
      var name = "";
      this.selectedOptions.map((item) => (name += CodeToText[item] + "/"));
      this.addtions.names = name;
      // console.log(this.addtions.names)
      // console.log(this.addtions)
    },

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.axios.post('/api/avatar',qs.stringify({avatar:this.imageUrl,userName:this.$store.state.user.Username})).then()
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    newAddress() {
      let rex = new RegExp(/^1[3-9][0-9]{9}$/);
      if (rex.test(this.rgPhone)) {
        let address = {
          userName:this.$store.state.user.Username,
          userAddress: this.addtions.names,
          userPhone: this.rgPhone,
          receiver: this.rgName,
          userAddressDetails: this.detailedAddress,
        };
        let parms = qs.stringify(address);
        this.axios.post('/api/postAddress',parms).then((res) => {})
        this.$store.state.user.userAddressList.push(address)
        // this.$store.state.user.userAderss = add
        this.visible = false
        this.rgName =this.rgPhone=this.selectedOptions=this.detailedAddress = ''
      } else {
        window.alert("请输入正确的手机号码");
      }
    },
  },
};
</script>

<style>
.personalAddress {
  padding-left: 20px;
  text-align: left;
}
.personalAddress span {
  color: #999;
  padding-top: 10px;
}
.chooseAddress {
  width: 100%;
  margin: auto;
}
.user-info {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.avatar {
  margin-left: 100px;
}
.user-info-img {
  width: 80px;
  height: 80px;
}
.userAddress {
  width: 80%;
  height: 200px;
  margin: auto;
}
.user-info-Id {
  margin-left: 20px;
}
.user-info-name {
  font-weight: 600;
}
.upload {
  margin-left: 20px;
}
.allCard {
  overflow: scroll;
  height: 350px;
  margin-top: 10px;
}
.allCard::-webkit-scrollbar {
  display: none;
}
</style>
