<template>
    <div>
        <ProductLine v-show="rowNum > 0" :row="1" ref="line1"></ProductLine>
        <ProductLine v-show="rowNum > 1" :row="2" ref="line2"></ProductLine>

    </div>
    
</template>

<script>
    import ProductLine from "./ProductLine.vue"
    export default {
        name:"ProductPage",
        data() {
            return {
                productNum: 20,
                page: 1,
            }
        },
        computed: {
            rowNum: function () {
              return parseInt((this.productNum + 4) / 5)
            }
        },
        methods: {
            getColNum(row) {
              if(row < this.rowNum) return 5;
              if(this.productNum % 5 === 0) return 5;
              return this.productNum % 5;
            },
            changePage(newPage, newProductNum) {
                console.log("ProductPage change page to " + newPage)
                this.page = newPage;
                this.productNum = newProductNum;
                if(this.rowNum > 0) this.$refs.line1.changePage(this.page, this.getColNum(1));
                if(this.rowNum > 1) this.$refs.line2.changePage(this.page, this.getColNum(2));

            }
        },
        components: {
            ProductLine
        }
    }
</script>