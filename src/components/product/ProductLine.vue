<!-- 一行商品 -->
<template>
    <div class="product_line">
        <ProductInterface v-if="colNum > 0" :row="row" col="1" ref="product1"></ProductInterface>
        <ProductInterface v-if="colNum > 1" :row="row" col="2" ref="product2"></ProductInterface>
        <ProductInterface v-if="colNum > 2" :row="row" col="3" ref="product3"></ProductInterface>
        <ProductInterface v-if="colNum > 3" :row="row" col="4" ref="product4"></ProductInterface>
        <ProductInterface v-if="colNum > 4" :row="row" col="5" ref="product5"></ProductInterface>
    </div>
</template>

<script>
    import "../../assets/css/ProductLine.css"
    import ProductInterface from "./ProductInterface.vue"
    export default {
        name:"ProductLine",
        props:["row"],
        data() {
            return {
                page: 1,
                colNum: 5
            }
        },
        methods: {
            changePage(newPage, newColNum) {
              console.log("Line " + this.row + " change page to " + newPage)
              this.page = newPage;
              this.colNum = newColNum;
              if(this.colNum > 0) this.$refs.product1.changePage(this.page);
              if(this.colNum > 1) this.$refs.product2.changePage(this.page);
              if(this.colNum > 2) this.$refs.product3.changePage(this.page);
              if(this.colNum > 3) this.$refs.product4.changePage(this.page);
              if(this.colNum > 4) this.$refs.product5.changePage(this.page);
            }
        },
        components: {
            ProductInterface
        }
    }
</script>