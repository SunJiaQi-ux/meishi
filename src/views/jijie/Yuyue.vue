<template>
  <div>

      <div class="title">
        <div><van-icon name="arrow-left" /></div>
        <div>预约课程</div>
        <div></div>
    </div>

    <header>
        <div class="header"></div>
        <div class="empty"></div>
        <div class="main">
            <div class="div">
                <div class="left">
                    <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
                    <div>
                        <p class="p1">杨德胜<span>M20</span></p>
                        <p class='p2'>男 30年教龄</p>
                    </div>
                </div>
                <div class="right">
                    <div>查看详情</div>
                </div>
            </div>
        </div>
    </header>

    <div class="center">
        <div class="fir">
          <div></div>
          <p>
            选择时间<span>(北京时间)</span>
          </p>
        </div>

        <div class="time">
            <van-tabs v-model="active">
                <van-tab title="周一">
                   <div class="banner2">
                      <figure>
                          <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
                          <figcaption>暂无评论</figcaption>
                      </figure>
                  </div>
                </van-tab>
                <van-tab title="周二"></van-tab>
                <van-tab title="周三"></van-tab>
                <van-tab title="周四"></van-tab>
                <van-tab title="周五"></van-tab>
                <van-tab title="周六"></van-tab>
                <van-tab title="周七"></van-tab>
                <van-tab title="周一"></van-tab>
                <van-tab title="周二"></van-tab>
                <van-tab title="周三"></van-tab>
                <van-tab title="周四"></van-tab>
                <van-tab title="周五"></van-tab>
                <van-tab title="周六"></van-tab>
                <van-tab title="周七"></van-tab>
            </van-tabs>
        </div>
    </div>

    <button>立即预约</button>
  </div>
</template>

<script>
import "../../assets/rem";
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
body,html{
    font-size: 0.16rem;
    background: #000;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
header{
    position: relative;
}
.header {
  width: 7.4rem;
  background: #5ca6f6;
  height: 1rem;
}
.title {
    width: 7.4rem;
    height: 1rem;
    line-height: 1rem;
    background: #5ca6f6;
    color:white;
    display: flex;
    font-size: 0.36rem;
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
.empty{
    width: 7.4rem;
    height: 0.94rem;
    background: #f0f2f5;
}
.main{
    position: absolute;
    top: 0;
    left: 0.2rem;
    width: 7rem;
    height: 1.8rem;
    background: #ffffff;
    border-radius: 0.1rem;
    display: flex;
    justify-content: center;
}
.div{
    width: 6.37rem;
    height: 0.9rem;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
}
.left{
    width: 2.5rem;
    height: 0.9rem;
    /* background: #ddd; */
    display: flex;
}
.left>img{
    width: 0.82rem;
    height: 0.82rem;
    border-radius: 50%;
}
.left>div>.p1{
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    font-size: 0.3rem;
}
.left>div>.p2{
    font-size: 0.2rem;
    margin-left: 0.1rem;
}
.left>div>.p1>span{
    font-size: 0.2rem;
    color:#eb6100
}
.right{
    width: 1.25rem;
    height: 0.9rem;
    /* background: #ddd; */
    display: flex;
    align-items: center;
}
.right>div{
    width: 1.55rem;
    height: 0.52rem;
    line-height: 0.52rem;
    border-radius: 0.26rem;
    font-size: 0.24rem;
    text-align: center;
    border: 1px solid #f8ccae;
    color:#eb6100;
}
.center{
  width: 7.4rem;
  height: 9.2rem;
  background: #f0f2f5;
}
.center>.fir{
  width: 6.88rem;
  height: 0.8rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.center>.fir>div{
  width: 0.08rem;
  height: 0.32rem;
  background: #eb6100;
}
.center>.fir>p{
  margin-left: 0.19rem;
  font-size: 0.32rem;
}
.center>.fir>p>span{
  margin-left: 0.2rem;
  font-size: 0.2rem;
}
.center>.time{
  width: 6.88rem;
  height: 1.4rem;
  background: #ffffff;
  margin: 0 auto;
  border-radius: 0.1rem;
}
.van-tab{
  height: 1.4rem;
}
.banner2{
    width: 7.4rem;
    height: 7.3rem;
    display: flex;
    justify-content: space-around;
}
.banner2 img{
    width:3.2rem;
    height: 3.2rem;
}
.banner2>figure>figcaption{
    font-size: 0.32rem;
    margin-top: 0.2rem;
    text-align: center;
}
button{
    position: fixed;
    left: 0;
    width: 7.4rem;
    height: 0.88rem;
    background: #eb6100;
    border:none;
    border: 1px solid #eb6100;
    font-size: 0.32rem;
    color:white;
}
</style>