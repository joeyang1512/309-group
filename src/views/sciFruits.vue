<template>
  <div>
      <scifruitleft></scifruitleft>
      <router-view></router-view>
  </div>
</template>
<script>
import scifruitleft from '@/components/sciFruit/sciFruitLeft.vue';
// @ is an alias to /src
export default {
  name: "sciFruits",
  data() {
    return {};
  },
  components: {
      scifruitleft
  }
};
</script>
<style lang='less'>
</style>