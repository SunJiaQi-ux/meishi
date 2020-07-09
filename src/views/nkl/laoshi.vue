<template>
  <div class="nkl_ls">
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
                   <!-- 设置 -->
        <div class="torship_bottom">
            <div class="torship_left">
                <p>重置</p>
            </div>
            <div class="torship_right">
                <p>确定</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        bodyItem: [],
    };
  },
  props: {},
  components: {},
  mounted() {
      this.$axios.get("http://localhost:8080/teacher.json").then(response => {
            this.bodyItem = response.data;
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
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