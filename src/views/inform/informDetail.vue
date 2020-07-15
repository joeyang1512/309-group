<template>
  <div>
    <main class="col-md-12" style="background-color: #fff;margin: 10px 0;">
      <article id="111" class="post" v-if="detail" style="padding:10px">
        <div class="post-head">
          <h2>{{detail.title}}</h2>
          <div class="post-meta">
            <span class="author">浏览：{{detail.hints}}</span> &bull;
            <time class="post-date">{{detail.dateandtime.slice(0,11)}}</time>
          </div>
        </div>
        <div class="post-content">{{detail.content}}</div>
      </article>
    </main>
  </div>
</template>
<script>
import {getInformDetails} from '@/api/api'
// @ is an alias to /src
export default {
  name: "informDetail",
  data() {
    return {
        detail:''
    };
  },
  components: {},
  created() {
    getInformDetails({params:{cid:this.$route.query.id}}).then(res=>{
        // console.log(res);
        this.detail = res;
    });
  }
};
</script>
<style lang='less'>
</style>