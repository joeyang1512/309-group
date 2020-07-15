<template>
  <div>
    <div class="table-responsive" style="margin-top: 10px">
      <table class="table table-bordered table-hover" style="background-color: #fff;">
        <tbody style="font-size: 10px" v-cloak>
          <!-- <foreach name="info" item="v"> -->
          <tr v-for="(item,index) in inform" :key="'inform'+index">
            <td>
              <router-link
                :to="{path:'/details/id',query:{id:item.infoid}}"
                style="font-size: 13px"
              >{{item.title}}</router-link>
            </td>
            <td style="font-size: 13px">{{item.dateandtime.slice(0,11)}}</td>
          </tr>
          <!-- </foreach> -->
        </tbody>
      </table>
      <my-page :total="total" :pageSize="pageSize" @func="fn"></my-page>
    </div>
  </div>
</template>
<script>
import { getInform } from "@/api/api";
import page from "@/common/page";
// @ is an alias to /src
export default {
  name: "informContent",
  data() {
    return {
      inform: [],
      total: 0,
      pageSize: 1
    };
  },
  components: {
    "my-page": page
  },
  methods: {
    getInfo(){
      this.fn(1);
    },
    fn(pid) {
      getInform({ params: { pid: pid } }).then(data => {
        this.inform = data;
        this.total = Number(this.inform[0]);
        this.inform.shift();
      });
    }
  },
  created() {
    this.getInfo();
  }
};
</script>
<style scoped>
[v-cloak] {
  opacity: 0;
}
</style>
