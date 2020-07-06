<template>
  <div>
    <p>练习</p>
    <section>
      <ul>
        <li v-for="(item,index) in list" :key="index">
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
  }
};
</script>

<style lang="scss" scoped>
div {
  font-weight: 200;
}
p {
  width: 100%;
  height: 2.81rem;
  text-align: center;
  line-height: 2.81rem;
  font-size: 1.2rem;
}
section {
  width: 100%;
  height: 12.5rem;
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
      width: 4.3rem;
      font-size: 0.8rem;
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
    font-size: 1.2rem;
    color: gray;
    margin-left: 2%;
  }
  .odiv {
    width: 96%;
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
    margin-top: 1.1rem;
  }
  img {
    width: 8rem;
  }
  .img {
    margin-top: 4rem;
    width: 98%;
    height: 13.125rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    span {
      color: gray;
      font-size: 0.9rem;
    }
  }
}
</style>