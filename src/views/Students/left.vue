<template>
  <div id="app">
    <div class="col-md-3" id="left-list">
      <div class="list-group" style="text-align: center">
        <router-link :to = '{path: "/Students"}' class="list-group-item">毕业博士</router-link>
        <router-link :to = '{path: "/Students/readDoctor"}' class="list-group-item">在读博士</router-link>
        <router-link to ="/Students/gradMaster" class="list-group-item">毕业硕士</router-link>
        <router-link to ="/Students/readMaster" class="list-group-item">在读硕士</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "xxx",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less" scoped>
</style>
