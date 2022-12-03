<!--搜索栏-->
<template>
    <div id="ProductSearchBar">
        <img src = "../../assets/pictures/search.jpeg" class="search_img">
        <input placeholder="请输入关键词" v-model="keyword" class="search_input">
        <v-btn dark @click="searchClick" class="search_button"> 搜索 </v-btn>
    </div>
</template>


<script>
    import "../../assets/css/ProductSearchBar.css"
    export default {
        name:"ProductSearchBar",
        data() {
            return {
                keyword: ""
            }
        },
        methods: {
            searchClick() { // 搜索接口
                console.log("search " + this.keyword)
                this.$emit("change", this.keyword) // 给父组件传值
                this.keyword = ""
            }
        }
    }
</script>

