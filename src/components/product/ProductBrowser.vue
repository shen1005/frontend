<!--商品浏览界面-->

<template>
    <div>
        <ProductSearchBar @change="searchProduct"></ProductSearchBar>
        <SortButton @change="sortProduct"></SortButton>
        <PageButton :totalPageNum="totalPageNum" @change="changePage"></PageButton>
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
                totalProductNum: 1,
                page: 1,
                totalPageNum: 1,
            }
        },
        methods: {
            getProductNum(page) {
                if(this.totalProductNum === 0) return 0
                if(page === this.totalPageNum && this.totalProductNum % 10 !== 0) {
                    return this.totalProductNum % 10
                }
                return 10
            },
            changePage(newPage) {
              console.log("ProductBrowser change page to " + newPage)
              console.log(this.totalPageNum)
              this.page = newPage
              var newProductNum
              newProductNum = this.getProductNum(newPage)
              this.$refs.productPage.changePage(newPage, newProductNum)
            },
            searchProduct(keyword) {
              this.$axios({
                method:"get",
                url:"/searchProduct",
                params: {
                  keyword: keyword
                }
              }).then((res) => {
                if(res) {
                  console.log("search " + keyword + " for " + res.data + " products.")
                  this.totalProductNum = res.data;
                  this.totalPageNum = parseInt((this.totalProductNum + 9) / 10)
                  this.page = 1;
                  this.changePage(1);
                }
              });
            },
            sortProduct(key) {
              this.$axios({
                method:"get",
                url:"/sortProductBy"+key,
                params: {
                }
              }).then((res) => {
                if(res) {
                  this.page = 1;
                  this.changePage(1);
                }
              });
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
          this.searchProduct("");
        }
    }
</script>
