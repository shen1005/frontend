<!-- 商品界面 -->

<template>
    <div class = "product_border">
        <div>
            <img :src=picture  class="product_picture">
        </div>

        <div>
            <label class="price">￥{{price}}</label>
            <label class = "inActivity" v-if="activity">(活动中)</label>
            <label class="blank" v-if="!activity"></label>
            <label class = "sales"> {{sales}}人购买 </label>
            <img src="@/assets/pictures/star.png" class="star">
            <label class="starsNum">{{stars}}</label>

        </div>
            
        <div> 
            <p class = "product_introduction"> {{title}} </p>
        </div>    

        <div> 
            <label class="store_link"> {{storeName+" "+expressName}}</label>
            <v-btn @click="buyClick" class="buy_button"> 购买 </v-btn>
        </div>
    </div>
</template>

<script>
    import Vue from "vue"
    import "@/assets/css/ProductInterface.css"
    import {MessageBox} from "element-ui"
    Vue.prototype.$confirm = MessageBox.confirm
    export default {
        name:"ProductInterface",
        props:["row","col"],
        data() {
            return {
                page:1,
                price:999,
                sales: 9999,
                title:"芝士足力健",
                storeName: "足力健旗舰店",
                expressName: "顺丰快递",
                stars: 4.8,
                productId: 1,
                picture: "1.jpg",
                activity: false
            }
        },
        methods: {
            changePage(newPage) {
              console.log("Row " + this.row + " Col " + this.col + " change to page " + newPage)
              this.page = newPage;
              this.$axios({
                method:"get",
                url:"/getProduct",
                params: {
                  page: this.page,
                  row: this.row,
                  col: this.col
                }
              }).then((res) => {
                if(res) {
                  console.log("row: " + String(this.row) + " col: " + String(this.col) + " load product successfully")
                  this.title = res.data.title
                  this.picture = res.data.picture
                  this.price = res.data.price
                  this.sales = res.data.sales
                  this.storeName = res.data.storeName
                  this.stars = res.data.stars
                  this.expressName = res.data.expressName
                  this.productId = res.data.productId
                  this.activity = res.data.activity
                }
                else {
                  console.log("row: " + String(this.row) + " col: " + String(this.col) + " load product fail")
                }
              })
            },
            buyClick() {
                if(window.confirm("确定要购买吗？")) {
                    console.log("购买 " + this.productName)
                    this.$axios({
                      method:"post",
                      url:"/buyProduct",
                      params:{
                        productId:this.productId
                      }
                    }).then((res) => {
                      if(res.data === 0) {
                        this.sales++
                        window.alert("购买成功！")
                      }
                      else if(res.data == -2) {
                        window.alert("购买失败！请使用普通用户账号购买商品！")
                      }
                      else {
                        window.alert("余额不足，购买失败！")
                      }
                    })
                }
            }
        }
    }
</script>