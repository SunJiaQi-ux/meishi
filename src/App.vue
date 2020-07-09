<template>
  <div id="app">
    <van-tabbar
      v-model="active"
      active-color="#D74E00"
      inactive-color="#B7B7B7"
      route
      v-show="this.$route.meta.footer"
    >
      <van-tabbar-item replace icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item replace icon="balance-list-o" to="/course">课程</van-tabbar-item>
      <van-tabbar-item replace icon="friends-o" to="/Yueke">约课记录</van-tabbar-item>
      <van-tabbar-item replace icon="setting-o" to="/exe">练习</van-tabbar-item>
      <van-tabbar-item replace icon="setting-o" to="/person">我的</van-tabbar-item>
    </van-tabbar>
    <router-view />
    <Xiao></Xiao>
  </div>

</template>

<script>
import Xiao from './views/nkl/xiao'
export default {
  data() {
    return {
      active: 0
    };
  },
  components:{
    Xiao
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
/* vant组件里面 */
/* /oto */
.nkl_head{
  .van-nav-bar{
        height:0.89rem;
        .van-nav-bar__title{
            font-size: 0.32rem;
            color:#595959;
        }
        .van-icon{
            color:#5b5b5b;
        }
  }
}
.nkl_cont{
  //  分类 
  div{
    .van-dropdown-menu__bar{
        height:0.86rem;
    }
    .van-dropdown-menu__title{
        color:#8c8c8c;
        line-height: 0.36rem;
        .van-ellipsis{
            font-size: 0.3rem;
        }
    }
    .van-dropdown-menu__title::after{
        border-color: transparent transparent #5a5a5b #5a5a5b;
    }
  }
}
/* /course 特色课*/
.nkl_header{
  .van-nav-bar{
    width: 7.4rem;
    height: 0.93rem; 
    .van-ellipsis{
      font-size: 0.34rem;
    }
  }
  .van-dropdown-menu__bar{
    height: 0.8rem;
  }
  .van-dropdown-menu__title{
    color:#212122;
    line-height: 0.4rem;
    .van-ellipsis{
      font-size: 0.3rem;
    }
  }
  .van-dropdown-menu__title::after{
    border-color: transparent transparent #5a5a5b #5a5a5b;
  }
}
</style>
