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
        this.$emit('func', e);
    }
  },
  components: {}
};

</script>

<style lang="less" scoped>
</style>
