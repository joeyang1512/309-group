<template>
  <div>
    <main class="col-md-12" style="background-color: #fff;margin: 10px 0;" v-if="info">
      <article id="111" class="post" style="padding:20px">
        <div class="post-head">
          <h2>{{info.title}}</h2>
          <div class="post-meta">
            <span class="author">浏览：{{info.hints}}</span> &bull;
            <span class="author">作者：{{info.writer}}</span> &bull;
            <time class="post-date">{{info.dateandtime}}</time>
          </div>
        </div>
        <div class="post-content">
          {{info.content}}
          <br />
          <br />
          <a href="{$paper.link}">{{info.link}}</a>
          <p style="margin-top: 10px">
            附件【
            <a href="__ROOT__/{$paper.loads}">{{info.title}}</a>】
          </p>
        </div>
      </article>
    </main>
  </div>
</template>
<script>
import {getlunwenDetail} from '@/api/api'
// @ is an alias to /src
export default {
  name: "chinaEngDetail",
  data() {
    return {
        info:''
    };
  },
  components: {},
  created(){
      getlunwenDetail({params:{cid:this.$route.query.id}}).then(res=>{
        //   console.log(res);
          this.info = res;
      })
  }
};
</script>
<style lang='less'>
</style>