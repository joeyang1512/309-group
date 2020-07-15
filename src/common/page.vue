<template>
  <div id="app">
    <nav class="pull-right" style="margin-bottom: 10px">
      <!-- <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
      ></el-pagination>-->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
      ></el-pagination>
    </nav>
  </div>
</template>


<script>
export default {
  name: "xxx",
  props: ["total", "pageSize"],
  data() {
    return {};
  },
  mounted() {
    this.handleCurrentChange();
  },
  methods: {
    handleCurrentChange(e) {
      this.$parent.handleCurrentChange(e);
    }
  },
  components: {}
};

//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
</script>

<style lang="less" scoped>
</style>
