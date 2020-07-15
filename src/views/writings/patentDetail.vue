<template>
  <div >
    <main class="col-md-12" style="background-color: #fff;margin: 10px 0;">
      <article id="111" class="post" v-if="info">
        <div class="post-head">
          <h2>{{info.name}}</h2>
        </div>
        <div class="post-content">
          {{info.content}}
          <br />
          <br />
        </div>
      </article>
    </main>
  </div>
</template>
<script>
import {getPatentDetail} from '@/api/api'
// @ is an alias to /src
export default {
  name: "patentDetail",
  data() {
    return {
        info:''
    };
  },
  components: {},
  created(){
      getPatentDetail({params:{pid:this.$route.query.id}}).then(res=>{
          document.title = res.name;
          this.info = res;
      })
  }
};
</script>
<style lang='less'>
</style>