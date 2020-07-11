<template>
  <div id="app" v-cloak>
    <footer id="footer" class="col-md-12">
      <div class="footer">
        <div class="col-md-5">
          <p style="color: #fff">联系我们</p>
          <ul class="list-unstyled" id="otherInfo">
            <li v-for='(item, index) in infoName' :key='index'>
               {{item[1] + ': ' + info[item[0]]}}
            </li>
          </ul>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <p style="color: #fff">友情链接</p>
          <ul class="list-unstyled">
            <li>
              <a href="http://www.csu.edu.cn/" target="_blank">中南大学</a>
            </li>
            <li>
              <a href="http://mpb.csu.edu.cn/" target="_blank">中南大学资生院</a>
            </li>
          </ul>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3" id="erweima">
          <p style="color: #fff">官方微信公众号</p>
          <img :src='qrCode' class="img-responsive">
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { getOtherInfo, getEWM } from "@/api/api";
export default {
  name: "xxx",
  data() {
    return {
      info: "",
      infoName: [["address", "地址"], ["code", "邮编"], ["phone", "电话"], ["fax", "传真"], ["email","邮箱"]],
      qrCode: ''
    };
  },
  created() {
    this.otherInfo();
    this.erweima();
  },
  methods: {
    otherInfo() {
      getOtherInfo({ params: { what: "otherInfo", _: Math.random() } }).then(
        data => {
          this.info = data[0];
        }
      );
    },
    erweima(){
      getEWM({params: {what: 'erweima'}}).then(data=>{
        this.qrCode = require('@/assets/' + data[0].imgpath);        
      });
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
  [v-clock]{
    opacity: 0;
  }
</style>
