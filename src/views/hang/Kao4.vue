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
      <span>巩固全部错题</span>
      <span>移除错题</span>
    </section>
    <footer>
      <img src="http://localhost:8080/image/10.png" alt />
      <p>暂无错题记录</p>
    </footer>
  </div>
</template>

<script>
import "../../assets/rem";
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "类型不限", value: 0 },
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "考点专练", value: 3 },
        { text: "仿真模考", value: 4 }
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
div{
  font-size: 0.3rem;
}
header {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  line-height: 45px;
  justify-content: space-between;
  .icon {
    font-size: 0.38rem;
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
section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: gray;
  }
}
</style>