<!--  -->
<template>
<div id="hy">
    <h1>
        <span @click="go">〈</span>
        开通会员
    </h1>
    <div class="box">
        <img src="../..//assets/mym_img/av.jpg" alt="">
        <div class="sex">
            <p>173****3304</p>
            <span>开通会员免费学习</span>
        </div>
    </div>
    <h6>
        购买会员
        <small>
            购买会员后可免费观看会员教程
        </small>
    </h6>
    <ul>
        <li>
            <p>季度会员</p>
            <p class="p2">
                <van-icon name="points" color="orange" />
                    40.00
            </p>
        </li>
        <li>
            <p>半年会员</p>
            <p class="p2">
                <van-icon name="points" color="orange" />
                    75.00
            </p>
        </li>
        <li>
            <p>月会员</p>
            <p class="p2">
                <van-icon name="points" color="orange" />
                    15.00
            </p>
        </li>
    </ul>
    <button>
        立即支付
    </button>
</div>
</template>

<script>
import "../../assets/rem";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'hy',
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
#hy{
    line-height: 1rem;
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
    .box{
        width: 100%;
        height: 1.5rem;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0.1rem 0.3rem;
        img{
            width: 1rem;
            height: 1rem;
        }
        .sex{
            width: 80%;
            height: 1.5rem;
            font-size: 0.26rem;
            P{
                display: block-inline;
                height: 50%;
                line-height: 0.75rem;
                box-sizing: border-box;
                padding-left: 0.3rem;
                font-size: 0.3rem;
            }
            span{
                display: block-inline;
                height: 50%;
                line-height: 0.75rem;
                box-sizing: border-box;
                padding-left: 0.3rem;
                color: #999;
            }
        }
    }
    h6{
        width: 100%;
        height: 0.8rem;
        font-size: 0.34rem;
        font-weight: 200;
        box-sizing: border-box;
        padding-left: 0.3rem;
        margin-top: 0.6rem;
        margin-bottom: 0.2rem;
    }
    ul{
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            width: 1.9rem;
            height: 1.9rem;
            border: 1px solid #333;
            border-radius: 5px;
            border-color: #999;
            font-size: 0.26rem;
            p{
                width: 100;
                height: 0.3rem;
                text-align: center;
            }
            .p2{
                width: 100%;
                height: 0.5rem;
                color: orange;
                font-size: 0.4rem;
                margin-top: 0.3rem;
            }
        }
    }
    button{
        width: 95%;
        height: 0.8rem;
        font-size: 0.26rem;
        line-height: 0.8rem;
        position: absolute;
        bottom: 0.4rem;
        left: 0.2rem;
        color: #fff;
        background: goldenrod;
        border: none;
        border-radius: 5px;
    }
}
</style>