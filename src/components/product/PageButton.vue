<!-- 换页按钮 -->
<template>
    <span>
        <button type="button" class="page_button" v-if="page > 2" @click="addPage(1-page)"> {{1}} </button> <!--第一页码-->
        <button type="button" class="page_button" v-if="page > 3" @click="addPage(0)"> ... </button> <!--...页码-->
        <button type="button" class="page_button" v-if="page > 1" @click="addPage(-1)"> {{page-1}} </button> <!--上一页码-->
        <button type="button" class="page_button" @click="addPage(0)"> {{page}} </button> <!--当前页码-->
        <button type="button" class="page_button" v-if="page < totalPageNum" @click="addPage(1)"> {{page+1}} </button> <!--下一页码-->
        <button type="button" class="page_button" v-if="page < totalPageNum - 1" @click="addPage(2)"> {{page+2}} </button> <!--下两页码-->
        <button type="button" class="page_button" v-if="page < totalPageNum - 2" @click="addPage(0)"> ... </button> <!--...页码-->
        <button type="button" class="page_button" v-if="page < totalPageNum -3" @click="addPage(totalPageNum-page)"> {{totalPageNum}} </button> <!--最后页码-->    
    </span>
</template>

<script>
    import "@/assets/css/PageButton.css"
    export default {
        props: ['page','totalPageNum'],
        name:"PageButton",
        data() {
            return {

            }
        },
        methods: {
            reloadPage() {
                console.log("加载页码 " + this.page)
            },
            addPage(num) {
                this.page += num
                console.log("页码切换至 " + this.page)
                this.$emit('change', this.page)
            }
        }
    }
</script>