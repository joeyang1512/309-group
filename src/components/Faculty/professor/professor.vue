<template>
  <div id="app" v-cloak>
    <div class="col-md-9">
      <ul class="breadcrumb">
        <li>309</li>
        <li>研究生培养</li>
        <li>在读博士</li>
      </ul>
      <div class="col-md-4" style="text-align: center" v-for="(item,key) in itemList" :key="key">
        <img :src="require('@/assets/'+item.imgpath)" class="img-thumbnail" style="width: 80%" />
        <h5>
          <router-link
            :to="{path:'/professorDetails/id',query:{id:item.id,title:item.name}}"
          >{{item.name}}</router-link>
        </h5>
      </div>
    </div>
    <nav class="pull-right" style="margin-bottom: 10px">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        v-if="itemList"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </nav>
  </div>
</template>

<script>
import { getProfessor } from "@/api/api";
export default {
  name: "professor",
  data() {
    return {
      itemList: [],
      total: 0,
      pageSize: 3
    };
  },
  created() {
    this.handleCurrentChange();
  },
  methods: {
    handleCurrentChange(e) {
      getProfessor({
        params: {
          pid: e
        }
      }).then(res => {
        this.total = Number(res[0]);
        res.shift();
        this.itemList = res;
        // console.log(this.itemList);
      });
    }
  }
};
</script>
