<template>
  <div>
    <!--右侧-->
    <div class="col-md-9">
      <ul class="breadcrumb">
        <li>309</li>
        <li>著作专利</li>
        <li>出版著作</li>
      </ul>
      <!-- 出版著作 -->
      <div class="col-md-4" style="text-align: center" v-show='id===1' v-for="(item,index) in indexInfo" :key="'index'+index">
        <img :src="require('@/assets/'+item.imgpath)" class="img-thumbnail" style="width: 80%" />
        <h5>
          <router-link :to='{path:"/indexDetail/idddd",query:{id:item.id}}'>{{item.name}}</router-link>
        </h5>
      </div>

      <!-- 中文论文 -->
      <div class="table-responsive" v-show="id===2">
        <table class="table table-bordered table-hover" style="background-color: #fff;">
          <tbody style="font-size: 10px">
            <!-- <foreach name="chinapaper" item="v"> -->
            <tr v-for="(item,index) in chinaPaper" :key="'china'+index" style="font-size:14px">
              <td>
                <router-link :to="{path:'/chinaEngDetail/id',query:{id:item.id}}">{{item.title}}</router-link>
              </td>
              <td>{{item.dateandtime.slice(0,11)}}</td>
            </tr>
            <!-- </foreach> -->
          </tbody>
        </table>

        <!-- <nav class="pull-right" style="margin-bottom: 10px">{$page}</nav> -->
      </div>

      <!-- 英文论文 -->
      <div class="table-responsive" v-show="id===3">
        <table class="table table-bordered table-hover" style="background-color: #fff;">
          <tbody style="font-size: 10px">
            <!-- <foreach name="englishpaper" item="v"> -->
            <tr v-for="(item,index) in englishPaper" :key="'englisg'+index" style="font-size:14px">
              <td>
                <router-link :to="{path:'/chinaEngDetail/id',query:{id:item.id}}">{{item.title}}</router-link>
              </td>
              <td>{{item.dateandtime.slice(0,11)}}</td>
            </tr>
            <!-- </foreach> -->
          </tbody>
        </table>

        <!-- <nav class="pull-right" style="margin-bottom: 10px">{$page}</nav> -->
      </div>

      <!-- 授权、申请专利 -->
      <div class="table-responsive" v-show="id===4">
        <table class="table table-bordered table-hover" style="background-color: #fff;">
          <thead>
            <tr style="font-size:16px">
              <th>专利名称</th>
              <th>专利类型</th>
              <th>公告日期</th>
            </tr>
          </thead>
          <tbody style="font-size: 10px">
            <!-- <foreach name="patent" item="v"> -->
            <tr v-for="(item,index) in patent" :key="'patent'+index" style="font-size:14px">
              <td>
                <router-link :to="{path:'/patentDetail/id',query:{id:item.id}}">
                  <a>{{item.name}}</a>
                </router-link>
              </td>
              <td>{{item.origin}}</td>
              <td>{{item.data}}</td>
            </tr>
            <!-- </foreach> -->
          </tbody>
        </table>
        <!-- <nav class="pull-right" style="margin-bottom: 10px">1</nav> -->
      </div>
    </div>
    <!--end-->
  </div>
</template>
<script>
import {
  getWritingIndex,
  getWritingChinapaper,
  getWritingEnglishpaper,
  getWritingPatent
} from "@/api/api";
// @ is an alias to /src
export default {
  name: "writingDetail",
  props: ["id"],
  data() {
    return {
      typeName: ["出版著作", "中文论文", "英文论文", "授权、申请专利"],
      indexInfo: "",
      chinaPaper: "",
      englishPaper: "",
      patent: ""
    };
  },
  created() {
    getWritingIndex().then(res => {
      this.indexInfo = res;
    });
    getWritingChinapaper().then(res => {
      this.chinaPaper = res;
    });
    getWritingEnglishpaper().then(res => {
      this.englishPaper = res;
    });
    getWritingPatent().then(res => {
      this.patent = res;
    });
  },
  updated() {
    if (this.id === 1) document.title = "出版著作";
    if (this.id === 2) document.title = "中文论文";
    if (this.id === 3) document.title = "英文论文";
    if (this.id === 4) document.title = "授权、申请专利";
  },
  components: {},

  methods: {}
};
</script>
<style lang='less'>
</style>