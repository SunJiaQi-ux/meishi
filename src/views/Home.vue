<template>
  <div class="home">
    <div class="home_header">
      <div class="home_header_swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in swiperItem" :key="index">
            <img :src="item.swiper_icon" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="home_body">
      <div class="home_body_header">
        <div
          class="home_body_header_item"
          v-for="(item,index) in bodyHeaderItem"
          :key="index"
          v-on:click="onClick(index)"
        >
          <div class="home_body_header_div">
            <div class="home_body_header_img">
              <img :src="item.body_image" />
            </div>
          </div>
          <div class="home_body_header_sone">
            <p>{{item.body_name}}</p>
          </div>
        </div>
      </div>
      <div class="body_contet">
        <div class="body_content_item" v-for="(item,index) in teacherItem" :key="index">
          <div class="teacherItem">
            <p>{{item.content_tiitle}}</p>
          </div>
          <div class="teacherItem_list" v-for="(item,index) in item.content_item" :key="index" @click="jump()">
            <div class="teacherItem_image">
              <img :src="item.head_portrait" />
            </div>
            <div class="teacherItem_title">
              <div class="teacherItem_name">{{item.name}}</div>
              <div class="teacherItem_introduce">{{item.introduce}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      swiperItem: [],
      bodyHeaderItem: [],
      teacherItem: []
    };
  },
  methods: {
    onClick: function(index) {
      if (index===0) {
        this.$router.push("/course")
      }
      if (index === 1) {
        this.$router.push("/oto");
      }
      if (index === 2) {
        this.$router.push("/study");
      }
    },
    jump(){
      this.$router.push('/teacher')
    }
  },
  mounted() {
    axios.get("http://localhost:8080/home.json").then(response => {
      this.swiperItem = response.data.swiper;
      this.bodyHeaderItem = response.data.body_icon;
      this.teacherItem = response.data.body_content;
    });
  }
};
</script>


<style lang="scss" scoped>

.home {
  background-color: #f0f2f5;
}
.home_header {
  width: 100%;
  height: 4rem;
}
.my-swipe {
  width: 100%;
  height: 4rem;
}
.van-swipe-item img {
  width: 100%;
  height: 4rem;
}
.home_body {
  width: 100%;
  height: 21.6rem;
}
.home_body_header {
  width: 95%;
  height: 2.06rem;
  padding: 0 2.5%;
  position: relative;
  bottom: 0.5rem;
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.home_body_header_item {
  width: 29%;
  height: 2.06rem;
  background: #fff;
  border-radius: 15px;
}
.home_body_header_div {
  width: 100%;
  height: 0.4rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.home_body_header_img {
  width: 20%;
  height: 0.42rem;
}
.home_body_header_img img {
  width: 100%;
}
.home_body_header_sone {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  color: #8c8c8c;
  font-size: 0.26rem;
}
.home_body_header_sone p{
  position: relative;
  bottom: 0.4rem;
}
.body_contet {
  width: 95%;
  padding: 0 2.5%;
}
.body_content_item {
  width: 100%;
}
.teacherItem {
  width: 100%;
  height: 0.4rem;
  border-left: 0.04rem solid orangered;
}
.teacherItem p {
  padding-left: 0.4rem;
  font-size: 0.3rem;
}
.teacherItem_list {
  width: 91%;
  height: 1.64rem;
  padding: 0 4.5%;
  margin-bottom: 0.2rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.teacherItem_image {
  width: 13%;
  height: 0.87rem;
  border-radius: 0.4rem;
  overflow: hidden;
}
.teacherItem_image img {
  width: 100%;
  height: 100%;
}
.teacherItem_title {
  width: 77%;
  height: 0.8rem;
  padding-left: 10%;
  overflow: hidden;
}
.teacherItem_name {
  font-size: 14px;
}
.teacherItem_introduce {
  width: 100%;
  font-size: 14px;
  color: #b7b7b7;

overflow:hidden; //超出的文本隐藏
text-overflow:ellipsis; //溢出用省略号显示
white-space:nowrap; //溢出不换行
}
h5{
  font-size: 1rem;
}
</style>