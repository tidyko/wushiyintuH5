<template>
  <div class="welcome">
    <navbar></navbar>
    <div class="bg">
      <img src="@/assets/image/bg.jpg" @click="goin" alt="">
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar";
export default {
  name: "welcome",
  components: {
    navbar
  },
  methods: {
    goin: function() {
      this.$router.push("/index");
    }
  }
};
</script>
<style lang="less" scoped>
div.bg {
  width: 100%;
  img {
    width: 100%;
    vertical-align: middle;
  }
}
</style>
