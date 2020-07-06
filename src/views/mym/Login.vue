<template>
    <div class="login">
        <div class="login-head">
            <img class="img1" src="../../assets/mym_img/1.jpg" alt="">
            <img class="img_wen" src="../../assets/mym_img/wen.jpg" alt="">
        </div>

        <div class="login-contain">
            <div class="contain-one">
                <input class="in-phone " type="text" placeholder="请输入手机号" v-model="loginUser.phone">
                <input class="in-pass" type="text" placeholder="请输入密码" v-model="loginUser.password">
            </div>
            <div class="contain-two">
                <p class="two-pass">找回密码</p>
                <p class="two-log" @click="goregister">注册/验证码登录</p>
            </div>
            <div class="contain-three">
                <button class="login-btn" @click="login">登录</button>
            </div>
            
        </div>

        <div class="login-foot">
        </div>
    </div>
</template>

<script>
import "../../assets/rem"
export default {
    name:"Login",
    data(){
        return{
            loginUser:{
                phone:"",
                password:""
            }
        }
    },
    methods: {
        goregister(){
            this.$router.push({
                name:"Register"
            })
        },
        login(){
            let that = this
            if(this.loginUser.phone !=""&&this.loginUser.password !=""){
                localStorage.setItem("Token",JSON.stringify(this.loginUser))
                that.$router.push({
                    path:"/person"
                })
            }
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
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-head .img1{
    width: 1.68rem;
    height: 1.68rem;
}
.login-head .img_wen{
    width: 2.4rem;
    height: 0.9rem;
}
.login-contain{
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
    font-size: 0.5rem;
}
.two-pass{
    font-size: 0.26rem;
    color: #9D9D9D;
}
.two-log{
    font-size: 0.26rem;
    color: #9D9D9D;
}
input::-webkit-input-placeholder{
    
    color: #9D9D9D;
    font-size: 0.4rem;
}
input::-moz-placeholder{
    color: #9D9D9D;
    font-size: 0.4rem;
}

input:-moz-placeholder{
    color: #9D9D9D;
    font-size: 0.4rem;
}
input:-ms-input-placeholder{
    color: #9D9D9D;
    font-size: 0.4rem;
}
</style>