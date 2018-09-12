<template>
  <div class="adminArticle">
    <div class="left">
      <ArticleSort></ArticleSort>
      <ArticleList></ArticleList>
    </div>
    <div class="right">
      <ArticleWriting></ArticleWriting>
    </div>
  </div>
</template>

<script>
import ArticleSort from '@/components/admin/article_sort/ArticleSort.vue'
import ArticleList from '@/components/admin/article_list/ArticleList.vue'
import ArticleWriting from '@/components/admin/article_writing/ArticleWriting.vue'

export default {
  components: {
    ArticleSort,
    ArticleList,
    ArticleWriting
  },
  mounted () {
    if (!this.$store.getters.token) {
      this.$router.push('/admin')
      this.$message({
        showClose: true,
        message: '获取权限失败',
        type: 'error'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.adminArticle {
  .left {
    float: left;
    width: 35%;
    min-width: 320px;
  }
  .right {
    overflow: hidden;
    min-width: 320px;
    padding: 10px;
    margin-left: 10px;
  }
}
</style>
