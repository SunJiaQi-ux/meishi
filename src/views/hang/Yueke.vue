<template>
  <div>
    <header>
      <p>约课记录</p>
    </header>
    <nav>
      <ul>
        <li
          v-for="(item,index) in li"
          :key="index"
          @click="cut(index)"
          :class="{'sel':selone==index}"
        >{{item.name}}</li>
      </ul>
    </nav>
    <section>
      <div>
        <img src="http://localhost:8080/image/01.png" alt />
        <span v-if="isShow">还没有待上课记录哦</span>
        <span v-if="is">还没有上课记录哦</span>
        <span v-if="show">还没有取消上课记录哦</span>
        <button @click="router">立即约课</button>
      </div>
    </section>
  </div>
</template>

<script>
import "../../assets/rem";
export default {
  name:"Yueke",
  data() {
    return {
      li: [],
      selone: 0,
      isShow: true,
      is: false,
      show: false
    };
  },
  mounted() {
    this.$axios.get("/api/li.json").then(res => {
      this.li = res.data.li;
    });
  },
  methods: {
    cut(index) {
      this.selone = index;
      if (index == 1) {
        this.isShow = false;
        this.is = true;
        this.show = false;
      } else if (index == 0) {
        this.isShow = true;
        this.is = false;
        this.show = false;
      } else if (index == 2) {
        this.isShow = false;
        this.is = false;
        this.show = true;
      }
    },
    router() {
      this.$router.push({
        name: "oto"
      });
    }
  }
};
</script>

<style  lang="scss" scoped>
div{
  font-size: 0.3rem !important;
}
.sel {
  color: #eb6100;
  border-bottom: 1px solid #eb6100;
}
div {
  font-weight: 100;
}
header {
  width: 100%;
  height: 0.96rem;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.96rem;
}
nav {
  margin-top: 0.416rem;
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    li {
      height: 25px;
      line-height: 25px;
    }
  }
}
section {
  width: 100%;
  height: 540px;
  background: #f0f2f5;
  margin: 10px auto;
  div {
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    span {
      color: #bccbe5;
      font-size: 0.3rem;
    }
    button {
      background: #eb6100;
      border: none;
      color: white;
      width: 1.98rem;
      height: 0.512rem;
    }
    img {
      width: 4.6rem;
      margin-top: 0.96rem;
    }
  }
}
</style>