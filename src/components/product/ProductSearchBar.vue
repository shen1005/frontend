<!--搜索栏-->
<template>
    <div id="ProductSearchBar">
        <img src = "../../assets/pictures/search.jpeg" class="search_img">
        <input placeholder="请输入关键词" v-model="keyword" class="search_input">
        <v-btn dark @click="searchClick" class="search_button"> 搜索 </v-btn>
        <v-btn dark @click="reptileClick" class="reptile_button"> 自动爬取数据 </v-btn>
        <v-btn dark @click="getProductStatistics" class="statistic_button" href="/statistics.pdf" download="statistics.pdf"> 导出为统计图</v-btn>

      <el-dialog :visible.sync="getReptileMessage" ref="form" :inline="true" width="80%">
        <div>
          <h1 style="color: black; text-align: center">自动获取数据</h1>
          <p class="text_inform">爬取信息输入</p>
          <textarea cols="110" rows="6" placeholder="请输入要爬取的商品类别+页数（如 鞋子 3）" class="text_area" v-model="goods"></textarea>
          <p class="text_inform">cookie信息输入</p>
          <p>由于淘宝的爬取拦截限制，需要您输入cookie的相关信息</p>
          <textarea cols="110" rows="15" placeholder="请输入cookie相关信息" class="text_area" v-model="header"></textarea>
        </div>
        <div style="text-align: right">
          <v-btn class="start_reptile_button" @click="startReptile">开始爬取</v-btn>
          <v-btn class="start_reptile_button" @click="cancelReptile">取消</v-btn>
        </div>
      </el-dialog>

      <el-dialog :visible.sync="reptileWait" width="70%">
        <h1>正在爬取中，请稍候（大约需要30秒）</h1>
      </el-dialog>

    </div>

</template>


<script>
    import "../../assets/css/ProductSearchBar.css"
    export default {
        name:"ProductSearchBar",
        data() {
            return {
                keyword: "",
                getReptileMessage: false,
                reptileWait: false,
                statisticsPic: false,
                goods: "",
                header: ""
            }
        },
        methods: {
            searchClick() { // 搜索接口
                console.log("search " + this.keyword)
                this.$emit("change", this.keyword) // 给父组件传值
                this.keyword = ""
            },
            reptileClick() {
              console.log("reptile click")
              this.getReptileMessage = true;
            },
            cancelReptile() {
              this.getReptileMessage = false;
            },
            startReptile() {
              this.reptileWait = true;
              this.$axios({
                method:"post",
                url:"/reptile",
                params:{
                  goods: this.goods,
                  header: this.header
                }
              }).then((res) => {
                this.reptileWait = false;
                if(res.data === 0) {
                  window.alert("爬取成功！")
                  this.getReptileMessage = false;
                  location.reload();
                }
                else {
                  window.alert("爬取失败...！")
                  this.getReptileMessage = false;
                  location.reload();
                }
              })
            }
        }
    }
</script>

