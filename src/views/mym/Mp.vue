<template>
<div id="mp">
    <header>
        <div><img class="head-img" src="../../assets/mym_img/fan.jpg" alt=""></div>
        <div class="person">我的个人信息</div>
        <div></div>
    </header>
    <div class="hr-div"></div>
    <section>
        <div class="xinxi">
            <p>头像</p>
            <div class="right">
                <img class="first-img" src="../../assets/mym_img/av.jpg" alt="">
                <img class="second-img" src="../../assets/mym_img/youjian.jpg" alt="">
            </div>
        </div>
        <div class="xinxi">
            <p>昵称</p>
            <div class="right">
                <p>17316213304</p>
                <img class="second-img" src="../../assets/mym_img/youjian.jpg" alt="">
            </div>
        </div>
        <div class="xinxi">
            <p>手机号</p>
            <div class="right">
                <p class="phonema">17316213304</p>
            </div>
        </div>
         <div class="xinxi">
            <p>性别</p>
            <div class="right">
                <p>保密</p>
                <img class="second-img" src="../../assets/mym_img/youjian.jpg" alt="">
            </div>
        </div>
         <div class="xinxi">
            <p>出生日期</p>
            <div class="right">
                <p>请选择</p>
                <img class="second-img" src="../../assets/mym_img/youjian.jpg" alt="">
            </div>
        </div>
         <div class="xinxi">
            <p>所在城市</p>
            <div class="right">
                <p>请选择</p>
                <img class="second-img" src="../../assets/mym_img/youjian.jpg" alt="">
            </div>
        </div>
         <div class="xinxi">
            <p>学科</p>
            <div class="right">
                <p>请选择</p>
                <img class="second-img" src="../../assets/mym_img/youjian.jpg" alt="">
            </div>
        </div>
         <div class="xinxi">
            <p>年级</p>
            <div class="right">
                <p>初三</p>
                <img class="second-img" src="../../assets/mym_img/youjian.jpg" alt="">
            </div>
        </div>
    </section>
</div>


</template>

<script>
import "../../assets/rem"
export default {

}
</script>

<style lang="scss" scoped>
.mp{
    width: 100%;
    height: 100%;
}
header{
    width: 100%;
    height: 0.86rem;
    display: flex;
    justify-content: space-between;
    line-height: 0.86rem;
    padding: 0 0.2rem;
}
.head-img{
    width: 0.34rem;
    margin-bottom: 0.1rem;
}
.person{
    font-size: 0.4rem;
}
section{
    padding: 0.2rem;
}
.xinxi{
    width: 100%;
    height: 0.94rem;
    display: flex;
    justify-content: space-between;
    line-height: 0.94rem;
    color: #9D9D9D;
    p{
        font-size: 0.3rem;
    }
}
.xinxi .right{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.xinxi .right .first-img{
    width: 0.7rem;
    border-radius: 50%;
}
.xinxi .right .second-img{
    width: 0.35rem;
    height: 0.4rem;
    margin-left: 0.2rem;
}
.phonema{
    margin-right: 0.55rem;
}
.hr-div{
    width: 100%;
    height: 0.2rem;
    background: #F0F2F5;
    width: 100%;
}
</style>