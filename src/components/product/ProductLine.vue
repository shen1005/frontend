<!-- 一行商品 -->
<template>
    <div class="product_line">
        <ProductInterface v-if="colNum > 0"  :page="page" :row="row" col="0" ref="product0"></ProductInterface>
        <ProductInterface v-if="colNum > 1"  :page="page" :row="row" col="1" ref="product1"></ProductInterface>
        <ProductInterface v-if="colNum > 2"  :page="page" :row="row" col="2" ref="product2"></ProductInterface>
        <ProductInterface v-if="colNum > 3"  :page="page" :row="row" col="3" ref="product3"></ProductInterface>
        <ProductInterface v-if="colNum > 4"  :page="page" :row="row" col="4" ref="product4"></ProductInterface>
    </div>
</template>

<script>
    import "../../assets/css/ProductLine.css"
    import ProductInterface from "./ProductInterface.vue"
    export default {
        props:["page", "row", "colNum"],
        name:"ProductLine",
        data() {
            return {
 
            }
        },
        methods: {
            loadInterface() {
                if(this.colNum > 0) this.$refs.product0.loadInterface()
                if(this.colNum > 1) this.$refs.product1.loadInterface()
                if(this.colNum > 2) this.$refs.product2.loadInterface()
                if(this.colNum > 3) this.$refs.product3.loadInterface()
                if(this.colNum > 4) this.$refs.product4.loadInterface()
            }
        },
        components: {
            ProductInterface
        }
    }
</script>