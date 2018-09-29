<template>
  <div class="articleList">
    <AddArticle></AddArticle>
    <div class="articleItems">
      <ArticleListItem
        v-for='item in articles'
        :key='item._id'
        :item='item'>
      </ArticleListItem>
    </div>
    <ArticlePagination></ArticlePagination>
  </div>
</template>

<script>
import AddArticle from '@/components/admin/add_article/AddArticle.vue'
import ArticleListItem from '@/components/admin/article_list_item/ArticleListItem.vue'
import ArticlePagination from '@/components/admin/article_pagination/ArticlePagination.vue'
import { all_article } from '@/api'

export default {
  components: {
    AddArticle,
    ArticleListItem,
    ArticlePagination
  },
  computed: {
    articles: function () {
      return this.$store.getters.all_article
    }
  },
  mounted () {
    this.$store.dispatch('GetAllArticle')
  }
}
</script>

<style lang="less" scoped>
.articleList {
  width: 90%;
  padding: 0 10px;
  .articleItems {
    height: 500px;
  }
}
</style>
