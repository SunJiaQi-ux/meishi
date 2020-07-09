<template>
    <div class="study">
        <div class="head">
            <img src="../../assets/mym_img/fan.jpg" alt="" @click="goBack">
            <p>我的学习</p>
            <van-icon @click="jump" name="newspaper-o" size="0.46rem"/>
        </div>
        <van-tabs v-model="active">
        <van-tab title="直播课(0)">
            <img class="lu-img" src="../../assets/mym_img/lu.jpg" alt="">
            <button class="select" @click="kecheng">选择课程</button>
        </van-tab>
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
        },
        kecheng(){
            this.$router.push({
                path:"/course"
            })
        },
        jump(){
            this.$router.push('/study')
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
.lu-img{
    width: 2.49rem;
    margin: 3rem 2.5rem 0 2.5rem;
}
.select{
    width: 2rem;
    height: 0.5rem;
    margin: 1rem 2.5rem 0 2.7rem;
    font-size: 0.16rem;
    background: #E96201;
    color: #fff;
    outline: none;
    border: none;
}
</style>