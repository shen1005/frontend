<template>

  <div class="container">
    <div class="main">
      <h1 class="reset">Reset</h1>
      <div class="content">
        <input type="text" class="name" placeholder="请输入id" v-model="id"><br>
        <input type="text" class="password1" placeholder="请输入用户名" v-model="userName"><br>
        <input type="password" class="password2" placeholder="请输入密码" v-model="password"><br>
        <input type="button" class="button" value="确定" @click="handle"><br>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ForgetPassword",
  data: function () {
    return {
      id: "",
      userName: "",
      password: ""
    }
  },
  methods: {
    handle: function () {
      let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-\\.]).{8,}$/;
      if (!reg.test(this.password)) {
        alert("密码必须8位以上，且包含数字、大小写字母、特殊字符")
        return
      }

      this.$axios({
        method:"post",
        url:"modifyPassword",
        data:{
          id:this.id,
          userName:this.userName,
          password:this.password
        }
      }).then((res) => {
        if (res.data === -1) {
          alert("id或用户名错误，请重新输入")
        } else {
          alert("密码修改成功，新密码为" + this.password)
        }
      })
    }
  }
}
</script>

<style scoped>
  @import "forget.css";
</style>