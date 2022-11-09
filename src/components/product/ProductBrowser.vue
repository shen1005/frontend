<!--商品浏览界面-->

<template>
    <div>
        <ProductSearchBar></ProductSearchBar>
        <SortButton></SortButton>
        <PageButton :totalPageNum="totalPageNum" :page="page" @change="handelChange"></PageButton>
        <ProductPage :page="page" :productNum="getProductNum(page)" ref="page"></ProductPage>
    </div>

</template>

<script>
    import ProductSearchBar from "./ProductSearchBar.vue"
    import SortButton from "./SortButton.vue"
    import PageButton from "./PageButton.vue"
    import ProductPage from "./ProductPage.vue"
    import UserButton from "./UserButton"
    export default {
        name: "ProductBrowser",
        data() {
            return {
                totalProductNum: 1000,
                page: 0
            }
        },
        computed: {
            totalPageNum:function () {
                return parseInt((this.totalProductNum + 19) / 20)
            }
        },
        methods: {
            getProductNum(pageNum) {
                if(pageNum == this.totalPageNum-1 && this.totalProductNum % 20 != 0) {
                    return this.totalPageNum % 20
                }
                return 20
            },
            loadInterface() {
                console.log("当前页面 " + String(this.page))
                this.$refs.page.loadInterface()
            },
            handelChange(newPage) {
                this.page = newPage
                this.loadInterface()
            }
        },
        components: {
            ProductSearchBar,
            ProductPage,
            SortButton,
            PageButton,
            UserButton
        }
    }
</script>