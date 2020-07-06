<template>
  <div>
    <header>
      <van-icon name="arrow-left" @click="back" />
      <span>{{this.$route.query.item}}</span>
      <span></span>
    </header>
    <nav>
      <van-search v-model="value" placeholder="请输入题库名称关键词" />
    </nav>
    <hr />
    <section>
      <div class="left">
        <span
          v-for="(item,index) in list"
          :key="index"
          v-if="item.pid == 0"
          @click="add(item.id,index)"
          :class="{'sel':selone == index}"
        >{{item.name}}</span>
      </div>
      <div class="right">
        <span
          v-for="(item,index) in list"
          :key="index"
          v-if="item.pid == sel"
        >{{item.classify_name}}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      list: [],
      sel: 1,
      selone:0
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    add(id,index) {
      this.sel = id;
      this.selone = index
    }
  },
  mounted() {
    this.$axios.get("/api/kaodianlianxi.json").then(res => {
      this.list = res.data.nav;
    });
  }
};
</script>

<style lang="scss" scoped>
.sel{
    color: red;
}
span{
    text-align: center;
}
header {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  line-height: 45px;
  justify-content: space-between;
}
hr {
  background: gray;
}
section {
  width: 100%;
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  .left {
    width: 30%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .right {
    width: 70%;
    span {
      margin: 0px 5px;
    }
  }
}
</style>