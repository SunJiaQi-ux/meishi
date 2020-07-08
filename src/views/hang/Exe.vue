<template>
  <div>
    <p>练习</p>
    <section>
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="add(item,index)">
          <img :src="item.img" />
          <span>{{item.name}}</span>
        </li>
      </ul>
    </section>
    <footer>
      <span class="ospan">近期模考</span>
      <div class="odiv">
        <span style="color:#eb6100">默认排序</span>
        <span>时间</span>
      </div>
      <div class="img">
        <img src="http://localhost:8080/image/08.png" alt />
        <span>暂无模考安排,敬请期待</span>
      </div>
    </footer>
  </div>
</template>

<script>
import "../../assets/rem";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.$axios.get("/api/exe.json").then(res => {
      this.list = res.data.exe;
    });
  },
  methods: {
    add(item, index) {
      if (index == 0) {
        this.$router.push({
          name: "kao1",
          query: { item: item.name }
        });
      } else if (index == 1) {
        this.$router.push({
          name: "kao2",
          query: { item: item.name }
        });
      } else if (index == 2) {
        this.$router.push({
          name: "kao3",
          query: { item: item.name }
        });
      } else if (index == 3) {
        this.$router.push({
          name: "kao4",
          query: { item: item.name }
        });
      } else if (index == 4) {
        this.$router.push({
          name: "kao5",
          query: { item: item.name }
        });
      } else if (index == 5) {
        this.$router.push({
          name: "kao6",
          query: { item: item.name }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  font-weight: 100 !important;
  font-size: 0.3rem !important;
}
p {
  width: 100%;
  height: 0.89rem;
  text-align: center;
  line-height: 0.89rem;
  font-size: 0.3rem;
}
section {
  width: 100%;
  height: 4rem;
  background: #f0f2f5;
  position: relative;
  ul {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    background: white;
    position: absolute;
    top: 15px;
    left: 10px;
    li {
      width: 1.3rem;
      font-size: 0.27rem;
      margin: 0 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
footer {
  width: 100%;
  .ospan {
    font-size: 0.4rem;
    color: gray;
    margin-left: 2%;
  }
  .odiv {
    width: 96%;
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
    margin-top: 0.352rem;
  }
  img {
    width: 2.56rem;
  }
  .img {
    margin-top: 1.28rem;
    width: 98%;
    height: 4.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    span {
      color: gray;
      font-size: 0.3rem;
    }
  }
}
</style>