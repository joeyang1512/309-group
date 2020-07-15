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
          <router-link :to="{path:'/Students/detail',query:{cid:item.id}}">{{item.name}}</router-link>
        </h5>
      </div>
    </div>
    <my-page :total="total" :pageSize="pageSize" @func="fn"></my-page>
  </div>
</template>

<script>
import { getReadDoctor } from "@/api/api";
import page from "@/common/page";
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
  },
  methods: {
    getDoctor() {
      this.fn(1);
    },
    fn(pid) {
      getReadDoctor({ params: { pid: pid } }).then(data => {
        this.readDoctor = data;
        this.total = Number(this.readDoctor[0]);
        this.readDoctor.shift();
        for (let i = 0; i < this.readDoctor.length; i++) {
          this.readDoctor[i].imgpath = require("@/assets/" +
            this.readDoctor[i].imgpath);
        }
      });
    }
  },
  components: {
    "my-page": page
  }
};
</script>

<style lang="less" scoped>
[v-clock] {
  opacity: 0;
}
</style>
