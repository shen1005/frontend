<template>
  <div id="img">
  <div id="logIn">

<!--  <head>-->
<!--    <meta charset="UTF-8">-->
<!--    <meta http-equiv="X-UA-Compatible" content="IE=edge">-->
<!--    <meta name="viewport" content="width=device-width, initial-scale=1.0">-->
<!--    <title>网上超市</title>-->
<!--  </head>-->
<!--  <body >-->
  <div class="title">网上超市</div>

  <div class="login-area">
    账号：<input type="text" placeholder="请输入账号" v-model="usrName">
    <br>
    <br>
    密码：<input type="password" placeholder="请输入密码" v-model="password">
    <br>
    <br>
    <div id="submit-div"><button type="submit" id="submit-btn" @click="handleLogIn">登录</button></div>
    <br>
    <span><a href="#" id="fgt-psw" @click="test">忘记密码</a></span>
    <span><a href="./register"  id="free-rgs">免费注册</a></span>
  </div>
<!--  </body>-->
    </div>
  </div>
</template>

<script>

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
      console.log("handle login")
      this.$axios({
        method:"get",
        url:"/login",
        params:{
          usrName:this.usrName,
          password:this.password
        }
      })
    }
    }
  }
</script>

<style scoped>
  @import "login.css";
</style>
