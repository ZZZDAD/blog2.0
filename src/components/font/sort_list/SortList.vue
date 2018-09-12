<template>
  <div class="sortList">
    <span v-for="(item,index) in items" :key="item.id" @click='clickSort(index)'>
      <el-tag type="info" :class="{'active':(activeItems.indexOf(item) != -1)}">
        {{ item.value }}
      </el-tag>
    </span>
  </div>
</template>

<script>
export default {
  name: "sortList",
  serverCacheKey: "sortList",
  data() {
    return {
      activeItems: []
    };
  },
  methods: {
    // 点击分类标签，将分类标签高亮
    clickSort(index) {
      var item = this.items[index];
      var activeItems = this.activeItems;
      if (activeItems.indexOf(item) == -1) {
        activeItems.push(item);
      } else {
        activeItems.splice(activeItems.indexOf(item), 1);
      }
      if (this.activeItems[0]) {
        const sortArr = [];
        for (var i in this.activeItems) {
          sortArr.push(this.activeItems[i].id);
        }
        this.$store.dispatch("GetPublishedArticle", sortArr);
      } else {
        this.$store.dispatch("GetPublishedArticle");
      }
    }
  },
  computed: {
    items: function() {
      return this.$store.getters.sort;
    }
  },
  watch: {
    activeItems: function(val) {
      this.$emit("transferSort", val);
    }
  },
  mounted() {
    this.$store.dispatch("GetSort");
  }
};
</script>

<style lang="less" scoped>
.sortList {
  text-align: left;
  margin-top: 10px;
  @media only screen and (min-height: 400px) and(max-height: 500px) {
    height: 120px;
  }
  @media only screen and (min-height: 500px) and(max-height: 600px) {
    height: 220px;
  }
  @media only screen and (min-height: 600px) and(max-height: 700px) {
    height: 320px;
  }
  @media only screen and (min-height: 700px) and( max-height: 800px) {
    height: 420px;
  }
  @media only screen and (min-height: 800px) and( max-height: 900px) {
    height: 520px;
  }
  @media only screen and (min-height: 900px) and( max-height: 1100px) {
    height: 620px;
  }
  .el-tag {
    margin-left: 10px;
    margin-top: 10px;
    cursor: pointer;
    cursor: hand;
    @media only screen and(min-width: 600px) {
      &:hover {
        background: #2c3e50;
        opacity: 0.6;
        color: white;
      }
    }
    &.active {
      background: #2c3e50;
      color: white;
      opacity: 1;
    }
  }
}
</style>
