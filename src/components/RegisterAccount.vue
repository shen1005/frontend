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
              <td class="td_left"><lable for="username">用户名</lable></td>
              <td class="td_right"><input type="text" name="username" id="username" v-model="usrName"></td>
            </tr>
            <tr>
              <td class="td_left"><lable for="password">密码</lable></td>
              <td class="td_right"><input type="password" name="password" id="password" v-model="password"></td>
            </tr>
            <tr>
              <td class="td_left"><label for="email">Email</label></td>
              <td class="td_right"><input type="text" name="email" id="email"></td>
            </tr>
            <tr>
              <td class="td_left"><label for="name">姓名</label></td>
              <td class="td_right"><input type="text" name="name" id="name"></td>
            </tr>
            <tr>
              <td class="td_left"><label>性别</label> </td>
              <td class="td_right"><input type="radio" name="gender" value="male">男
                <input type="radio" name="gender" value="female">女</td>
            </tr>
            <tr>
              <td class="td_left"><lable for="birthday">出生日期</lable></td>
              <td class="td_right"><input type="date" name="birthday" id="birthday"></td>
            </tr>
            <tr>
              <td class="td_left"><label for="checkcode">验证码</label> </td>
              <td class="td_right"><input type="text" name="checkcode" id="checkcode">
                <img id="img_check" src="../assets/checkcode.jpg" width="140"> </td>
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
       tel:""
     };
   },
   methods:{
     handleRgs: function () {
       if (localStorage['usrName'] === this.usrName) {
         alert("用户名已存在");
       } else if (this.name === '') {
         alert("用户名不能为空");
       } else {
         localStorage.setItem('usrName', this.usrName);
         localStorage.setItem('password', this.password);
         alert("注册成功");
         this.$router.replace('/login');
       }
     }
   }
 }
</script>





<style scoped>

  @import "register.css";
</style>