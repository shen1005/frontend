
<!--排序按钮-->
<template>
    <span>
        <button type="button" class="sort_button" v-on:click="comprehensiveClick">综合排序</button>
        <button type="button" class="sort_button" v-on:click="salesClick">销量排序</button>
        <button type="button" class="sort_button" v-on:click="priceClick">价格排序</button>
    </span>
</template>    

<script>
    import "../../assets/css/SortButton.css"
    export default {
        name:"SortButton",
        data() {
            return {
                sortType: "comprehensive"
            }
        },
        methods: {
            sortReload() { // 重新加载商品
                console.log("重新加载商品")
            },
            comprehensiveClick() {
                console.log("点击 综合排序"),
                this.sortType = "comprehensive",
                this.sortReload()
            },
            salesClick() {
                console.log("点击 销量排序"),
                this.sortType = "sales",
                this.sortReload()
            },
            priceClick() {
                console.log("点击 价格排序"),
                this.sortType = "price",
                this.sortReload()
            }
        }
    }
</script>