<template>
  <div>
    <header>
      <van-icon name="arrow-left" @click="back" />
      <span>{{this.$route.query.item}}</span>
      <van-icon name="search" class="icon" @click="search" />
    </header>
    <section>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </section>
    <footer>
      <img src="http://localhost:8080/image/10.png" alt />
      <p>暂无收藏记录</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "题目类型", value: 0 },
        { text: "单选", value: 1 },
        { text: "多选", value: 2 },
        { text: "判断", value: 3 },
        { text: "连线", value: 4 }
      ]
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    search() {
      this.$router.push({
        name: "Seacher"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  line-height: 45px;
  justify-content: space-between;
  .icon {
    font-size: 1.2rem;
  }
}
img {
  width: 200px;
}
footer {
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: gray;
}
</style>