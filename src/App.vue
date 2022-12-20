<template>
<div>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn @click="toHome" style="width: 25%">首页</v-btn>
      <v-btn @click="toLog" style="width: 25%">登录</v-btn>
      <v-btn @click="toProduct" style="width: 25%">商品</v-btn>
      <v-btn @click="toUser" style="width: 25%">信息浏览</v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
</div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    toUser () {
      this.$router.push('/user')
    },
    toHome () {
      this.$router.push('/')
    },
    toProduct () {
      this.$router.push('/product')
    },
    toLog () {
      this.$router.push('/login')
    }
  }
};
</script>
