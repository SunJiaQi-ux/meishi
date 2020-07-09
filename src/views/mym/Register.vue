<template>
    <div class="register">
        <div class="register-head">
            <img class="img1" src="../../assets/mym_img/1.jpg" alt="">
            <img class="img_wen" src="../../assets/mym_img/wen.jpg" alt="">
        </div>

        <div class="register-contain">
            <div class="contain-one">
                <input class="in-phone" type="text" placeholder="请输入手机号">
                <button class="yanzheng-btn">获取验证码</button>
                <input class="in-pass" type="text" placeholder="请输入短信验证码">
            </div>
            <div class="contain-two">
                <p class="two-pass">*未注册的手机号将自动注册</p>
                <p class="two-log">使用密码登录</p>
            </div>
            <div class="contain-three">
                <button class="login-btn">登录</button>
            </div>
        </div>
        <div class="register-foot">
        </div>
    </div>
</template>

<script>
import "../../assets/rem"
export default {
    name:"Register",
    data(){
        return{
        }
    },
    methods: {
	}
}
</script>

<style scoped lang="scss">
.register{
    width: 100%;
    height: 100%;
}
.register-head{
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.register-head .img1{
    width: 1.68rem;
    height: 1.68rem;
}
.register-head .img_wen{
    width: 3.4rem;
    height: 0.9rem;
}
.register-contain{
    width: 100%;
    height: 4rem;

}
.contain-one{
    width: 80%;
    margin: 0 auto;
}
.contain-one .in-phone{
    width: 100%;
    height: 0.8rem;
    border: none;
    border-bottom: 1px solid #EB6100;
    font-size: 0.4rem;
    
}
.contain-one .in-pass{
    width: 100%;
    height: 0.8rem;
    border: none;
    border-bottom: 1px solid #EB6100;
    font-size: 0.4rem;
}
.contain-two{
    position: relative;
    width: 80%;
    margin: 0 auto;
    margin-top: 0.1rem;
    display: flex;
    justify-content: space-between;
}
.contain-three{
    width: 80%;
}
.login-btn{
    width: 6rem;
    height: 0.88rem;
    border-radius: 0.5rem;
    border: none;
    background: #EB6100;
    margin: 0.8rem;
    font-size: 0.4rem;
}
.two-pass{
    font-size: 0.13rem;
    color: #9D9D9D;
}
.two-log{
    font-size: 0.13rem;
    color: #9D9D9D;
}
.yanzheng-btn{
    position: absolute;
    width: 2rem;
    right: 0.72rem;
    top: 4.6rem;
    background: #fff;
    font-size: 0.13rem;
    border: none;
    color: #EB6100;
}
</style>