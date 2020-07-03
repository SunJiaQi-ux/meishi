<template>
  <div>
      <div class="title">
        <div><van-icon name="arrow-left" @click="back"/></div>
        <div>视频</div>
        <div></div>
    </div>

    <div class="video">
        <video src="http://dal4jd-video.baijiayun.com/5ac17c9a607128c1406f1ff1c84b7135/5eff0474/00-x-upload/video/30929276_928a9308d830ef5808d4be39138103a3_FeVGFViV.mp4?uuid=uuid-360acd6b-832a-ab90-5235-c7ac9e91047c"
                poster="https://img.baijiayun.com/00-x-upload/image/30929276_3c5f1ba008d13a0caabfe3bbcf90de43_bCfw9hXy.jpg"
                autoplay controls
        ></video>
    </div>
  </div>
</template>

<script>
import '../../assets/rem.js'
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
      back(){
          this.$router.go(-1)
      }
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.title {
    width: 7.4rem;
    height: 1rem;
    line-height: 1rem;
    // background: #5ca6f6;
    display: flex;
    font-size: 0.36rem;
    border-bottom:0.01rem #ddd solid ;
    justify-content: space-between;
}
.title>div:nth-of-type(1){
    width: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title>div:nth-of-type(3){
    width: 1rem;
}
.video{
    width: 7.4rem;
    video{
        width: 7.4rem;
    }
}
</style>