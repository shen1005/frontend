<template>
    <div>
        <ProductLine v-if="rowNum > 0" :page="page" :row="0" :colNum="getColNum(0)" ref="line0"></ProductLine>
        <ProductLine v-if="rowNum > 1" :page="page" :row="1" :colNum="getColNum(1)" ref="line1"></ProductLine>
        <ProductLine v-if="rowNum > 2" :page="page" :row="2" :colNum="getColNum(2)" ref="line2"></ProductLine>
        <ProductLine v-if="rowNum > 3" :page="page" :row="3" :colNum="getColNum(3)" ref="line3"></ProductLine>
    </div>
    
</template>

<script>
    import ProductLine from "./ProductLine.vue"
    export default {
        name:"ProductPage",
        props:["page","productNum"],
        data() {
            return {
                rowNum: (this.productNum + 3) / 4
            }
        },
        methods: {
            getColNum(row) {
                if(row == this.rowNum-1 && this.productNum % 5 != 0) {
                    return this.productNum % 5;
                }
                return 5;
            },
            loadInterface() {
                if(this.rowNum > 0) this.$refs.line0.loadInterface()
                if(this.rowNum > 1) this.$refs.line1.loadInterface()
                if(this.rowNum > 2) this.$refs.line2.loadInterface()
                if(this.rowNum > 3) this.$refs.line3.loadInterface()
            }
        },
        components: {
            ProductLine
        }
    }
</script>