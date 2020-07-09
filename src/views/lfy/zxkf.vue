<!--  -->
<template>
<div id="zxkf">
    <h1>
        <span @click="go">∨</span>
        给我们留言
    </h1>
    <p>
        您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问
    </p>
    手机<br/>
    <van-field v-model="tel" type="tel" :border="true" placeholder="请输入手机号"/>
    留言内容<br/>
    <van-field
  v-model="message"
  rows="2"
  autosize
  type="textarea"
  maxlength="50"
  placeholder="请输入留言"
  show-word-limit
/>
<button>
    提交
</button>
</div>
</template>

<script>
import "../../assets/rem";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'zxkf',
components: {},
data() {
//这里存放数据
return {
tel:'',
message:""
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
#zxkf{
    font-size: 0.3rem;
    h1{
        line-height: 1rem;
        position: relative;
        background: #3aa6ff;
        box-sizing: border-box;
        padding-left: 0.3rem;
        color: #fff;
        width: 100%;
        height: 1rem;
        font-size: 0.26rem;
        text-align: left;
        font-weight: 500;
        span{
            position: absolute;
            right: 0.2rem;
            font-size: 0.4rem;
        }
    }
    p{
        width: 90%;
        height: auto;
        margin: 0 auto;
        font-size: 0.22rem;
        margin-top: 0.3rem;
        color: #888;
        margin-bottom: 0.3rem;
    }
    button{
        width: 95%;
        height: 0.7rem;
        background: blue;
        position: absolute;
        bottom: 0.3rem;
        left: 0.2rem;
        color: #fff;
        border: none;
        border-radius: 5px;
    }
}
</style>