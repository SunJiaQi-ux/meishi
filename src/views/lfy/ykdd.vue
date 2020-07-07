<!--  -->
<template>
<div id="ykdd">
    <h1>
        <span @click="go">〈</span>
        约课订单
    </h1>
    <van-tabs v-model="active">
        <van-tab title="全部订单"></van-tab>
        <van-tab title="待支付"></van-tab>
        <van-tab title="已完成"></van-tab>
        <van-tab title="已取消"></van-tab>
    </van-tabs>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "../../assets/rem";
export default {
//import引入的组件需要注入到对象中才能使用
name:'kydd',
components: {},
data() {
//这里存放数据
return {
    active:0
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
go(){
    this.$router.push('/person')
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
#ykdd{
    h1{
        line-height: 1rem;
        position: relative;
        background: #fff;
        width: 100%;
        height: 1rem;
        font-size: 0.4rem;
        text-align: center;
        font-weight: 500;
        span{
            position: absolute;
            left: 0.2rem;
        }
    }
}
</style>