<template>
  <div class="seacher_container">
    <div class="seacher_header">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" />
    </div>
    <div class="seacher_body">
      <div class="seacher_body_header">
        <p>历史搜索</p>
        <van-icon name="delete" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body{
  font-size: 0.16rem;
}
.seacher_body {
  width: 94%;
  height: 0.8rem;
  margin: 0 auto;
}
.seacher_body_header {
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 0.3rem;
}
</style>