<template>
  <div class="footTabBar">
    <div class="box">
      <div @click = "toSEIONN" :style="tabnow=='seionn'?'border: 1px solid #fbc23d;color:#fbc23d;':''">
        清音
      </div>
      <div @click = "toDAKUONN" :style="tabnow=='dakuonn'?'border: 1px solid #fbc23d;color:#fbc23d;':''">
        浊音
      </div>
      <div @click = "toYOUONN" :style="tabnow=='youonn'?'border: 1px solid #fbc23d;color:#fbc23d;':''">
        拗音
      </div>
      <div @click = "toVideo">
        视频学习
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "foottabbar",
  props: {
    tabnow: {
      type: String
    }
  },
  methods: {
    toSEIONN: function() {
      this.$emit("switchBar", "seionn");
    },
    toDAKUONN: function() {
      this.$emit("switchBar", "dakuonn");
    },
    toYOUONN: function() {
      this.$emit("switchBar", "youonn");
    },
    toVideo: function() {
      this.$emit("toVideo");
    }
  }
};
</script>
<style scoped lang="less">
.footTabBar {
  position: fixed;
  bottom: 0;
  height: 40px;
  width: 100%;
  border-top: 1px solid #ccc;
  background-color: #d2d2d2;
  .box {
    width: 100%;
    height: 32px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-around;
    div {
      height: 28px;
      line-height: 30px;
      padding: 0 10px;
      border: 1px solid #b5b5b5;
      border-radius: 10px;
      font-size: 16px;
      color: #535353;
      background: #fff;
    }
  }
}
</style>
