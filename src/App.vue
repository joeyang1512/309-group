<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <my-header></my-header>
          <router-view></router-view>
          <my-footer></my-footer>
          <my-top></my-top>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/common/header";
import myFooter from "@/common/footer";
import myTop from "@/common/top";
export default {
  name: "xxx",
  data() {
    return {};
  },
  components: {
    "my-header": myHeader,
    "my-footer": myFooter,
    "my-top": myTop
  }
};
</script>

<style lang="less" scoped>
</style>
