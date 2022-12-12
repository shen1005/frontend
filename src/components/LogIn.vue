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


    <div id="kind">
      类型：
    <input type="radio" name="kind" value="user" v-model="kind" >用户
    <input type="radio" name="kind" value="store"  v-model="kind">商户
    <input type="radio" name="kind" value="admin" v-model="kind">超级管理员
    </div>
    <br>

    账号：<input type="text" placeholder="请输入账号" v-model="id">
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
      id: "",
      password: "",
      kind:""
    }

  },
  methods: {
    test: function () {
      alert("????")
    },
    handleLogIn: function () {

      if (this.kind === "user") {
        console.log(this.kind)
        this.$axios({
          method:"get",
          url:"/loginUser",
          params:{
            id:this.id,
            password:this.password
          }
        }).then((res) => {
          if (res.data === 1) {
            location.href="/user"
          } else if (res.data === 0) {
            alert("账号或密码错误，请重新输入")
          }
        })
      } else if (this.kind === "store") {
        console.log(this.kind)
        this.$axios({
          method:"get",
          url:"/loginStore",
          params:{
            id:this.id,
            password:this.password
          }
        }).then((res) => {
          if (res.data === 1) {
            location.href="/user"
          } else if (res.data === 0) {
            alert("账号或密码错误，请重新输入")
          }
        })
      } else if (this.kind === "admin") {
        console.log(this.kind)
        this.$axios({
          method:"get",
          url:"/loginAdmin",
          params:{
            id:this.id,
            password:this.password
          }
        }).then((res) => {
          if (res.data === 1) {
            location.href="/user"
          } else if (res.data === 0) {
            alert("账号或密码错误，请重新输入")
          }
        })
      }
    }
    }
  }
</script>

<style scoped>
  @import "login.css";
</style>
