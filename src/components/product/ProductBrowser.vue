<!--商品浏览界面-->

<template>
    <div>
        <ProductSearchBar></ProductSearchBar>
        <SortButton></SortButton>
        <PageButton :totalPageNum="totalPageNum" :page="page" @change="changePage"></PageButton>
        <ProductPage :page="page" :productNum="getProductNum(page)" ref="productPage"></ProductPage>
    </div>

</template>

<script>
    import ProductSearchBar from "./ProductSearchBar.vue"
    import SortButton from "./SortButton.vue"
    import PageButton from "./PageButton.vue"
    import ProductPage from "./ProductPage.vue"
    //import UserButton from "./UserButton"
    export default {
        name: "ProductBrowser",
        data() {
            return {
                totalProductNum: 107,
                page: 1
            }
        },
        computed: {
            totalPageNum: function() {
              return parseInt((this.totalProductNum + 19) / 20)
            }
        },
        methods: {
            getProductNum(page) {
                if(page === this.totalPageNum && this.totalProductNum % 20 !== 0) {
                    return this.totalProductNum % 20
                }
                return 20
            },
            changePage(newPage) {
              console.log("ProductBrowser change page to " + newPage)
              console.log(this.totalPageNum)
              this.page = newPage
              var newProductNum
              newProductNum = this.getProductNum(newPage)
              this.$refs.productPage.changePage(newPage, newProductNum)
            }
        },
        components: {
            ProductSearchBar,
            ProductPage,
            SortButton,
            PageButton,
            // UserButton
        },
        mounted() {
          this.changePage(1);
        }
    }
</script>
