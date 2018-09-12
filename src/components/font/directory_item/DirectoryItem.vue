<template>
  <div class="directoryItem" @click='intoArticle'>
    <h1 class="title"> {{ item.title }} </h1>
    <span class="time"> 修改日期：{{ item.modifyTime }} </span>
    <span class="time"> 发布日期：{{ item.publishTime }} </span>
    <br>
    <div class="sort-item" v-for="sort in sortItems" :key='sort'>
      <i class="iconfont icon-label"></i>
      {{ sort }}
    </div>
    <p class="intro"> {{ item.intro }} </p>
  </div>
</template>

<script>
export default {
  name:'directoryItem',
  props: ["item"],
  serverCacheKey: props => props.item._id + "::" + props.item.last_updated,
  methods: {
    intoArticle() {
      this.$router.push("article/" + this.item._id);
    }
  },
  computed: {
    getSort: function() {
      return this.$store.getters.sort;
    },
    sortItems: function() {
      var sortArr = [];
      for (var i in this.getSort) {
        for (var j in this.item.sort) {
          if (this.getSort[i].id == this.item.sort[j]) {
            sortArr.push(this.getSort[i].value);
          }
        }
      }
      return sortArr;
    }
  }
};
</script>

<style lang="less" scoped>
.directoryItem {
  width: 55%;
  min-width: 300px;
  border-bottom: 1px dashed #2c3e50;
  cursor: pointer;
  cursor: hand;
  @media only screen and(max-width: 600px) {
    margin: 0 auto;
  }
  .title {
    font-size: 1.3em;
    margin-bottom: 0px;
    &::before {
      content: "";
      border-left: 2px solid #2c3e50;
      height: 100px;
    }
  }
  .time {
    font-size: 0.7em;
    display: inline-block;
    margin-right: 20px;
    color: rgb(110, 110, 110);
    position: relative;
    left: 8px;
  }
  .sort-item {
    display: inline-block;
    margin-right: 5px;
    margin-left: 7px;
    i {
      position: relative;
      top: 2px;
    }
  }
  .intro {
    margin: 5px 0 15px 8px;
  }
}
</style>
