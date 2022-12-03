
<!--排序按钮-->
<template>
    <span>
        <v-btn class="sort_button" v-on:click="starsClick">评分排序</v-btn>
        <v-btn class="sort_button" v-on:click="salesClick">销量排序</v-btn>
        <v-btn type="button" class="sort_button" v-on:click="priceClick" >价格排序</v-btn>
    </span>
</template>    

<script>
    import "../../assets/css/SortButton.css"
    export default {
        name:"SortButton",
        data() {
            return {

            }
        },
        methods: {
            starsClick() {
                console.log("sort by stars")
                this.$emit('change','Stars')
            },
            salesClick() {
                  console.log("sort by sales")
                  this.$emit('change','Sales')
            },
            priceClick() {
                  console.log("sort by sales"),
                  this.$emit('change','Price')
            }
        }
    }
</script>