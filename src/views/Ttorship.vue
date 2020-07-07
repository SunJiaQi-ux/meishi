<template>
  <div class="tutorship_container">
    <div class="tutorship_header">
      <van-nav-bar
        title="一对一辅导"
        left-text="返回"
        right-text="搜索"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <div class="tuorship_header_bottom">
        <div
          :class="['tuorship_header_item', selectIndex===index?'tutorship_header_active':'']"
          v-for="(item,index) in headerItem"
          :key="index"
          v-on:click="SelectIndex(index)"
        >
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="tutorship_body_date" v-show="show">
      <van-calendar
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '500px' }"
        :max-date="maxDate"
        :min-date="minDate"
      />
    </div>
    <div class="tutorship_body_teacher" v-show="isShow">
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
import axios from "axios";
export default {
  data() {
    return {
      headerItem: [{ name: "选择上课时间" }, { name: "选择老师条件" }],
      selectIndex: 0,
      show: true,
      isShow: false,
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2010, 0, 12),
      bodyItem: []
    };
  },
  methods: {
    onClickLeft: function() {
      this.$router.go(-1);
    },
    onClickRight: function() {
      this.$router.push("/seacher");
    },
    SelectIndex: function(index) {
      this.selectIndex = index;
      if (index !== 0) {
        this.show = false;
        this.isShow = true;
      } else {
        this.show = true;
        this.isShow = false;
      }
    }
  },
  mounted() {
    axios.get("http://localhost:8080/teacher.json").then(response => {
      this.bodyItem = response.data;
    });
  }
};
</script>

<style lang="scss" scoped>
*{
  font-size: 16px;
}
.tutorship_container {
  width: 100%;
  height: 41.6875rem;
  background-color: #f0f2f5;
}
.tuorship_header_bottom {
  width: 100%;
  height: 2.625rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.tuorship_header_item {
  width: 50%;
  height: 2.625rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  color: #8c8c8c;
  font-size: 15px;
}
.tutorship_header_active {
  color: #eb6100;
}
.tutorship_body_date {
  width: 95%;
  margin: 10px;
}
.tutorship_body_teacher {
  width: 95%;
  padding: 0 2.5%;
  background-color: #ffff;
}
.tuorship_body_teacher_content_header {
  width: 100%;
  height: 0.75rem;
  padding-top: 16px;
  padding-bottom: 10px;
  font-size: 0.75rem;
}
.tuorship_body_teacher_item {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.tuorship_tacher_form {
  width: 18%;
  height: 2.0625rem;
  margin-right: 23px;
  margin-bottom: 7px;
  background-color: #f5f5f5;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #646464;
  font-size: 0.9375rem;
}
.torship_bottom {
  width: 100%;
  height: 2.75rem;
  position: fixed;
  bottom: 0;
  display: inline-flex;
  justify-content: space-between;
}
.torship_left {
  width: 50%;
  height: 2.75rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #eb6100;
  background-color: #fff;
}
.torship_right {
  width: 50%;
  height: 2.75rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #eb6100;
  color: #fff;
}
</style>