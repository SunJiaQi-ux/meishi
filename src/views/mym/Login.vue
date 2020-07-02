<template>
    <div class="login">
        <div class="login-head">
            <img class="img1" src="../../assets/mym_img/1.jpg" alt="">
            <img class="img_wen" src="../../assets/mym_img/wen.jpg" alt="">
        </div>

        <div class="login-contain">
            <div class="contain-one">
                <input class="in-phone" type="text" placeholder="请输入手机号">
                <input class="in-pass" type="text" placeholder="请输入密码">
            </div>
            <div class="contain-two">
                <p class="two-pass">找回密码</p>
                <p class="two-log" @click="goregister">注册/验证码登录</p>
            </div>
            <div class="contain-three">
                <button class="login-btn">登录</button>
            </div>
            
        </div>

        <div class="login-foot">
        </div>
    </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return{
        }
    },
    methods: {
        goregister(){
            this.$router.push({
                name:"Register"
            })
        }
	}
}
</script>

<style scoped lang="scss">
.login{
    width: 100%;
    height: 100%;
}
.login-head{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-head .img1{
    width: 84px;
    height: 84px;
}
.login-head .img_wen{
    width: 170px;
    height: 45px;
}
.login-contain{
    width: 100%;
    height: 200px;

}
.contain-one{
    width: 80%;
    margin: 0 auto;
}
.contain-one .in-phone{
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #EB6100;
    margin-top: 5px;
    
}
.contain-one .in-pass{
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #EB6100;
    margin-top: 5px;
}
.contain-two{
    width: 80%;
    margin: 0 auto;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
}
.contain-three{
    width: 80%;
}
.login-btn{
    width: 300px;
    height: 44px;
    border-radius: 50px;
    border: none;
    background: #EB6100;
    margin: 40px;
}
.two-pass{
    font-size: 13px;
    color: #9D9D9D;
}
.two-log{
    font-size: 13px;
    color: #9D9D9D;
}
</style>