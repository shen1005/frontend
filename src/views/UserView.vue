<template>
  <div id="background">
    <div style="border-bottom-color: black;">
      <h1 style="padding-top: 50px"></h1>
      <v-text-field   label="搜索" hide-details style="width: 25%; float: right; border: black; padding-right: 50px; padding-top: 40px" v-model=search>px
      </v-text-field>
      <!--          <h1 style="padding-top: 100px"></h1>-->
      <!--          <v-btn style="float: right;">搜索</v-btn>-->
      <!--          <v-text-field  hide-details style="width: 25%; float: right; border: black"></v-text-field>-->
    </div>
    <div style = " padding-left: 50px" >
      <v-avatar size=100>
        <h1 style="color: #000000"> {{name}}</h1>
      </v-avatar>
      <span style="color: black; padding-left: 30%; font-style: v-bind(); font-size: 25px " > {{introduce}}</span>
    </div>
    <div>
      <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
      ></v-data-table>
      <v-btn @click = "getData">获取数据</v-btn>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
export default {
  data() {
    return {
      ground: require('../assets/userBg.jpg'),
      search: '',
      name: 'admin',
      introduce: '订单列表',
      headers: [
        {
          text: '姓名',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        {text: '实付金额', value: 'money', align: 'start'},
        {text: '时间', value: 'time', align: 'start'},
        {text: '购买物品', value: 'tradeName', align: 'start'},
        {text: '详细信息', value: 'url', align: 'start'},
      ],
      desserts: [{
        name: 'res.data.name',
        money: '100',
        time: '2020-12-12',
        tradeName: '足力健',
        url: 'https://zulijian.tmall.com/shop2'
      }]
    }
  },
  methods: {
    getData() {
      this.$axios({
        method: 'post',
        url: 'search',
        data: Qs.stringify({
          keyword: '555'
        })
      });
    }
  },
  created() {
    this.$axios({
      method: 'post',
      url: 'InitOrder',
      }).then(res => {
        //返回的是list
        let i = 0;
        this.desserts = [];
        for (i = 0; i < res.data.length; i++) {
          this.desserts.push({
            name: res.data[i].name,
            money: res.data[i].payPrice,
            time: res.data[i].payTime,
            tradeName: res.data[i].productName,
            url: res.data[i].information
          })
        }

    }).catch(err => {
      console.log(err);
      this.desserts = [{
        name: 'res.data3.name',
        money: '100',
        time: '2020-12-12',
        tradeName: '足力健',
        url: 'https://zulijian.tmall.com/shop/view_shop.htm?spm=a230r.1.14.43.ff4072cdspiC5t&user_number_id=3287104402'
      }]
    })
  }
}

</script>

<style>
#background {
  height: 100%;
  width: 100%;
  position: fixed;
  background-size: 150% 100%;
  background: url("../assets/userBg.jpg") no-repeat center 0;

}
</style>
