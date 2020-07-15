<template>
  <div id="app" v-cloak>
    <main class="col-md-12" style="background-color: #fff;margin: 10px 0;">
      <article id="111" class="post" v-if="Object.keys(detail).length">
        <div class="col-md-3">
          <h2>{{detail.name}}</h2>
          <div class="post-meta">
            <img :src='detail.imgpath' class="img-responsive" />
          </div>
        </div>
        <div class="col-md-9" style="margin-top: 20px">{{detail.content}}</div>
      </article>
    </main>
  </div>
</template>

<script>
import { getDetail } from "@/api/api";
export default {
  name: "xxx",
  data() {
    return {
        detail: {},
    };
  },
  created() {
    getDetail({ params: { cid: this.$route.query.cid } }).then(data => {
        document.title = data.name;
        this.detail = data;
        this.detail.imgpath = require('@/assets/' + data.imgpath);
    });
  },
  components: {}
};
</script>

<style lang="less" scoped>
[v-clock] {
  opacity: 0;
}
</style>
