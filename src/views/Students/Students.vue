<template>
  <div id="app">
    <my-left></my-left>
    <router-view></router-view>
  </div>
</template>

<script>
import left from "./left";
export default {
  name: "xxx",
  data() {
    return {};
  },
  components: {
    "my-left": left
  }
};
</script>

<style lang="less" scoped>
</style>
