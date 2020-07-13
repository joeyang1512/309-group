<template>
  <div id="app" v-cloak>
    <div class="col-md-12">
      <div class="news">
        <a href="http://localhost/309/index.php/Academic/index">更多学术交流</a>
      </div>
      <div
        style="width: 100%;height: auto;border-top: 1px solid rgba(36, 139, 210, 0.9);"
        id="academic"
      >
        <div
          v-for="(item,index) in academic"
          :key="index"
          class="col-md-4"
          style="text-align: center;background-color:#fff"
        >
          <a class="acaImages" :href="item.href">
            <img
              v-if="isScroll === 0"
              style="width: 90%;margin-bottom: 10px;height: 180px; background-color: rgb(248, 247, 247);"
            />
            <img
              v-else
              :src="require('@/assets/' + item.imgpath)"
              style="width: 90%;margin-bottom: 10px;height: 180px; background-color: rgb(248, 247, 247);"
            />
            <br />
          </a>
          <a :href="item.href">{{item.title.slice(0, 14)}}...</a>
          <p>{{item.dateandtime.slice(0, 10)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getIndexInfo } from "@/api/api";
export default {
  name: "xxx",
  data() {
    return {
      academic: [],
      isScroll: 0
    };
  },
  created() {
    this.Aca();
  },
  computed: {
    
  },
  mounted() {
    function fn1() {
      if (getScrollTop() > 200) {
        if (this.obj) {
          if (this.obj.hasOwnProperty("isScroll")) this.obj.isScroll = 1;
        }
        window.removeEventListener("scroll", fn1);
      }
    }
    window.addEventListener("scroll", fn1);
  },
  methods: {
    Aca() {
      getIndexInfo({ params: { what: "academic", _: Math.random() } }).then(data => {
        this.academic = data;
        for (let i = 0; i < this.academic.length; i++) {
          this.academic[i].href =
            "http://localhost/309/index.php/Academic/details/cid/" +
            this.academic[i].id;
        }
        window.obj = this;
      });
    }
  }
};
</script>

<style lang="less" scoped>
[v-clock] {
  opacity: 0;
}
</style>
