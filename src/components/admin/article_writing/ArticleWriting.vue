<template>
  <div class="articleWriting">
    <!-- 标题 -->
    <ArticleWritingTitle
      @transferTitle='getTitle'>
    </ArticleWritingTitle>
    <!-- 标签 -->
    <ArticleWritingSort
      @transferSort='getSort'>
    </ArticleWritingSort>
    <!-- 正文编辑 -->
    <ArticleWritingContent
      @transferContent='getContent'>
    </ArticleWritingContent>
    <!-- 底部按钮 -->
    <ArticleWritingButton
      :title='title'
      :sort='sort'
      :content='content'>
    </ArticleWritingButton>
  </div>
</template>

<script>
import ArticleWritingTitle from './ArticleWritingTitle.vue'
import ArticleWritingSort from './ArticleWritingSort.vue'
import ArticleWritingContent from './ArticleWritingContent.vue'
import ArticleWritingButton from './ArticleWritingButton.vue'
import { get_article } from '@/api'

export default {
  components: {
    ArticleWritingTitle,
    ArticleWritingSort,
    ArticleWritingContent,
    ArticleWritingButton
  },
  data () {
    return {
      title: '',
      sort: [],
      content: ''
    }
  },
  methods: {
    getTitle (title) {
      this.title = title
    },
    getSort (sort) {
      this.sort = sort
    },
    getContent (content) {
      this.content = content
    }
  }
}
</script>

<style lang="less" scoped>
.articleWriting {
  text-align: left;
}
</style>
