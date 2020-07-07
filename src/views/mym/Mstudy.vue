<template>
    <div class="study">
        <div class="head">
            <img src="../../assets/mym_img/fan.jpg" alt="" @click="goBack">
            <p>我的学习</p>
            <img src="../../assets/mym_img/fan.jpg" alt="">
        </div>
        <van-tabs v-model="active">
        <van-tab title="直播课(0)">内容 1</van-tab>
        <van-tab title="点播课(0)">内容 2</van-tab>
        <van-tab title="音频课(0)">内容 3</van-tab>
        <van-tab title="图文课(0)">内容 4</van-tab>
        <van-tab title="面授课(0)">内容 4</van-tab>
        <van-tab title="会员课(0)">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script>
import "../../assets/rem"
export default {
    name:"Mstudy",
    data() {
        return{
            active:"1"
        }
    },
    methods:{
        goBack(){
            window.history.go(-1)
        }
    }
}
</script>

<style scoped>
.head{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    box-sizing: border-box;
}
.head img{
    width: 0.4rem;
}
.head p{
    font-size: 0.3rem;
}
</style>