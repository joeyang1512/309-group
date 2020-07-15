<template>
  <div id="app" v-cloak>
    <div class="col-md-9">
      <ul class="breadcrumb">
        <li>309</li>
        <li>研究生培养</li>
        <li>在读硕士</li>
      </ul>
      <div
        class="col-md-4"
        style="text-align: center"
        v-for="(item, index) in readMasters"
        :key="index"
      >
        <img :src="item.imgpath" class="img-thumbnail" style="width: 80%" />
        <h5>
          <router-link :to="{path:'/Students/detail',query:{cid:item.id}}">{{item.name}}</router-link>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { getReadMaster } from "@/api/api";
export default {
  name: "xxx",
  data() {
    return {
      readMasters: []
    };
  },
  created() {
    this.getMaster();
  },
  methods: {
    getMaster() {
      getReadMaster().then(data => {
        this.readMasters = data;
        for (let i = 0; i < data.length; i++) {
          this.readMasters[i].imgpath = require("@/assets/" +
            this.readMasters[i].imgpath);
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
