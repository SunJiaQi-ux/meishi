<template>
  <div>
    <!-- 日历 -->
    <div class="tutorship_body_date">
      <div>
        <van-calendar
          title="日历"
          :poppable="false"
          :show-confirm="false"
          :style="{ height: '5rem' }"
          :max-date="maxDate"
          :min-date="minDate"
        />
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
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2010, 0, 12)
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
// 日历
.tutorship_body_date {
  width: 7.4rem;
  min-height:8rem;
  background: #f0f2f5;
  margin-top: 0.2rem;
  div {
    width: 7.04rem;
    margin: 0 auto;
  }
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