<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
<!--      <div class="d-flex align-center">-->
<!--        <v-img-->
<!--          alt="Vuetify Logo"-->
<!--          class="shrink mr-2"-->
<!--          contain-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
<!--          transition="scale-transition"-->
<!--          width="40"-->
<!--        />-->

<!--        <v-img-->
<!--          alt="Vuetify Name"-->
<!--          class="shrink mt-1 hidden-sm-and-down"-->
<!--          contain-->
<!--          min-width="100"-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
<!--          width="100"-->
<!--        />-->
<!--      </div>-->
      <v-btn @click="toUser">高级用户查询</v-btn>
      <v-btn @click="toHome">首页</v-btn>
      <v-btn @click="toProduct">商品</v-btn>
      <v-btn @click="toLog">登录</v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
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
