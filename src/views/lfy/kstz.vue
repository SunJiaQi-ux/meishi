<!--  -->
<template>
<div id="kstz">
    <h1>
        <span @click="go">〈</span>
    </h1>
</div>
</template>

<script>
import "../../assets/rem";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'kstz',
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
go(){
    window.history.go(-1)
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
#kstz{
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