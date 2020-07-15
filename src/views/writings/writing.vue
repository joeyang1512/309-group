<template>
  <div>
    <div class="col-md-3" id="left-list">
      <div class="list-group" style="text-align: center" id="yx">
        <a class="list-group-item active" style="cursor: pointer;" @click="fn(1,$event)">出版著作</a>
        <a class="list-group-item" style="cursor: pointer;" @click="fn(2,$event)">中文论文</a>
        <a class="list-group-item" style="cursor: pointer;" @click="fn(3,$event)">英文论文</a>
        <a class="list-group-item" style="cursor: pointer;" @click="fn(4,$event)">授权、申请专利</a>
      </div>
    </div>
    <writing-detail :id="id"></writing-detail>
  </div>
</template>
<script>
import writingDetail from "./writingDetail.vue";
// @ is an alias to /src
export default {
  name: "wrintingIndex",
  data() {
    return {
      id: 1
    };
  },
  components: {
    "writing-detail": writingDetail
  },
  mounted() {
    if (this.$route.query.tid === "2") {
      document.querySelectorAll(".list-group-item").forEach((item, index) => {
        if (index === 1) {
          item.className = "list-group-item active";
        } else {
          item.className = "list-group-item";
        }
      });
      this.id = 2;
    }
    if (this.$route.query.tid === "3") {
      document.querySelectorAll(".list-group-item").forEach((item, index) => {
        if (index === 2) {
          item.className = "list-group-item active";
        } else {
          item.className = "list-group-item";
        }
      });
      this.id = 3;
    }
  },
  methods: {
    fn(id, ev) {
      document.querySelectorAll(".list-group-item").forEach(item => {
        item.className = "list-group-item";
      });
      ev.target.className = "list-group-item active";
      this.id = id;
    }
  }
};
</script>
<style lang='less'>
</style>