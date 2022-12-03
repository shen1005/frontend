<!-- 商品界面 -->

<template>
    <div class = "product_border">
        <div>
            <img :src="require('../../assets/products/'+picture)"   class="product_picture">
        </div>

        <div>
            <label class="price">￥{{price}}</label>
            <label class = "sales"> {{sales}}人购买 </label>
            <img src="@/assets/pictures/star.png" class="star">
            <label class="starsNum">{{stars}}</label>
        </div>
            
        <div> 
            <p class = "product_introduction"> {{introduction}} </p>
        </div>    

        <div> 
            <label class="store_link"> {{storeName+" "+expressName}}</label>
            <v-btn @click="buyClick" class="buy_button"> 购买 </v-btn>
        </div>
    </div>
</template>

<script>
    import "@/assets/css/ProductInterface.css"
    export default {
        name:"ProductInterface",
        props:["row","col"],
        data() {
            return {
                page:1,
                productName: "足力健老年鞋",
                price:999,
                sales: 9999,
                introduction:"芝士足力健",
                storeName: "足力健旗舰店",
                expressName: "顺丰快递",
                stars: 4.8,
                productId: 1,
                picture: "1.jpg"
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
                  this.productName = res.data.productName
                  this.price = res.data.price
                  this.sales = res.data.sales
                  this.introduction = res.data.introduction
                  this.storeName = res.data.storeName
                  this.stars = res.data.stars
                  this.expressName = res.data.expressName
                  this.productId = res.data.productId
                  this.picture= String(this.productId) + '.jpg'
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
                      else {
                        window.alert("余额不足，购买失败！")
                      }
                    })
                }
            }
        }
    }
</script>