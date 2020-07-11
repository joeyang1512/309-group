<template>
  <div id="app">
    <my-banners></my-banners>
    <my-aca></my-aca>
    <my-paperAndInfo></my-paperAndInfo>
  </div>
</template>

<script>
import myBanners from "@/views/Index/banners";
import myAca from "@/views/Index/academic";
import myPaperAndInfo from "@/views/Index/paperAndInfo";
export default {
  name: "xxx",
  data() {
    return {};
  },
  methods: {},
  components: {
    "my-banners": myBanners,
    "my-aca": myAca,
    "my-paperAndInfo": myPaperAndInfo
  }
};
</script>

<style lang="less" scoped>
</style>
