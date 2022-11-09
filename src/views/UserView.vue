<template>
  <div style="background-color: #69d2e8">
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
      <span style="color: blue; padding-left: 30%; font-style: v-bind(); font-size: 25px " > {{introduce}}</span>
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
export default {
  data () {
    return {
      search: '',
      name: 'admin',
      introduce: '我是一个好人',
      headers: [
        {
          text: '姓名',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: '实付金额', value: 'money' },
        { text: '时间', value: 'time' },
        { text: '购买物品', value: 'tradeName' },
        { text: '商品链接', value: 'url' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          money: '￥6.00',
          time: '2019-01-01',
          tradeName: '冰淇淋',
          url: 'https://www.baidu.com'
        },
        {
          name: 'Ice cream sandwich',
          money: '￥6.00',
          time: '2019-01-01',
          tradeName: '冰淇淋',
          url: 'https://www.baidu.com'
        },
        {
          name: 'Eclair',
          money: '￥6.00',
          time: '2019-01-01',
          tradeName: '冰淇淋',
          url: 'https://www.baidu.com'
        },
        {
          name: 'Cupcake',
          money: '￥6.00',
          time: '2019-01-01',
          tradeName: '冰淇淋',
          url: 'https://www.baidu.com'
        },
        {
          name: 'Gingerbread',
          money: '￥6.00',
          time: '2019-01-01',
          tradeName: '冰淇淋',
          url: 'https://www.baidu.com'
        },
        {
          name: 'Jelly bean',
          money: '￥6.00',
          time: '2019-01-01',
          tradeName: '冰淇淋',
          url: 'https://www.baidu.com'
        },
        {
          name: 'Lollipop',
          money: '￥6.00',
          time: '2019-01-01',
          tradeName: '冰淇淋',
          url: 'https://www.baidu.com'
        },
        {
          name: 'Honeycomb',
          money: '￥6.00',
          time: '2019-01-01',
          tradeName: '冰淇淋',
          url: 'https://www.baidu.com'
        },
        {
          name: 'Donut',
          money: '￥6.00',
          time: '2019-01-01',
          tradeName: '冰淇淋',
          url: 'https://www.baidu.com'
        },
        {
          name: 'KitKat',
          money: '￥6.',
          time: '2019-01-01',
          tradeName: '冰淇淋',
          url: 'https://www.baidu.com'
        }
      ]
    }
  }
}
</script>
