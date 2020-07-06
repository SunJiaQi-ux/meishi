<template>
    <div class="yve">
        <div class="head">
            <img src="../../assets/mym_img/fan.jpg" alt="" @click="goBack">
            <p>余额明细</p>
        </div>
        <hr>
    </div>
</template>

<script>
import "../../assets/rem"
export default {
    name:"Yve",
    data(){
        return{

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
.yve{
    width: 100%;
    height: 0.88rem;
}
.head{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 0.35rem;
    padding: 0 0.3rem;
    box-sizing: border-box;
}
.head img{
    width: 0.3rem;
}
.head p{
    margin-left: 2.5rem;
}
</style>