<template>
  <div class="index">
    <div :class="popup?'indexfilter':''">
      <navbar></navbar>
      <div class="content">
        <div class="content-item-box" :class="tabnow" v-for="(item, index) in allData[tabnow]" :key="index">
          <div class="content-item" :style="item.roomaji?'':'border:1px solid transparent'" @click.stop="preview(item.hiragana,item.katakana,item.roomaji)">
            <div>{{item.roomaji}}</div>
            <div>{{alias=="あ"?item.hiragana:item.katakana}}</div>
          </div>
        </div>
      </div>
      <footTabBar :tabnow='tabnow' @switchBar="switchBar" @toVideo="toVideo"></footTabBar>
      <div class="switchAlias" @click="switchAlias">
        <div :style="alias=='あ'?'background: #fbc23d;':''">あ</div>
        <div :style="alias=='ア'?'background: #fbc23d;':''">ア</div>
      </div>
    </div>
    <!-- 演示popup开始 -->
    <transition name="show">
      <div class="popup" v-show="popup">
        <img src="@/assets/image/error.png" @click="closePop" class="close">
        <div class="head">
            <div class="current-text">{{selText}}</div>
            <div class="text-detail">
              <div class="detail-top">
                <div><img src="@/assets/image/soun.png" @click="playAudio"></div>
                <div>{{selText1}}</div>
                <div>|</div>
                <div>{{duyin}}</div>
              </div>
              <div class="detail-bottom">
                <img :src="tabnow=='seionn'&&selText?'http://riyubao.net/sound/public/static/image/'+selText+'.png':''">
              </div>
            </div>
        </div>
        <div class="explame">[ 书写示范 ] <img src="@/assets/image/go.png" @click="change"></div>
        <div class="gif">
          <img v-show="read" :src="tabnow=='seionn'&&selText?'https://riyubao.net/image/'+selText+'.gif':''">
          <img v-show="!read" :src="tabnow=='seionn'&&selText?'https://riyubao.net/image/'+selText+' - 副本.jpg':''">
        </div>
      </div>
    </transition>
    <!-- 结束 -->
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
      alias: "あ",
      selText: "",
      selText1: "",
      duyin: "",
      popup: false,
      read: true
    };
  },
  components: {
    navbar,
    footTabBar
  },
  methods: {
    toVideo: function() {
      this.$router.push("/video");
    },
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
      audio.src = `https://riyubao.net/mp3/${this.selText}.mp3`;
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    },
    preview: function(h, hi, ro) {
      if (this.alias == "あ") {
        this.selText = h;
        this.selText1 = hi;
        this.duyin = ro;
      } else {
        this.selText = hi;
        this.selText1 = h;
        this.duyin = ro;
      }
      if (this.tabnow == "seionn") {
        this.popup = true;
      }
      this.$nextTick(() => {
        this.playAudio();
      });
    },
    closePop: function() {
      this.popup = false;
    },
    change: function() {
      console.log(1);
      this.read = !this.read;
    }
  }
};
</script>
<style lang="less" scoped>
.indexfilter {
  filter: blur(10px);
}
.content {
  padding: 6px 0;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 100px;
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
    .content-item:active {
      background: #fbc23d;
      color: #fff;
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
.popup {
  width: 80%;
  height: 55%;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  .close {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .head {
    overflow: hidden;
    height: 80px;
    .current-text {
      float: left;
      font-size: 60px;
      width: 30%;
      line-height: 80px;
      text-align: center;
    }
    .text-detail {
      float: left;
      width: 70%;
      height: 100%;
      text-align: left;
      .detail-top {
        overflow: hidden;
      }
      .detail-top > div {
        float: left;
        margin-right: 10px;
        height: 100%;
        line-height: 40px;
        img {
          vertical-align: middle;
          width: 20px;
        }
      }
    }
    .text-detail > div {
      height: 50%;
    }
  }
  .explame {
    text-align: left;
    margin: 20px 0;
    img {
      vertical-align: middle;
      width: 20px;
    }
  }
  .gif > img {
    width: 150px;
  }
}
.show-enter-active {
  left: -100%;
  transition: all 0.5s;
}
.show-enter-to {
  left: 50%;
  transition: all 0.5s;
}
.show-leave-active {
  left: -100%;
  transition: all 0.5s;
}
</style>
