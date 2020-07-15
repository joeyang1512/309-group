<template>
  <div>
    <main class="col-md-12" style="background-color: #fff;margin: 10px 0;" v-if="info">
      <article id="111" class="post">
        <div class="col-md-3">
          <h2>{{info.name}}</h2>
          <div class="post-meta">
              <!-- src="../../public/picture/booksIcon/5bd9aa430b72a.jpg"  -->
            <img class="img-responsive" :src="require('@/assets/'+info.imgpath)"/>
          </div>
        </div>
        <div class="col-md-9" style="margin-top: 20px">
          <span
            style="color: rgb(17, 17, 17); font-family: Helvetica, Arial, sans-serif; font-size: 13px; text-indent: 26px;"
          >&nbsp; &nbsp; &nbsp;{{info.content}}</span>
        </div>
      </article>
    </main>
  </div>
</template>
<script>
import {getTeacherDetail} from '@/api/api';
// @ is an alias to /src
export default {
  name: "indexDetail",
  data() {
    return {
        info:''
    };
  },
  components: {},
  created(){
      getTeacherDetail({params:{cid:this.$route.query.id}}).then(res=>{
          this.info = res;
      })
  }
};
</script>
<style lang='less'>
</style>