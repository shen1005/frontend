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

        <el-dialog :visible.sync="buying" width="70%">
          <div style="margin-bottom: 20px">
            <p style="text-align: center; font-size: 30px; font-weight: 800; color: #fa9c02;"> 购买商品 </p>
          </div>
          <span style="display: inline-block; width: 60%">
             <div style="margin-bottom: 10px">
              <label style="font-size: 20px; color: black; font-weight: 600;"> 商品： {{title}}</label>
            </div>
             <div style="margin-bottom: 10px">
              <label style="font-size: 20px; color: black; font-weight: 600"> 商家： {{storeName}}</label>
            </div>
            <div style="margin-bottom: 10px">
              <label style="font-size: 20px; color: black; font-weight: 600"> 快递公司: {{expressName}}</label>
            </div>
            <div style="margin-bottom: 10px">
              <label style="font-size: 20px; color: black; font-weight: 600"> 价格: {{price}}￥</label>
            </div>
            <div style="margin-bottom: 10px">
              <label style="font-size: 20px; color: red;" v-if="activity"> 活动优惠中</label>
            </div>
            <div style="margin-bottom: 10px">
              <label style="font-size: 20px; color: black; font-weight: 600"> 联系人姓名：</label>
              <input style="width: 200px; border-style:solid;border-width: 2px; border-color: gray; color: black; font-size: 15px;font-weight: 600" placeholder="请输入联系人姓名">
            </div>
            <div style="margin-bottom: 10px">
              <label style="font-size: 20px; color: black;font-weight: 600"> 联系方式：</label>
              <input style="width: 200px; border-style:solid ;border-width: 2px; border-color: gray; color: black; font-size: 15px;font-weight: 600" placeholder="请输入联系方式">
            </div>
            <div style="margin-bottom: 10px">
              <label style="font-size: 20px; color: black;font-weight: 600"> 当前余额：{{userMoney}}</label>
            </div>
          </span>
          <span style="display: inline-block; position: relative; left: 70px">
            <img :src=picture  class="product_picture">
          </span>

          <div style="text-align: center">
            <v-btn @click="buyConfirm" style="font-size: 20px; color: black; font-weight: 600">购买</v-btn>
            <v-btn @click="buying = false" style="font-size: 20px; color: black; position: relative; left: 30px; font-weight: 600">取消</v-btn>
          </div>

        </el-dialog>
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
                activity: false,
                buying: false,
                userMoney: 0
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
              this.$axios({
                method:"post",
                url:"/getUserMoney",
                params:{}
              }).then((res) => {
                if(res.data === -1) {
                  window.alert("请使用用户账号购买商品！")
                }
                else {
                  this.userMoney = res.data;
                  this.buying = true;
                }
              })
            },
            buyConfirm() {
                this.buying = true;
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
                        this.buying = false;
                      }
                      else {
                        window.alert("余额不足，购买失败！")
                        this.buying = false;
                      }
                    })

            }
        }
    }
</script>