<template>
  <div id="background">
    <div style="border-bottom-color: black;">
      <h1 style="padding-top: 50px"></h1>
      <v-text-field @keydown="checkKey" label="搜索" hide-details style="width: 25%; float: right; border: black; padding-right: 50px; padding-top: 40px" v-model="search">px
      </v-text-field>
      <!--          <h1 style="padding-top: 100px"></h1>-->
      <!--          <v-btn style="float: right;">搜索</v-btn>-->
      <!--          <v-text-field  hide-details style="width: 25%; float: right; border: black"></v-text-field>-->
    </div>
    <div v-if="dialog"  class="mask">
      <div class="box">
        <h2>是否取消删除该订单？</h2>
        <p  style="padding-top: 50px"></p>
          <v-btn @click="deleteOrder">确定</v-btn>
        <span style="padding-left: 100px">           </span>
          <v-btn @click="dialog = false">取消</v-btn>
      </div>
    </div>
    <div style = " padding-left: 50px" >
      <v-avatar size=100>
        <h1 style="color: #000000"> {{name}}</h1>
      </v-avatar>
      <span style="color: black; padding-left: 30%; font-style: v-bind(); font-size: 25px " > {{introduce}}</span>
    </div>
    <div v-if="isManager">
      <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
          @click:row="select"
      ></v-data-table>
    </div>
    <div v-if="isSeller">
      <v-data-table
          :headers="sellerHeaders"
          :items="sellerDesserts"
          :items-per-page="5"
          class="elevation-1"
      ></v-data-table>
    </div>
    <div v-if="isBuyer">
      <v-data-table
          :headers="buyerHeaders"
          :items="buyerDesserts"
          :items-per-page="5"
          class="elevation-1"
      ></v-data-table>
    </div>
<!--    <v-btn @click="reInit" style="float: bottom; padding-right: 50px">刷新</v-btn>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      preOrderUserName: "",
      preOrderProductName: "",
      preOrderTime: "",
      //是否是高级用户
      isManager: false,
      //是否是商家
      isSeller: false,
      //是否是普通的用户
      isBuyer: false,
      dialog: false,
      flag: true,
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
      }],
      sellerHeaders: [
        {
          text: '姓名',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        {text: '商品名称', value: 'productName', align: 'start'},
        {text: '商品价格', value: 'productPrice', align: 'start'},
      ],
      sellerDesserts: [

      ],
      buyerHeaders: [
        {
          text: '姓名',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        {text: '商品名称', value: 'productName', align: 'start'},
        {text: '购买时间', value: 'time', align: 'start'},
        {text: '打星', value: 'star', align: 'start'},
      ],
      buyerDesserts: [

      ],
    }
  },
  methods: {
    getData() {
      this.$axios({
        method: 'post',
        url: 'InitUserPrority'
      }).then(res => {
        this.isManager = res.data.manager;
        this.isSeller = res.data.seller;
        this.isBuyer = res.data.buyer;
        if (this.isManager) {
          this.introduce = '订单列表';
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
          });
        } else if (this.isSeller) {
          this.introduce = '商品列表';
          this.$axios({
            method: 'post',
            url: 'InitSellerOrder',
          }).then(res => {
            //返回的是list
            let i = 0;
            this.sellerDesserts = [];
            for (i = 0; i < res.data.length; i++) {
              this.sellerDesserts.push({
                name: res.data[i].name,
                productName: res.data[i].productName,
                productPrice: res.data[i].price,
              })
            }
          })
        } else {
          this.introduce = '购物评分表';
          this.$axios({
            method: 'post',
            url: 'InitBuyerOrder',
          }).then(res => {
            //返回的是list
            let i = 0;
            this.buyerDesserts = [];
            for (i = 0; i < res.data.length; i++) {
              this.buyerDesserts.push({
                name: res.data[i].name,
                productName: res.data[i].productName,
                time: res.data[i].payTime,
                star: res.data[i].star,
              })
            }
          })
        }
      });
    },
    checkKey(e) {
      console.log(e.keyCode);
      if (e.keyCode === 13) {
        this.flag = !this.flag;
      }
    },
    select(item, value = true, emit = true) {
      console.log(item.productName);
      console.log(value);
      console.log(emit);
      this.preOrderUserName = item.name;
      this.preOrderProductName = item.tradeName;
      this.preOrderTime = item.time;
      this.dialog = true;
    },
    deleteOrder() {
      this.$axios({
        method: 'post',
        url: 'deleteOrder',
        data: (
            {
              name: this.preOrderUserName,
              productName: this.preOrderProductName,
              payTime: this.preOrderTime
            }
        )
      }).then(res => {
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
        this.dialog = false;
      });
    },
    reInit() {
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
      })
    }
  },
  created() {
    // this.$axios({
    //   method: 'post',
    //   url: 'InitUserPrority'
    // }).then(res => {
    //   this.isManager = res.data.manager;
    //   console.log(this.isManager);
    //   this.isSeller = res.data.seller;
    //   this.isBuyer = res.data.buyer;
    // });
    // console.log(this.isManager);
    this.getData();
      // this.$axios({
      //   method: 'post',
      //   url: 'InitOrder',
      // }).then(res => {
      //   //返回的是list
      //   let i = 0;
      //   this.desserts = [];
      //   for (i = 0; i < res.data.length; i++) {
      //     this.desserts.push({
      //       name: res.data[i].name,
      //       money: res.data[i].payPrice,
      //       time: res.data[i].payTime,
      //       tradeName: res.data[i].productName,
      //       url: res.data[i].information
      //     })
      //   }
      //
      // }).catch(err => {
      //   console.log(err);
      //   this.desserts = [{
      //     name: 'res.data3.name',
      //     money: '100',
      //     time: '2020-12-12',
      //     tradeName: '足力健',
      //     url: 'https://zulijian.tmall.com/shop/view_shop.htm?spm=a230r.1.14.43.ff4072cdspiC5t&user_number_id=3287104402'
      //   }]
      // });
      // this.$axios({
      //   method: 'post',
      //   url: 'InitSellerOrder',
      // }).then(res => {
      //   //返回的是list
      //   let i = 0;
      //   this.sellerDesserts = [];
      //   for (i = 0; i < res.data.length; i++) {
      //     this.sellerDesserts.push({
      //       name: res.data[i].name,
      //       productName: res.data[i].productName,
      //       productPrice: res.data[i].price,
      //     })
      //   }
      // })
  },
  watch: {
    flag() {
      console.log(this.search);
      console.log(this.flag);
        this.$axios({
          method: 'post',
          url: 'search',
          data: (
              {
                keyword: this.search
              }
          )
        }).then(res => {
          console.log(res.data);
          if (this.isManager) {
            this.desserts = [];
            let i = 0;
            for (i = 0; i < res.data.length; i++) {
              this.desserts.push({
                name: res.data[i].name,
                money: res.data[i].payPrice,
                time: res.data[i].payTime,
                tradeName: res.data[i].productName,
                url: res.data[i].information
              })
            }
          }
        });
      }
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
.mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.box{
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  width: 23%;
  height: 25%;
}
</style>
