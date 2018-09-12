<template>
  <div class="tableOfArticle" v-loading="loading">
    <ul>
      <li class="tableItem" v-for='(item,index) in table' :key='index' @click='jump(item.text)' :class="[
          {'h1':(item.id===1) },
          {'h2':(item.id===2)},
          {'h3':(item.id===3)},
          {'h4':(item.id===4)},
          {'h5':(item.id===5)},
          {'h6':(item.id===6)}]">
        <span>
          {{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      table: []
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.articleHtml) {
        this.getTables();
        clearTimeout(this.timer);
      }
    }, 21);
  },
  computed: {
    articleHtml() {
      return this.$store.getters.article.content;
    }
  },
  methods: {
    getTables() {
      this.loading = false;
      this.filterTitle(this.articleHtml, 1);
    },
    jump(content) {
      // 跳转内容
      this.$store.dispatch("TableJump", content);

      this.$store.dispatch("SetShowSidebar");
    },
    // 从文章内容中筛选出目录
    filterTitle(content, index) {
      if (index > 6) return;
      var _h = content.split("<h" + index + ">");
      if (!_h[1]) this.filterTitle(_h[0], index + 1);
      for (var i = 1; i < _h.length; i++) {
        var h = _h[i].split("</h" + index + ">");
        this.table.push({
          id: index,
          text: h[0]
        });
        this.filterTitle(h[1], index + 1);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.tableOfArticle {
  text-align: left;
  ul {
    list-style: none;
    padding: 0;
  }
  .tableItem {
    margin-top: 0.5em;
    cursor: pointer;
    cursor: hand;
    margin-bottom: 4px;
    line-height: 1.5em;
    opacity: 0.6;
  }
  .h1 {
    font-weight: 700;
    font-size: 1.1em;
    opacity: 1;
  }
  .h2 {
    span {
      padding-bottom: 1px;
      &:hover {
        border-bottom: 1px #2c3e50 solid;
        padding-bottom: 0px;
      }
    }
  }
  .h3 {
    span {
      font-size: 0.9em;
      margin-left: 1em;
    }
  }
  .h4,
  .h5,
  .h6 {
    span {
      font-size: 0.8em;
      margin-left: 2em;
    }
  }
}
</style>
