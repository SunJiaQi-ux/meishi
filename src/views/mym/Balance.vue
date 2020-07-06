<template>
<div class="balance">
       <header>
            <img src="../../assets/mym_img/fan.jpg" alt="">   
            <p>我的余额</p>
            <span class="yve">余额明细</span>
        </header> 
        <div class="nav">
            <div>我的余额</div>
            <div class="jin">
                <span class="span1">0</span><span class="span2">学习币</span>
            </div>
        </div>
        <footer>
            <div class="foot-div">
                <p>30000.00学习币</p>
                <p class="foot-p">￥30000.00</p>
            </div>
            <div class="foot-div2">
                <p>30000.00学习币</p>
                <p class="foot-p">￥30000.00</p>
            </div>
            <div class="foot-div2">
                <p>30000.00学习币</p>
                <p class="foot-p">￥30000.00</p>
            </div>
            <div class="foot-div2">
                <p>30000.00学习币</p>
                <p class="foot-p">￥30000.00</p>
            </div>
            <div class="foot-div2">
                <p>30000.00学习币</p>
                <p class="foot-p">￥30000.00</p>
            </div>
            <div class="foot-div2">
                <p>30000.00学习币</p>
                <p class="foot-p">￥30000.00</p>
            </div>
            <div class="foot-div2">
                <p>30000.00学习币</p>
                <p class="foot-p">￥30000.00</p>
            </div>
            <div class="foot-div2">
                <p>30000.00学习币</p>
                <p class="foot-p">￥30000.00</p>
            </div>
            <div class="ming">
                1.这是说明
            </div>
        </footer>
        <div class="chong">
           <p>立即充值</p>
        </div>
</div>
</template>

<script>
import "../../assets/rem"
export default {
    name:"Balance",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.balance{
    width: 100%;
    height: 100%;
}
header{
    width: 100%;
    height: 0.88rem;
    display: flex;
    font-size: 0.35rem;
    justify-content: space-between;
    padding: 0 0.2rem;
    box-sizing: border-box;
    align-items: center;
    color: #666666;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 99;
}
header .yve{
    font-size: 0.3rem;
}
header img{
    width: 0.3rem;
}
.nav{
    width: 100%;
    height: 0.88rem;
    display: flex;
    justify-content: left;
    line-height: 0.88rem;
    font-size: 0.3rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    margin-top: 0.88rem;
}
.span1{
    margin-left: 0.2rem;
    color: #CC3300;
}
.span2{
    margin-left: 0.2rem;
    color: #CC3300;
}
footer{
    background: #EEEEEE;
    width: 100%;
    padding: 0.4rem;
    box-sizing: border-box;
}
.foot-div{
    width: 100%;
    height: 1.2rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.25rem;
    padding: 0 0.4rem;
    box-sizing: border-box;
    border-radius: 0.2rem;
}
.foot-div2{
     width: 100%;
    height: 1.2rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.25rem;
    padding: 0 0.4rem;
    box-sizing: border-box;
    border-radius: 0.2rem;
    margin-top: 0.3rem;
}
.ming{
    width: 100%;
    height: 2rem;
    background: #fff;
    margin-top: 0.3rem;
}
.chong{
    width: 100%;
    height: 1.2rem;
    background: #CCCCCC;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.4rem;
    color: #fff;
}
.foot-p{
    color: #ff0000;
}
</style>