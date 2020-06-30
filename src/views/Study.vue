<template>
  <div class="study_container">
    <div class="study_header">
      <van-nav-bar title="学习日历" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="study_about">
      <van-calendar
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '500px' }"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft: function() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.study_container{
  width: 100%;
  height: 667px;
  background-color: #f0f2f5;
}
</style>