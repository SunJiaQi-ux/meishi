<template>
    <div class="person">
        <header>
            <div class="head-nei"></div>
            <div class="head-one">
                <div class="one-one">
                    <div class="foot-one">
                        <img class="av-img" src="../assets/mym_img/av.jpg" alt="">
                    </div>
                    <div class="foot-one"><span>17316213304</span><img src="" alt=""></div>
                    <div class="foot-one">
                        <p class="one-p">去约课</p>
                    </div>
                </div>
                <div class="one-two">
                    <div class="foot-one">
                        <h3 class="two-h3">10</h3>
                        <p>我的课程</p>
                        <h5 class="two-h5">-已购课程学习-</h5>
                    </div>
                    <div class="foot-one">
                        <h3 class="two-h3">5</h3>
                        <p>我的预约</p>
                        <h5 class="two-h5">-一对一老师预约-</h5>
                    </div>
                    <div class="foot-one">
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
                    <div>
                        <van-icon name="user-o" color="#FF944B" size="30px" />
                        <p>关注的老师</p>
                    </div>
                    <div>
                        <van-icon name="bars" color="#FF944B" size="30px" />
                        <p>我的收藏</p>
                    </div>
                </div>
            </div>
            <div class="foot-two">
                <h4>订单相关</h4>
                <div class="foot-div">
                    <div>
                        <van-icon name="bill" color="#FC5500" size="30px" />
                        <p>课程订单</p>
                    </div>
                    <div>
                        <van-icon name="bill" color="#FC5500" size="30px" />
                        <p>会员订单</p>
                    </div>
                    <div>
                        <van-icon name="bill" color="#FC5500" size="30px" />
                        <p>约课订单</p>
                    </div>
                </div>
            </div>
            <div class="foot-three">
                <h4>我的账户</h4>
                <div class="foot-div">
                    <div>
                        <van-icon name="gold-coin-o" color="#FFAF00" size="30px" />
                        <p>优惠券</p>
                    </div>
                    <div>
                        <van-icon name="gold-coin-o" color="#FFAF00" size="30px" />
                        <p>学习卡</p>
                    </div>
                    <div>
                        <van-icon name="gold-coin-o" color="#FFAF00" size="30px" />
                        <p>会员</p>
                    </div>
                </div>
            </div>
            <div class="foot-four">
                <h4>自助服务</h4>
                <div class="foot-div">
                    <div>
                        <van-icon name="column" color="#FF9A2A" size="30px" />
                        <p>我的消息</p>
                    </div>
                    <div>
                        <van-icon name="column" color="#FF9A2A" size="30px" />
                        <p>意见反馈</p>
                    </div>
                    <div>
                        <van-icon name="column" color="#FF9A2A" size="30px" />
                        <p>在线服务</p>
                    </div>
                    <div>
                        <van-icon name="column" color="#FF9A2A" size="30px" />
                        <p>设置</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:"Person",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.person{
    width: 100%;
    height: 100%;
}
header{
    width: 100%;
    height: 235px;
}
.head-nei{
    width: 750px;
    height: 750px;
    border-radius: 50%;
    background: #FC5500;
    position: absolute;
    top: -615px;
    left: -187px;
}
.head-one{
    position: absolute;
    top: 60px;
    left: 15px;
    width: 345px;
    height: 175px;
    background: #fff;
}
.av-img{
    width: 56px;

}
.one-one{
    width: 100%;
    height: 50%;
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
.two-h3{
    color: red;
}
.two-h5{
    color: #CACACA;
}
.one-p{
    font-size: 13px;
    text-align: center;
    line-height: 24px;
    width: 60px;
    height: 24px;
    background: #FC5500;
    position: absolute;
    right: 0px;
    top: 32px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
section{
    width: 100%;
}
.nav{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-img{
    width: 347px;
    height: 44px;
}
footer{
    padding: 12px;
}
footer>div{
    width: 100%;
    height: 125px;
    border-bottom: 1px solid gray;
}
.foot-div{
    display: flex;
}
.foot-div div{
    width: 90px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.foot-div div p{
    margin: 8px;
    color: #626262;
    font-size: 14px;
}
</style>