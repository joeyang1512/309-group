<template>
  <div>
    <!--右侧-->
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
              <th>成果名称</th>
              <th>奖励级别</th>
              <th>年度</th>
              <th>完成人</th>
            </tr>
          </thead>
          <tbody style="font-size: 10px" v-if="info">
            <!-- <foreach name="scirews" item="v"> -->
              <tr v-for="(item,index) in info" :key="'sci'+index">
                <td style="font-size: 13px">{{item.name}}</td>
                <td style="font-size: 13px">{{item.level}}</td>
                <td style="font-size: 13px">{{item.year}}</td>
                <td style="font-size: 13px">{{item.endman}}</td>
              </tr>
            <!-- </foreach> -->
          </tbody>
        </table>

        <!-- <nav class="pull-right" style="margin-bottom: 10px">2</nav> -->
      </div>
    </div>
    <!--end-->
  </div>
</template>
<script>
import { getSciFruits2 } from "@/api/api";
// @ is an alias to /src
export default {
  name: "sriFruitRight",
  data() {
    return {
      info:''
    };
  },
  components: {},
  created(){
    getSciFruits2().then(res=>{
      this.info = res;
    })
  }
};
</script>
<style lang='less'>
</style>