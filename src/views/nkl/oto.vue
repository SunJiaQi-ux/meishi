<template>
  <div class="nkl_box">
      <!-- 头部 -->
      <div class="nkl_head">
        <van-nav-bar title="一对一辅导">
             <template #left>
                <router-link to="/"><van-icon name="arrow-left" size="24"/></router-link>
            </template>
            <template #right>
                <van-icon name="search" size="28" />
            </template>
        </van-nav-bar>
      </div>
      <!-- 中部 -->
      <div class="nkl_cont">
          <!-- 分类 -->
          <div>
            <van-dropdown-menu active-color="#EE8032" :overlay="false">
                <van-dropdown-item  title="选择上课时间"/>
                <van-dropdown-item  title="选择老师条件"/>
            </van-dropdown-menu>
          </div>
          <!-- 列表 -->
          <div class="nkl_list">
              <div class="nkl-list" v-for="(item,index) in otolist" :key="index">
                <div><img :src="item.avatar" alt=""></div>
                <div><p>{{item.real_name}}</p><p>{{item.sex==0?'男':'女'}} {{item.teach_age}}年教龄</p></div>
                <div><span>预约</span></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        otolist:[],
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
      }

  }
};
</script>
<style lang="scss" scoped>
// 头部
.nkl_head{
    position: fixed;
    width: 100%;
    height: 66px;
    background:palegoldenrod;
}
//中间
.nkl_cont{
    width: 100%;
    height: 100%;
    background: #f0f2f5;
    padding-top:66px;
    // 列表
    >.nkl_list{
        min-height: 600px;
        clear: both;
        >.nkl-list{
            margin: 0 auto;
            margin-top: 15px;
            width: 90%;
            height: 118px;
            padding:30px 34px 28px 24px;
            border-radius: 6px;
            background: #fff;
            display: flex;
            
            box-sizing: border-box;
            div:nth-of-type(1){
                width: 20%;
                margin-right: 4%;
                img{
                    width: 100%;
                    height: 50px;
                    border-radius: 50%;
                }
            }
            div:nth-of-type(2){
                width: 60%;
                p:nth-of-type(1){
                    color:#595e68;
                    font-size: 22px;
                    margin-top: 3px;
                    margin-bottom: 10px;
                }
                p:nth-of-type(2){
                    color:#595e68;
                    font-size: 15px;
                }
            }
            div:nth-of-type(3){
                width: 20%;
                span{
                    display: inline-block;
                    width: 100%;
                    height: 45px;
                    background: #ebeefe;
                    border-radius: 20px;
                    text-align: center;
                    color:#eb6100;
                    font-size: 18px;
                    line-height: 45px;
                }
            }
        }
    }
}
</style>