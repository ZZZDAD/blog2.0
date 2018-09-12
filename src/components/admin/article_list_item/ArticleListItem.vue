<template>
  <div class="articleListItem" @click='getArticle'>
    <span class="title"> {{ item.title }} </span>
    <span class="publishState">
      <span v-if="item.isPublish" class="yes"> 已发布 </span>
      <span v-else class="no"> 未发布 </span>
    </span>
    <span
      class="sort"
      v-for="(item,index) in sortItems"
      :key='index'>
      <i class="iconfont icon-label"></i>
      {{ item }}
    </span>
    <span class="modifyTime"> 最近修改时间：{{ item.modifyTime }} </span>
    <span class="publishTime"> 发表时间：{{ item.publishTime }} </span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    getArticle () {
      this.$store.dispatch('GetArticle', this.item._id)
    }
  },
  computed: {
    getSort: function () {
      return this.$store.getters.sort
    },
    sortItems: function () {
      var sortArr = []
      for (var i in this.getSort) {
        for (var j in this.item.sort) {
          if (this.getSort[i].id == this.item.sort[j]) {
            sortArr.push(this.getSort[i].value)
          }
        }
      }
      return sortArr
    }
  }
}
</script>

<style lang="less" scoped>
.articleListItem {
  padding: 5px 10px;
  margin-bottom: 5px;
  width: 90%;
  font-weight: 700;
  // background: rgba(44, 62, 80, 0.2);
  border: 1px rgba(44, 62, 80, 0.5) solid;
  text-align: right;
  cursor: pointer;
  cursor: hand;
  .title {
    display: block;
    text-align: left;
    font-size: 1.2em;
  }
  .publishState {
    font-size: 0.7em;
    float: left;
    .yes {
      color: green;
    }
    .no {
      color: red;
    }
  }
  .sort {
    .icon-label {
      position: relative;
      top: 2px;
    }
  }
  .modifyTime,
  .publishTime {
    display: block;
    font-size: 0.8em;
  }
}
</style>
