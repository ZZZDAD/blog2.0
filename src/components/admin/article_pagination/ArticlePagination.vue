<template>
  <div class="articlePagination">
    <el-pagination
      small
      background
      layout="prev, pager, next"
      :page-size='5'
      :page-count="page_count"
      @current-change='intoPage'>
    </el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    intoPage (page) {
      this.$store.dispatch('GetPage', page)
      this.$store.dispatch('GetAllArticle')
    }
  },
  computed: {
    page_count: function () {
      return this.$store.getters.page_count
    }
  }
}
</script>

<style lang="less" scoped>
.articlePagination {
  margin-top: 10px;
  width: 95%;
  position: relative;
  left: -10px;
}
</style>
