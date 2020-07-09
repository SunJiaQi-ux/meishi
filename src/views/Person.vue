<template>
    <div class="person">
        <header>
            <div class="head-nei"></div>
            
            <div class="head-one">
                <div class="one-one">
                    <div class="foot-one1">
                        <img class="av-img" src="../assets/mym_img/av.jpg" alt="">
                            <span class="span1" @click="goMp">17316213304</span>
                        <img class="av-img2" src="../assets/mym_img/huangguan.jpg" alt="">
                    </div>
                    <div class="foot-two1">
                        <p class="one-p" @click="goOto">去约课</p>
                    </div>
                </div>
                <div class="one-two">
                    <div class="foot-one" @click="goStudy">
                        <h3 class="two-h3">10</h3>
                        <p>我的特色课</p>
                        <h5 class="two-h5">-已购课程学习-</h5>
                    </div>
                    <div class="foot-one" @click="goYueke">
                        <h3 class="two-h3">5</h3>
                        <p>一对一辅导</p>
                        <h5 class="two-h5">-一对一老师预约-</h5>
                    </div>
                    <div class="foot-one" @click="goBalance">
                        <h3 class="two-h3">0</h3>
                        <p>剩余学习币</p>
                        <h5 class="two-h5">-查看剩余学习币-</h5>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="nav">
                <img class="nav-img" src="../assets/mym_img/nav.jpg" alt="">
            </div>
        </section>
        <footer>
            <div class="foot-one">
                <h4>课程相关</h4>
                <div class="foot-div">
                    <div @click="goLs">
                        <van-icon name="user-o" color="#FF944B" size="30px" />
                        <p >关注的老师</p>
                    </div>
                    <div  @click="goSc">
                        <van-icon name="bars" color="#FF944B" size="30px" />
                        <p>我的收藏</p>
                    </div>
                </div>
            </div>
            <div class="foot-two">
                <h4>订单相关</h4>
                <div class="foot-div">
                    <div @click="goDd">
                        <van-icon name="bill" color="#FC5500" size="30px" />
                        <p>课程订单</p>
                    </div>
                    <div @click="hydd">
                        <van-icon name="bill" color="#FC5500" size="30px" />
                        <p>会员订单</p>
                    </div>
                    <div @click="ykdd">
                        <van-icon name="bill" color="#FC5500" size="30px" />
                        <p>约课订单</p>
                    </div>
                </div>
            </div>
            <div class="foot-three">
                <h4>我的账户</h4>
                <div class="foot-div">
                    <div @click="yhq">
                        <van-icon name="gold-coin-o" color="#FFAF00" size="30px" />
                        <p>优惠券</p>
                    </div>
                    <div @click="xxk">
                        <van-icon name="gold-coin-o" color="#FFAF00" size="30px" />
                        <p>学习卡</p>
                    </div>
                    <div @click="hy">
                        <van-icon name="gold-coin-o" color="#FFAF00" size="30px" />
                        <p>会员</p>
                    </div>
                </div>
            </div>
            <div class="foot-four">
                <h4>自助服务</h4>
                <div class="foot-div">
                    <div @click="wdxx">
                        <van-icon name="column" color="#FF9A2A" size="30px" />
                        <p>我的消息</p>
                    </div>
                    <div @click="yjfk">
                        <van-icon name="column" color="#FF9A2A" size="30px" />
                        <p>意见反馈</p>
                    </div>
                    <div @click="zxkf">
                        <van-icon name="column" color="#FF9A2A" size="30px" />
                        <p>在线服务</p>
                    </div>
                    <div @click="sz">
                        <van-icon name="column" color="#FF9A2A" size="30px" />
                        <p>设置</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import "../assets/rem"
export default {
    name:"person",
    data(){
        return{

        }
    },
    methods:{
        goOto(){
            this.$router.push({
                path:"/oto"
            })
        },
        goYueke(){
            this.$router.push({
                path:"/yueke"
            })
               
        },
        goMp(){
            this.$router.push({
                path:"/mp"
            })
        },
        goStudy(){
            this.$router.push({
                path:"/mstudy"
            })
        },
        goBalance(){
            this.$router.push({
                path:"/balance"
            })
        },
        goLs(){
            this.$router.push({
                path:"/gzls"
            })
        },
        goSc(){
            this.$router.push({
                path:"/wdsc"
            })
        },
        goDd(){
            this.$router.push({
                path:"/kcdd"
            })
        },
        hydd(){
            this.$router.push({
                path:"/hydd"
            })
        },
        ykdd(){
            this.$router.push({
                path:"/ykdd"
            })
        },
        yhq(){
            this.$router.push({
                path:"/yhq"
            })
        },
        xxk(){
            this.$router.push({
                path:"/xxk"
            })
        },
        hy(){
            this.$router.push({
                path:"/hy"
            })
        },
        wdxx(){
            this.$router.push({
                path:"/wdxx"
            })
        },
        yjfk(){
            this.$router.push({
                path:"/yjfk"
            })
        },
        zxkf(){
            this.$router.push({
                path:"/zxkf"
            })
        },
        sz(){
            this.$router.push({
                path:"/sz"
            })
        }
    }
}
</script>

<style scoped>
.person{
    width: 100vw;
    height: 100%;
}
header{
    width: 100%;
    height: 4.7rem;
}
.head-nei{
    width: 100%;
    height: 2.4rem;
    border-bottom-left-radius: 25%;
    border-bottom-right-radius: 25%;
    background: #FC5500;
    position: absolute;
}
.head-one{
    position: absolute;
    top: 1.2rem;
    left: 0.3rem;
    width: 6.8rem;
    height: 3.4rem;
    background: #fff;
}
.span1{
    font-size: 0.3rem;
}
.av-img{
    width: 1rem;
}
.av-img2{
    width: 0.5rem;
}
.one-one{
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
}
.foot-one1{
    width: 4rem;
    height: 100%;
    float: left;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.one-two{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.one-two div{
    text-align: center;
}
.one-two .foot-one h3{
    font-size: 0.16rem;
}
.one-two .foot-one p{
    font-size: 0.16rem;
}
.one-two .foot-one h5{
    font-size: 0.16rem;

}
.two-h3{
    color: red;
}
.two-h5{
    color: #CACACA;
}
.one-p{
    font-size: 0.13rem;
    text-align: center;
    line-height: 0.48rem;
    width: 0.9rem;
    height: 0.48rem;
    background: #FC5500;
    position: absolute;
    right: 0rem;
    top: 0.6rem;
    color: #fff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
section{
    width: 100%;
}
.nav{
    width: 100%;
    height: 1.14rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-img{
    width: 6.8rem;
    height: 0.88rem;
}
footer{
    padding: 0.24rem;
    height: 10rem;
}
footer>div{
    width: 100%;
    height: 2.2rem;
    border-bottom: 1px solid gray;
}
.foot-div{
    display: flex;
}
.foot-div div{
    width: 1.8rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.foot-div div p{
    margin: 0.08rem;
    color: #626262;
    font-size: 0.14rem;
}
h4{
    font-size: 0.3rem;
}
</style>