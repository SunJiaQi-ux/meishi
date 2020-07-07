<!--  -->
<template>
<div id="wdxx">
    <h1>
        <span @click="go">〈</span>
        消息通知
    </h1>
    <ul>
        <li @click="kctz">
            <img src="../../assets/mym_img/1.png" alt="">
            <ol>
                <li>
                    <p>
                        课程通知
                    </p>
                    <p>
                        暂无消息
                    </p>
                </li>
            </ol>
        </li>
        <li @click="xttz">
            <img src="../../assets/mym_img/2.png" alt="">
            <ol>
                <li>
                    <p>
                        系统通知
                    </p>
                    <p>
                        暂无消息
                    </p>
                </li>
            </ol>
        </li>
        <li @click="ddtz">
            <img src="../../assets/mym_img/3.png" alt="">
            <ol>
                <li>
                    <p>
                        订单通知
                    </p>
                    <p>
                        暂无消息
                    </p>
                </li>
            </ol>
        </li>
        <li @click="yktz">
            <img src="../../assets/mym_img/4.png" alt="">
            <ol>
                <li>
                    <p>
                        约课通知
                    </p>
                    <p>
                        暂无消息
                    </p>
                </li>
            </ol>
        </li>
        <li @click="kstz">
            <img src="../../assets/mym_img/5.png" alt="">
            <ol>
                <li>
                    <p>
                        考试通知
                    </p>
                    <p>
                        暂无消息
                    </p>
                </li>
            </ol>
        </li>
    </ul>
</div>
</template>

<script>
import "../../assets/rem";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'wdxx',
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
    this.$router.push('/person')
},
kctz(){
    this.$router.push('/kctz')
},
xttz(){
    this.$router.push('/xttz')
},
ddtz(){
    this.$router.push('/ddtz')
},
yktz(){
    this.$router.push('/yktz')
},
kstz(){
    this.$router.push('/kstz')
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
#wdxx{
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
    ul{
        width: 100%;
        height: 6rem;
        margin-top: 0.2rem;
        li{
            width: 95%;
            height: 1.4rem;
            margin: 0 auto;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding-left: 0.3rem;
            padding-bottom: 0.2rem;
            margin-bottom: 0.2rem;
            border-bottom: 1px solid #ccc;
            img{
                width: 1.1rem;
                height: 1.1rem;
            }
            ol{
                li{
                    width: 100%;
                    height: 100%;
                    border: none;
                    font-size: 0.3rem;
                    display: flex;
                    flex-direction: column;
                    box-sizing: border-box;
                    padding-left: 0.3rem;
                }
            }
        }
    }
}
</style>