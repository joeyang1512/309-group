<template>
  <div id="app" v-cloak>
    <div class="col-md-9">
      <ul class="breadcrumb">
        <li>309</li>
        <li>研究生培养</li>
        <li>毕业博士</li>
      </ul>
      <div
        class="col-md-4"
        style="text-align: center"
        v-for="(item, index) in gradDoctor"
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
import { getStudentInfo } from "@/api/api";
export default {
  name: "xxx",
  data() {
    return {
      gradDoctor: []
    };
  },
  created() {
    this.getDoctor();
  },
  methods: {
    getDoctor() {
      getStudentInfo().then(data => {
        this.gradDoctor = data;
        for (let i = 0; i < data.length; i++) {
          this.gradDoctor[i].imgpath = require("@/assets/" +
            this.gradDoctor[i].imgpath);
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
