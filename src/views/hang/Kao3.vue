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
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </section>
    <footer>
      <img src="http://localhost:8080/image/10.png" alt />
      <p>请稍后,模考正在赶来的路上啦</p>
    </footer>
  </div>
</template>

<script>
import "../../assets/rem";
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "A",
      option1: [
        { text: "考试类型", value: 0 },
        { text: "全部", value: 1 },
        { text: "模拟考试", value: 2 },
        { text: "正在考试", value: 3 }
      ],
      option2: [
        { text: "考试状态", value: "a" },
        { text: "全部", value: "b" },
        { text: "未开始", value: "c" },
        { text: "进行中", value: "e" },
        { text: "已结束", value: "f" }
      ],
      option3: [
        { text: "参考状态", value: "A" },
        { text: "全部", value: "B" },
        { text: "已做", value: "C" },
        { text: "未做", value: "D" }
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
  font-size: 0.3rem !important;
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
</style>