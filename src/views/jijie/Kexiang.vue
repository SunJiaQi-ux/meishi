<template>
  <div>
    <van-nav-bar title="课程详情" left-text="" left-arrow>
      <template #right>
        <van-icon name="replay" size="18" />
      </template>
    </van-nav-bar>
    
    <div class="fir">
        <ul>
            <li class="li1">李老师16号到22号地理大课堂开课啦<span><van-icon name="star-o"/></span></li>
            <li class="li2">免费</li>
            <li>共8课时|31人已报名</li>
            <li>开课时间：2020.03.16 18:30-2020.03.22 15:00</li>
        </ul>
    </div>

    <div class="sec">
        <p>教学团队</p>
        <figure>
            <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
            <figcaption>李青</figcaption>
        </figure>
    </div>

    <div class="thr">
        <p>课程介绍</p>
    </div>

    <div class="fif">
        <p>课程大纲</p>
        <div>
            <ul>
                <li class="li1">·</li>
                <li class="li2">回放</li>
                <li class="li3">第一讲第一课时</li>
            </ul>
            <ol>
                <li>李青</li>
                <li>03月21日 13:00-15:00</li>
            </ol>
        </div>
        <div>
            <ul>
                <li class="li1">·</li>
                <li class="li2">回放</li>
                <li class="li3">第一讲第一课时</li>
            </ul>
            <ol>
                <li>李青</li>
                <li>03月21日 13:00-15:00</li>
            </ol>
        </div><div>
            <ul>
                <li class="li1">·</li>
                <li class="li2">回放</li>
                <li class="li3">第一讲第一课时</li>
            </ul>
            <ol>
                <li>李青</li>
                <li>03月21日 13:00-15:00</li>
            </ol>
        </div><div>
            <ul>
                <li class="li1">·</li>
                <li class="li2">回放</li>
                <li class="li3">第一讲第一课时</li>
            </ul>
            <ol>
                <li>李青</li>
                <li>03月21日 13:00-15:00</li>
            </ol>
        </div><div>
            <ul>
                <li class="li1">·</li>
                <li class="li2">回放</li>
                <li class="li3">第一讲第一课时</li>
            </ul>
            <ol>
                <li>李青</li>
                <li>03月21日 13:00-15:00</li>
            </ol>
        </div><div>
            <ul>
                <li class="li1">·</li>
                <li class="li2">回放</li>
                <li class="li3">第一讲第一课时</li>
            </ul>
            <ol>
                <li>李青</li>
                <li>03月21日 13:00-15:00</li>
            </ol>
        </div><div>
            <ul>
                <li class="li1">·</li>
                <li class="li2">回放</li>
                <li class="li3">第一讲第一课时</li>
            </ul>
            <ol>
                <li>李青</li>
                <li>03月21日 13:00-15:00</li>
            </ol>
        </div>
    </div>

    <div class="empty"></div>

    <button @click="jump">立即学习</button>

  </div>
</template>

<script>
import '../../assets/rem'
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
      jump(){
          this.$router.push('/lixue')
      }
  }
};
</script>

<style lang="scss" scoped>
body{
    font-size: 0.16rem;
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.fir{
    width: 7.4rem;
    height: 2.8rem;
    border-bottom: 0.3rem solid #f0f2f5;
    ul{
        margin-left: 0.32rem;
        li{
            height: 0.6rem;
            line-height: 0.6rem;
            font-size: 0.3rem;
            color:#979797;
        }
        .li1{
            height: 0.6rem;
            font-size: 0.34rem;
            line-height: 0.6rem;
            padding-top: 0.3rem;
            color:#000;
            span{
                font-size: 0.5rem;
                margin-left: 0.8rem;
            }
        }
        .li2{
            height: 0.6rem;
            color:#f08b44;
            font-size: 0.3rem;
        }
    }
}
.sec{
    width: 7.4rem;
    height: 2.8rem;
    border-bottom: 0.3rem solid #f0f2f5;
    p{
        margin-left: 0.26rem;
        margin-top: 0.34rem;
        font-size: 0.32rem;
    }
    figure{
        width: 0.84rem;
        height: 1.2rem;
        font-size: 0.24rem;
        text-align: center;
        margin-left: 0.58rem;
        margin-top: 0.44rem;
        img{
            width: 0.78rem;
            height: 0.78rem;
        }
        figcaption{
            margin-top: 0.04rem;
        }
    }
}
.thr{
    width: 7.4rem;
    border-bottom: 0.3rem solid #f0f2f5;
    height: 1.26rem;
    p{
        margin-top: 0.28rem;
        margin-left: 0.28rem;
        font-size: 0.32rem;
    }
}
.fif{
    width: 7.4rem;
    height: 9.74rem;
    border-bottom: 0.3rem solid #f0f2f5;
    p{
        margin-top: 0.28rem;
        margin-left: 0.28rem;
        font-size: 0.32rem;
    }
    div{
        width: 3.77rem;
        height: 1.1rem;
        // background: #000;
        margin-left: 0.56rem;
        ul{
            display: flex;
            font-size: 0.22rem;
            height: 0.4rem;
            // background: #000;
            margin-top: 0.23rem;
            line-height: 0.4rem;
            .li1{
                color:#eb7e36;
                font-size: 0.8rem;
            }
            .li2{
                background: #eb7e36;
                color:white;
                width: 0.64rem;
                font-size: 0.24rem;
                text-align: center;
                border-radius: 0.1rem;
            }
            .li3{
                margin-left: 0.13rem;
                font-size: 0.24rem;
            }
        }
        ol{
            margin-top: 0.1rem;
            display: flex;
            font-size: 0.24rem;
            margin-left: 0.44rem;
            li{
                margin-right: 0.24rem;
            }
        }
    }
}
.empty{
    width: 7.4rem;
    height: 0.88rem;
}
button{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 7.4rem;
    height: 0.88rem;
    background: #eb6100;
    border:none;
    border: 1px solid #eb6100;
    font-size: 0.32rem;
    color:white;
}
</style>