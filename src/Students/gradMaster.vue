<template>
  <div id="app" v-cloak>
    <div class="col-md-9">
      <ul class="breadcrumb">
        <li>309</li>
        <li>研究生培养</li>
        <li>毕业硕士</li>
      </ul>
      <div class="col-md-4" style="text-align: center" v-for="(item, index) in gradMasters" :key='index'>
        <img :src='item.imgpath' class="img-thumbnail" style="width: 80%" />
        <h5>
          <a :href="item.href">{{item.name}}</a>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { getGradMaster } from "@/api/api";
export default {
  name: "xxx",
  data() {
    return {
       gradMasters: [],
    };
  },
  created(){
    this.gradMaster();
  },
  methods:{
    gradMaster(){
      getGradMaster().then(data=>{
        this.gradMasters = data;
        for(let i = 0; i < data.length; i++){
          this.gradMasters[i].imgpath = require('@/assets/' + this.gradMasters[i].imgpath);
          this.gradMasters[i].href = 'http://localhost:8081/#/Students/detail?cid=' + this.gradMasters[i].id;
        }
      })
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
