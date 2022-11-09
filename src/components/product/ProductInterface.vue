<!-- 商品界面 -->

<template>
    <div class = "product_border">
        <div>
            <img :src="picture" class="product_picture"> 
        </div>

        <div>
            <label class="price">￥{{price}}</label>
            <label class = "sales"> {{sales}}人购买 </label>    
        </div>
            
        <div> 
            <p class = "product_introduction"> {{introduction}} </p>
        </div>    

        <div> 
            <a class = "store_link" :href="storeLink" > {{storeName}} </a>
            <button type="button" class="buy_button" @click="buyClick"> 购买 </button>
        </div>
    </div>
</template>

<script>
    import "@/assets/css/ProductInterface.css"
    import pic from "@/assets/pictures/足力健.png"
    export default {
        name:"ProductInterface",
        props: ["page", "row", "col"],
        data() {
            return {
                productName: "足力健老年鞋",
                picture: pic,
                price:999,
                sales: 9999,
                introduction:"芝士足力健",
                storeName: "足力健旗舰店",
                storeLink:"https://zulijian.tmall.com/shop/view_shop.htm?spm=a230r.1.14.43.ff4072cdspiC5t&user_number_id=3287104402"
            }
        },
        methods: {
            loadInterface() {
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
                        this.picturePath = res.data.picturePath
                        this.price = res.data.price
                        this.sales = res.data.sales
                        this.introduction = res.data.introduction
                        this.storeName = res.data.storeName
                        this.storeLink = res.data.storeLink
                    }
                    else {
                        console.log("row: " + String(this.row) + " col: " + String(this.col) + " load product fail")
                    }
                })
            },
            buyClick() {
                if(window.confirm("确定要购买吗？")) {
                    console.log("购买 " + this.productName)
                    this.sales++
                    this.$axios.post('/buy', {
                        name:this.productName,
                        price:this.price
                    })
                }
            }
        }
    }
</script>