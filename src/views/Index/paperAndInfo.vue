<template>
  <div id="app">
    <div class="col-md-4">
      <div class="news">
        <router-link to='/writings?tid=2'>中文论文</router-link>
      </div>
      <div
        style="width: 100%;height: 235px;background-color:#fff;border-top: 1px solid rgba(36, 139, 210, 0.9);"
      >
        <ul class="inform" id="chinaPaper">
          <!-- 中文论文数据 -->
          <li v-for='(item,index) in chinaPaper' :key='index'>
              <a :href="item.href">{{item.title.slice(0, 23)}}...</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-4">
      <div class="news">
        <router-link to='/writings?tid=3'>英文论文</router-link>
      </div>
      <div
        style="width: 100%;height: 235px;background-color:#fff;border-top: 1px solid rgba(36, 139, 210, 0.9);"
      >
        <ul class="inform" id="englishPaper">
          <!-- 英文论文数据 -->
          <li v-for='(item,index) in englishPaper' :key='index'>
              <a :href="item.href">{{item.title.slice(0, 28)}}...</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-4">
      <div class="news" style="background: none;background-color: #f8b300">
        <router-link style="color: white" to="/inform">通知公告</router-link>
      </div>
      <div style="width: 100%;height: 235px;background-color:#f8b300;border-top: 1px solid #f8b300">
        <ul class="inform" id="info">
          <!-- 通知公告数据 -->
          <li v-for='(item,index) in infoList' :key='index'>
              <a style="color: white" :href="item.href">{{item.title.slice(0, 23)}}...</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getIndexInfo } from "@/api/api";
import writingDetail from "../writings/writingDetail.vue";
export default {
  name: "xxx",
  data() {
    return {
        infoList: [],
        englishPaper: [],
        chinaPaper: []
    };
  },
  created() {
    this.engPaper();
    this.info();
  },
  methods: {
    engPaper() {
        getIndexInfo({ params: { what: "paper", _: Math.random() } }).then(data => {
            for(let i = 0; i < data.length; i++) {
                data[i].href = 'http://localhost/309/index.php/Writings/details/cid/' + data[i].id;
                if(data[i].type === "0") {
                    this.chinaPaper.push(data[i]);
                }else{
                    this.englishPaper.push(data[i]);
                }
            }      
        });
    },
    info() {
        getIndexInfo({ params: { what: "info", _: Math.random()} }).then(data => {
             this.infoList = data;
             for(let i = 0; i < data.length; i++){
                 this.infoList[i].href = 'http://localhost/309/index.php/Affairs/details/cid/' + data[i].infoid;
             }             
        })
     },
    fn(id,ev) {
      document.querySelectorAll('.list-group-item').forEach(item=>{item.className = 'list-group-item'});
      this.id = id;
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
</style>
