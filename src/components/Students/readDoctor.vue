<template>
  <div id="app" v-cloak>
    <div class="col-md-9">
      <ul class="breadcrumb">
        <li>309</li>
        <li>研究生培养</li>
        <li>在读博士</li>
      </ul>
      <div
        class="col-md-4"
        style="text-align: center"
        v-for="(item, index) in readDoctor"
        :key="index"
      >
        <img :src="item.imgpath" class="img-thumbnail" style="width: 80%" />
        <h5>
          <a :href="item.href">{{item.name}}</a>
        </h5>
      </div>
    </div>
    <nav class="pull-right" style="margin-bottom: 10px">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
      ></el-pagination>
    </nav>
  </div>
</template>

<script>
import { getReadDoctor } from "@/api/api";
export default {
  name: "xxx",
  data() {
    return {
      readDoctor: [],
      total: 0,
      pageSize: 3
    };
  },
  created() {
    this.getDoctor();
    this.handleCurrentChange();
  },
  // beforeUpdate() {
  //   this.total = Number(this.readDoctor[0]);
  //   this.readDoctor.shift();
  // },
  methods: {
    getDoctor() {
      this.fn(1);
    },
    handleCurrentChange(e) {
      this.fn(e);
    },
    fn(pid) {
      getReadDoctor({ params: { pid: pid } }).then(data => {
        this.readDoctor = data;
        this.total = Number(this.readDoctor[0]);
        this.readDoctor.shift();
        console.log(this.readDoctor);
        for (let i = 0; i < this.readDoctor.length; i++) {
          this.readDoctor[i].imgpath = require("@/assets/" +
            this.readDoctor[i].imgpath);
          this.readDoctor[i].href =
            "http://localhost:8081/#/Students/detail?cid=" +
            this.readDoctor[i].id;
        }
      });
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
[v-clock] {
  opacity: 0;
}
</style>
