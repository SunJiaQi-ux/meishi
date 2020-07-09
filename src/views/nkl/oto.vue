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
          <van-dropdown-menu active-color="#EE8032" :overlay="false" v-model="value" @click.native="onConfirm(value)">
              <van-dropdown-item  v-model="value1" title="选择上课时间">
                  <!-- 日历 -->
                  <div class="tutorship_body_date">
                      <div><van-calendar
                          title="日历"
                          :poppable="false"
                          :show-confirm="false"
                          :style="{ height: '5rem' }"
                          :max-date="maxDate"
                          :min-date="minDate"
                      />
                      </div>
                  </div> 

              </van-dropdown-item>
              <van-dropdown-item  v-model="value2" title="选择老师条件">
                  <!-- 老师选择 -->
                  <div class="tutorship_body_teacher">
                      <div class="tuorship_body_teacher_content" v-for="(item,index) in bodyItem" :key="index">
                          <div class="tuorship_body_teacher_content_header">
                          <p>{{item.tite}}</p>
                          </div>
                          <div class="tuorship_body_teacher_item">
                          <div class="tuorship_tacher_form" v-for="(item,index) in item.option" :key="index">
                              <p>{{item.form}}</p>
                          </div>
                          </div>
                      </div>
                  </div>
                
              </van-dropdown-item>
          </van-dropdown-menu>
        </div>
        <!-- 列表 -->
        <div class="nkl_list" v-show="isShow" @click="jump()">
            <div class="nkl-list" v-for="(item,index) in otolist" :key="index">
              <img :src="item.avatar" alt="">
              <div><p>{{item.real_name}}</p><p>{{item.sex==0?'男':'女'}} {{item.teach_age}}年教龄</p></div>
              <span>预约</span>
            </div>
            <div class="nkl_jia"><p>么有更多了</p></div>
        </div>
      
      
        <!-- 设置 -->
        <div class="torship_bottom" v-show="isShow3">
            <div class="torship_left">
                <p>重置</p>
            </div>
            <div class="torship_right">
                <p>确定</p>
            </div>
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
        value:"",
        value1:"选择上课时间",
        value2:"选择老师条件",
        otolist:[],
        isShow:true,
        isShow3:false,
        // 孙佳琪
        minDate: new Date(2010, 0, 1),
        maxDate: new Date(2010, 0, 12),
        bodyItem: []
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
        this.$axios.get("http://localhost:8080/teacher.json").then(response => {
            this.bodyItem = response.data;
        });
      },
      onConfirm(){
         this.isShow=!this.isShow
         this.isShow3=!this.isShow3
      },
      jump(){
        this.$router.push('/yuyue')
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
/**孙佳琪**/
// 日历
.tutorship_body_date {
  width: 7.4rem;
  min-height:6rem;
  background: #f0f2f5;
  div{
    width: 7.04rem;
    margin: 0 auto;
  }
}
// 老师选择
.tutorship_body_teacher {
  width: 95%;
  padding: 0 2.5%;
//   box-sizing: border-box;
  background-color: #ffff;
}
.tuorship_body_teacher_content_header {
  width: 100%;
  height: 0.26rem;
  p{
    padding-top: 0.34rem;
    font-size: 0.26rem;
    color:#474748;
  }
}
.tuorship_body_teacher_item {
  width: 100%;
  display: inline-flex;
//   justify-content: space-between;
  flex-wrap: wrap;
}
.tuorship_tacher_form {
  width: 1.36rem;
  height: 0.66rem;
  margin-right:0.44rem;
  margin-top: 0.14rem;
  background-color: #f5f5f5;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #646464;
  font-size: 0.24rem;
  border-radius: 0.06rem;
}
.tuorship_tacher_form:nth-of-type(4n){
    margin-right: 0;
}

// 底部
.torship_bottom {
  width: 100%;
  height: 0.87rem;
  position: fixed;
  bottom: 0;
  display: inline-flex;
  justify-content: space-between;
}
.torship_left {
  width: 50%;
  height: 0.87rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #eb6100;
  background-color: #fff;
  font-size: 0.32rem;
}
.torship_right {
  width: 50%;
  height: 0.87rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #eb6100;
  color: #fff;
  font-size: 0.32rem;
}
</style>