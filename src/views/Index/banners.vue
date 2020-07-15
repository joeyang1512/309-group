<template>
  <div id="app" v-cloak>
    <div class="col-md-12">
      <div class="news">
        <router-link to="/News">新闻动态</router-link>
      </div>

      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
        <!-- 轮播写在这 -->
        <div class="carousel-inner" role="listbox" id="lunbo">
          <div class="item active" v-if='Object.keys(bannerFirst).length'>
            <a :href="bannerFirst.links">
              <img
                :src="require('@/assets/' + bannerFirst.imgpath)"
                alt="..."
                style="width: 100%;height:auto"
              />
            </a>
          </div>
          <div class="item" v-for="(item,index) in bannerList" :key="index">
            <a :href="item.links">
              <img
                :src="require('@/assets/' + item.imgpath)"
                alt="..."
                style="width: 100%;height:auto"
              />
            </a>
          </div>
        </div>
        <a
          class="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
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
      bannerFirst: {},
      bannerList: []
    };
  },
  created() {
    this.banners();
  },
  methods: {
    banners() {
      getIndexInfo({ params: { what: "lunbo", _: Math.random() } }).then(data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].type === '10'){
              this.bannerFirst = data[i];
              continue;
          }
          this.bannerList.push(data[i]);
        }
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
