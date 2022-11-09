<template>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>网上超市</title>
  </head>
  <body >
  <div class="title">网上超市</div>

  <div class="login-area">
    账号：<input type="text" placeholder="请输入账号" v-model="usrName">
    <br>
    <br>
    密码：<input type="password" placeholder="请输入密码" v-model="password">
    <br>
    <br>
    <div id="submit-div"><button type="submit" id="submit-btn" @click="doSubmit">登录</button></div>
    <br>
    <span><a href="#" id="fgt-psw" @click="test">忘记密码</a></span>
    <span><a href="./register"  id="free-rgs">免费注册</a></span>
  </div>
  </body>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: "LogIn",
  data: function() {
    return{
      usrName: "",
      password: ""
    }

  },
  methods: {
    test: function () {
      alert("????")
    },
    handleLogIn: function () {
      if(this.usrName===localStorage['userName'] && this.password===localStorage['password'])
      {
        // this.$router.replace('/Home');//如果输入的名字以及密码正确路由跳转至个人页面
      }
    },
    doSubmit: function () {
      let params = {
        usrName: this.usrName,
        password: this.password
      };
      // var url = "http://localhost:8080/"
      // axios.get(url, {
      //   params: params
      // }).then(function (response) {
      //   console.log(response);
      // }).catch(function (error) {
      //   console.log(error)
      // });
      // var str = qs.stringify(params);
      // axios.post(url, str
      // ).then(function (response) {
      //   console.log(response);
      // }).catch(function (error) {
      //   console.log(error);
      // });
    }
  }
}
</script>

<style scoped>
  @import "login.css";
</style>