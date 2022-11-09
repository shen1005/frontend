<template>
    <div align="right">
        <button class="user_button"> 用户中心 </button>
        <img :src="userImg" class="user_img"></img>
    </div>
</template>

<script>
    import "@/assets/css/UserButton.css"
    import userPic from "@/assets/pictures/admin.jpeg"
    export default {
        name: "UserButton",
        data() {
            return {
                userName: "Admin",
                userLink: "",
                userImg: userPic
            }
        },
        methods: {
            userClick() {
                alert("即将进入用户中心")
            }
        }
    }
</script>

<style>
    
</style>