<template>
  <div>
    <div class="col-md-9">
      <ul class="breadcrumb">
        <li>F309</li>
        <li style="font-family: '微软雅黑', '黑体'">科研成果</li>
        <li>科研项目</li>
      </ul>
      <div class="table-responsive">
        <table class="table table-bordered table-hover" style="background-color: #fff;">
          <thead>
            <tr>
              <th>项目名称</th>
              <th>项目来源</th>
              <th>起止日期</th>
              <th>负责人</th>
            </tr>
          </thead>
          <tbody style="font-size: 10px" v-if="info">
            <!-- <foreach name="scifruits" item="v"> -->
            <tr v-for="(item,index) in info" :key="'sci'+index">
              <td style="font-size: 13px">{{item.name}}</td>
              <td style="font-size: 13px">{{item.origin}}</td>
              <td style="font-size: 13px">{{item.data}}</td>
              <td style="font-size: 13px">{{item.duty}}</td>
            </tr>
            <!-- </foreach> -->
          </tbody>
        </table>

        <nav class="pull-right" style="margin-bottom: 10px">2</nav>
      </div>
    </div>
  </div>
</template>
<script>
import { getSciFruits1 } from "@/api/api";
// @ is an alias to /src
export default {
  name: "sciFruitRight2",
  data() {
    return {
      info:''
    };
  },
  components: {},
  created() {
    getSciFruits1().then(res => {
      this.info = res;
    });
  }
};
</script>
<style lang='less'>
</style>