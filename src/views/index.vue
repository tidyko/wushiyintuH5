<template>
  <div class="index">
    <navbar></navbar>
    <div class="content">
      <div class="content-item-box" :class="tabnow" v-for="(item, index) in allData[tabnow]" :key="index">
        <div class="content-item" :style="item.roomaji?'':'border:1px solid transparent'">
          <div>{{item.roomaji}}</div>
          <div>{{alias=="あ"?item.hiragana:item.katakana}}</div>
        </div>
      </div>
    </div>
    <footTabBar :tabnow='tabnow' @switchBar="switchBar"></footTabBar>
    <div class="switchAlias" @click="switchAlias">
      <div :style="alias=='あ'?'background: #fbc23d;':''">あ</div>
      <div :style="alias=='ア'?'background: #fbc23d;':''">ア</div>
    </div>
    <audio src=""></audio>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import footTabBar from "@/components/footTabBar.vue";
import { seionn, dakuonn, youonn } from "@/data.js";
export default {
  name: "index",
  data() {
    return {
      allData: {
        seionn,
        dakuonn,
        youonn
      },
      tabnow: "seionn",
      alias: "あ"
    };
  },
  components: {
    navbar,
    footTabBar
  },
  methods: {
    switchBar: function(val) {
      this.tabnow = val;
    },
    switchAlias: function() {
      if (this.alias == "あ") {
        this.alias = "ア";
      } else {
        this.alias = "あ";
      }
    },
    playAudio: function() {
      let audio = document.getElementsByTagName("audio")[0];
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  padding: 6px 0;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 100px;
  overflow: hidden;
  .content-item-box {
    width: 20%;
    float: left;
    margin-bottom: 10px;
    height: 40px;
    .content-item {
      width: 85%;
      text-align: center;
      font-size: 14px;
      margin: 0 auto;
      border: 1px solid rgb(100, 99, 99);
      border-radius: 10px;
    }
  }
  .content-item-box.youonn {
    width: 33%;
    float: left;
    margin-bottom: 10px;
    height: 40px;
    .content-item {
      width: 90%;
      height: 100%;
      text-align: center;
      font-size: 14px;
      margin: 0 auto;
      border: 1px solid rgb(100, 99, 99);
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      div {
        height: 100%;
        line-height: 40px;
      }
    }
  }
}
.switchAlias {
  position: fixed;
  bottom: 50px;
  right: 10px;
  background: #d2d2d2;
  div {
    float: left;
    height: 28px;
    width: 30px;
    color: #fff;
    line-height: 28px;
  }
}
</style>
