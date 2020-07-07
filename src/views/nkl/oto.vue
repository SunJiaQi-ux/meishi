<template>
  <div class="nkl_box">
      <!-- 头部 -->
      <div class="nkl_head">
        <van-nav-bar title="一对一辅导">
             <template #left>
                <router-link to="/"><van-icon name="arrow-left" size="0.3rem"/></router-link>
            </template>
            <template #right>
                <router-link to="/seacher"><van-icon name="search" size="0.4rem" /></router-link>
            </template>
        </van-nav-bar>
      </div>
      <!-- 中部 -->
      <div class="nkl_cont">
          <!-- 分类 -->
          <div>
            <van-dropdown-menu active-color="#EE8032" :overlay="false" @click.native="onConfirm">
                <van-dropdown-item  v-model="value1" title="选择上课时间"/>
                <van-dropdown-item  v-model="value2" title="选择老师条件"/>
            </van-dropdown-menu>
          </div>
          <!-- 列表 -->
          <div class="nkl_list" v-if="isShow">
              <div class="nkl-list" v-for="(item,index) in otolist" :key="index">
                <img :src="item.avatar" alt="">
                <div><p>{{item.real_name}}</p><p>{{item.sex==0?'男':'女'}} {{item.teach_age}}年教龄</p></div>
                <span>预约</span>
              </div>
              <div class="nkl_jia"><p>么有更多了</p></div>
          </div>
          
      </div>
  </div>
</template>

<script>
import '../../assets/rem'
export default {
  name: "",
  data() {
    return {
        value1:"选择上课时间",
        value2:"选择老师条件",
        otolist:[],
        isShow:true,
    };
  },
  props: {},
  components: {},
  mounted() {
   this.otoList()
  },
  methods: {
      //列表数据
      otoList(){
          this.$axios.get("https://www.365msmk.com/api/app/otoCourse?page=1&limit=10").then((res)=>{
              console.log(res.data.data)
              this.otolist=res.data.data
          })
      },
      onConfirm(){
          console.log(111)
          console.log(this.value1,this.value2)
          this.isShow=false
      }

  }
};
</script>
<style lang="scss" scoped>
html,body{
    font-size: 0.16rem;
}
// 头部
.nkl_head{
    position: fixed;
    width: 7.4rem;
    height: 0.89rem;
}
//中间
.nkl_cont{
    width: 100%;
    height: 100%;
    background: #f0f2f5;
    padding-top:0.89rem;
    // 列表
    >.nkl_list{
        min-height: 0.6rem;;
        clear: both;
        >.nkl-list{
            margin: 0 auto;
            margin-top: 0.18rem;
            width: 7rem;
            height: 1.62rem;
            padding:0.4rem 0.32rem;
            border-radius: 0.1rem;
            background: #fff;
            display: flex;
            align-items: center;
            box-sizing: border-box;
                img{
                    width: 0.78rem;
                    height: 0.8rem;
                    border-radius: 50%;
                    margin-right:0.24rem;
                }
    
            div{
                flex: 1;
                p:nth-of-type(1){
                    color:#595e68;
                    font-size: 0.28rem;
                    margin: 0.06rem 0 0.1rem 0;
                }
                p:nth-of-type(2){
                    color:#b7b7b7;
                    font-size: 0.22rem;
                }
            }
        
                span{
                    display: inline-block;
                    width:1.34rem;
                    height: 0.62rem;
                    background: #ebeefe;
                    border-radius: 0.4rem;
                    text-align: center;
                    color:#eb6100;
                    font-size: 0.3rem;
                    line-height: 0.62rem;
                }
    
        }
        >.nkl_jia{
            width: 100%;
            height: 0.6rem;
            p{
                text-align: center;
                color:#969799;
                font-size: 0.25rem;
                line-height: 0.6rem;
            }
        }
    } 
}
</style>