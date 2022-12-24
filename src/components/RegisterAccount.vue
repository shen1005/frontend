<template>
  <div class="regAcc" >
  <head>
    <meta charset="UTF-8">
    <title>注册页面</title>
  </head>

  <body id="reg_area">
  <p v-text=str> </p>
  <div class="rgs_layout" id="rgs">
    <div class="rgs_left">
      <p>新用户注册</p>
      <p>USER REGISTER</p>
    </div>

    <div class="rgs_center">
      <div class="rgs_form">
        <form action="#" method="post">

          <table>

            <tr>
              <td class="td_left"><label>账户类型</label> </td>
              <td class="td_right"><input type="radio" name="kind" value="user" v-model="kind">用户
                <input type="radio" name="kind" value="store"  v-model="kind">商户</td>
            </tr>

            <tr>
              <td class="td_left"><lable for="username">用户名</lable></td>
              <td class="td_right"><input type="text" name="username" id="username" v-model="usrName"></td>
            </tr>
            <tr>
              <td class="td_left"><lable for="password">密码</lable></td>
              <td class="td_right"><input type="password" name="password" id="password" v-model="password"></td>
            </tr>
            <tr>
              <td class="td_left"><label for="email">Email</label></td>
              <td class="td_right"><input type="text" name="email" id="email" v-model="mail"></td>
            </tr>
<!--            <tr>-->
<!--              <td class="td_left"><label for="name">姓名</label></td>-->
<!--              <td class="td_right"><input type="text" name="name" id="name"></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td class="td_left"><label>性别</label> </td>-->
<!--              <td class="td_right"><input type="radio" name="gender" value="male">男-->
<!--                <input type="radio" name="gender" value="female">女</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td class="td_left"><lable for="birthday">出生日期</lable></td>-->
<!--              <td class="td_right"><input type="date" name="birthday" id="birthday"></td>-->
<!--            </tr>-->
            <tr>
              <td class="td_left"><label for="checkcode">验证码</label> </td>
              <td class="td_right"><input type="text" name="checkcode" id="checkcode" v-model="inputCode">
                <input type="button" id="checkCodeValue" class="code" style="width:80px" @click="createCode()">
                <a href="###" @click="createCode()">看不清楚</a>
<!--                <img id="img_check" src="../assets/checkcode-7364.jpg" width="140">--> </td>
            </tr>
            <!--                        <tr>-->
            <!--                            <td colspan="3" id="sub_td"><input type="submit" name="sub_btn" id="sub_btn" value="注册"></td>-->
            <!--                        </tr>-->
          </table>
        </form>
        <input type="submit" name="sub-btn" id="sub_btn" value="注册" @click="handleRgs">
      </div>
    </div>

    <div class="rgs_right">
      <p>已有帐号？<a href="./login">立刻登录</a></p>
    </div>
  </div>
  </body>
  </div>
</template>


<script>

 export default {
   name: "RegisterAccount",
   data() {
     return {
       usrName:"",
       password:"",
       mail:"",
       tel:"",
       kind:"",
       code:"",
       inputCode:""
     };
   },
   methods:{
     createCode: function () {
       var code = [];
       var codeLength = 4; //验证码的长度
       var checkCode = document.getElementById("checkCodeValue");
       checkCode.value = "";
       var selectChar = [2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
       for (var i = 0; i < codeLength; i++) {
         var charIndex = Math.floor(Math.random() * 32);
         code += selectChar[charIndex];
       }
       if (code.length !== codeLength) {
         this.createCode();
       }
       checkCode.value = code;
       this.code = code;
     },

     validate: function () {
       var inputCode = this.inputCode.toUpperCase();
       if (inputCode.length <= 0) {
         alert("请输入验证码！");
         return false;
       } else if (inputCode !== this.code) {
         alert("验证码输入错误！");
         this.createCode();
         return false;
       } else {
         return true;
       }
     },

     handleRgs: function () {

       let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-\\.]).{8,}$/;
       if (!reg.test(this.password)) {
         alert("密码必须8位以上，且包含数字、大小写字母、特殊字符")
         return
       }

       if (!this.validate()) {
         return
       }

       if (this.kind === "user") {
         console.log("register user")
         this.$axios({
           method:"post",
           url:"/createAccount",
           data:{
             usrName: this.usrName,
             password: this.password,
             email: this.mail
           }
         }).then((res) => {
           if (res.data === -1) {
             alert("该用户名已被注册，请更换用户名");
           } else {
             console.log(res);
             alert("您的用户id为：" + res.data + "\n目前网站大促，已自动为您充值66666元");
           }
         })
       } else if (this.kind === "store") {
         console.log("register store")
         this.$axios({
           method:"post",
           url:"createStore",
           data:{
             usrName: this.usrName,
             password: this.password,
             email: this.mail
           }
         }).then((res) => {
           if (res.data === -1) {
             alert("该商户名已被注册，请更换用户名");
           } else {
             console.log(res);
             alert("您的商户id为：" + res.data + "\n目前网站大促，已自动为您充值888888元");
           }
         })
       }

     }
   }
 }
</script>





<style scoped>

  @import "register.css";
</style>