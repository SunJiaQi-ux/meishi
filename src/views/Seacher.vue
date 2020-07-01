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
.seacher_body {
  width: 94%;
  padding: 3%;
}
.seacher_body_header {
  width: 100%;
  height: 40px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
}
</style>