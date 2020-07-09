<template>
  <div>
    <div class="title">
        <div @click="back"><van-icon name="arrow-left"/></div>
        <div >讲师详情</div>
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
                    <div>关注</div>
                </div>
            </div>
        </div>
    </header>

    <van-tabs v-model="active">
        <van-tab title="讲师介绍">
            <div class=banner>
                <ul>
                    <li>教学年龄</li>
                    <li>授课价格</li>
                    <li>老师简介</li>
                </ul>
                <ol>
                    <li>30年</li>
                    <li>400学习币</li>
                    <li>
                            杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。
                    </li>
                </ol>
            </div>
        </van-tab>
        <van-tab title="主要课程">
            <div class="banner1">
                <div>
                    <p class="p1">
                        每时每课特级教师-自主招生冲刺讲座10-二次函数4--存在性问题
                    </p>
                    <p class="p2">
                        共一课时
                    </p>
                    <p class="p3">
                         <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
                         <span>杨德胜</span>
                    </p>
                    <div id="bottom">
                        <span class="span1">42人已报名</span>
                        <span class="span2">免费</span>
                    </div>
                </div>
                <div>
                    <p class="p1">
                        每时每课特级教师-自主招生冲刺讲座10-二次函数4--存在性问题
                    </p>
                    <p class="p2">
                        共一课时
                    </p>
                    <p class="p3">
                         <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
                         <span>杨德胜</span>
                    </p>
                    <div id="bottom">
                        <span class="span1">42人已报名</span>
                        <span class="span2">免费</span>
                    </div>
                </div>
                <div>
                    <p class="p1">
                        每时每课特级教师-自主招生冲刺讲座10-二次函数4--存在性问题
                    </p>
                    <p class="p2">
                        共一课时
                    </p>
                    <p class="p3">
                         <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
                         <span>杨德胜</span>
                    </p>
                    <div id="bottom">
                        <span class="span1">42人已报名</span>
                        <span class="span2">免费</span>
                    </div>
                </div>
                <span></span>
            </div>
        </van-tab>
        <van-tab title="学员评价">
            <div class="banner2">
                <figure>
                    <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
                    <figcaption>暂无评论</figcaption>
                </figure>
            </div>
        </van-tab>
    </van-tabs>
    
    <button @click="jump">立即预约</button>
  </div>
</template>

<script>
import "../../assets/rem";
export default {
  name: "Teacher",
  data() {
    return {
        active:0
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
   jump(){
       this.$router.push('/yuyue')
   },
   back(){
       this.$router.go(-1)
   }
  }
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
    width: 1.25rem;
    height: 0.52rem;
    line-height: 0.52rem;
    border-radius: 0.26rem;
    font-size: 0.24rem;
    text-align: center;
    background: #ebeefe;
    color:#eb6100;
}
.banner{
    width: 7.4rem;
    height: 8rem;
    display:flex;
    padding-bottom: 0.88rem;
}
.banner>ul{
    width: 1.78rem;
    height: 8rem;
}
.banner>ul>li{
    width: 1.78rem;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    font-size: 0.26rem;
    color:#afafaf;
}
.banner>ul>li:nth-of-type(1){
    margin-top: 0.13rem;
}
.banner>ol{
    width: 5.62rem;
    height: 8rem;
}
.banner>ol>li{
    width: 5.62rem;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.26rem;
    color:#afafaf;
}
.banner>ol>li:nth-of-type(1){
    margin-top: 0.13rem;
}
.banner>ol>li:nth-of-type(3){
    width: 5.2rem;
    height: 5.6rem;
    line-height: 0.6rem;
    margin-top: 0.13rem;
}
.banner1{
    width: 7.4rem;
}
.banner1 div{
    width: 6.7rem;
    height: 4.14rem;
    border: 1px solid #f6f6f6;
    margin: 0 auto;
    margin-bottom: 0.34rem;
    border-radius: 0.2rem;
}
.banner1 div>.p1{
    margin-top: 0.48rem;
    font-size: 0.38rem;
    margin-left: 0.23rem;
}
.banner1 div>.p2{
    margin-top: 0.21rem;
    font-size: 0.2rem;
    margin-left: 0.23rem;
}
.banner1 div>.p3{
    height: 0.55rem;
    margin-top: 0.5rem;
    margin-left: 0.23rem;
    line-height: 0.55rem;
    display: flex;
    font-size: 0.24rem;
    margin-bottom: 0.24rem;
}
.banner1 div>.p3>img{
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
}.banner1 div>.p3>span{
    height: 0.55rem;
    margin-left: 0.2rem;
    color:#929292;
    display: block;
    line-height: 0.55rem;
}
.banner1 #bottom{
    width: 6.1rem;
    height: 0.8rem;
    margin-top: 0rem;
    margin-left: 0;
    border:none;
    border-radius: 0;
    margin: 0 auto;
    border-top:0.01rem solid #f6f6f6;
    display: flex;
    justify-content: space-between;
}
.banner1 #bottom .span1{
    display: block;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.2rem;
}
.banner1 #bottom .span2{
    display: block;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.33rem;
    color:#43a425;
}
.banner1>span{
    display: block;
    height: 0.8rem;
}
.banner2{
    width: 7.4rem;
    height: 4.2rem;
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
    bottom: 0;
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