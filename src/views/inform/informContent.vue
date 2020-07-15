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

      <nav class="pull-right" style="margin-bottom: 10px">2</nav>
    </div>
  </div>
</template>
<script>
import { getInform } from "@/api/api";
// @ is an alias to /src
export default {
  name: "informContent",
  data() {
    return {
      inform: []
    };
  },
  components: {},
  methods: {},
  created() {
    getInform().then(data => {
      this.inform = data;
    //   console.log(data);
    });
  }
};
</script>
<style scoped>
[v-cloak] {
  opacity: 0;
}
</style>
