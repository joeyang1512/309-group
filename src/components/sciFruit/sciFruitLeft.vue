<template>
  <div>
    <div class="col-md-3" id="left-list">
      <div class="list-group" style="text-align: center">
        <a @click="fn(1,$event)" style="cursor:pointer;" class="list-group-item active">科研项目</a>
        <a @click="fn(2,$event)" style="cursor:pointer;" class="list-group-item">科研奖励</a>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "sriFruitLeft",
  data() {
    return {};
  },
  created(){
      this.$router.push({ name: `fruitRight1` });
  },
  methods: {
    fn(id, ev) {
      document.querySelectorAll(".list-group-item").forEach(item => {
        item.className = "list-group-item";
      });
    //   console.log(ev);
      ev.target.className = "list-group-item active";
      this.$router.push({ name: `fruitRight${id}` });
    }
  },
  components: {}
};
</script>
<style lang='less'>
</style>