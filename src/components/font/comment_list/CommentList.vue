<template>
  <div class="commentList" v-loading="loading">
    <span class="title">
      留言列表
    </span>
    <div class="tip" v-if="!items[0]">
      <span class="text"> 暂时还没有留言哟～ </span>
      <span class="text"> 来留下你的足迹吧～ </span>
    </div>
    <CommentListItem
      v-for='item in items'
      :key='item._id'
      :item='item'>
    </CommentListItem>
  </div>
</template>

<script>
import CommentListItem from '@/components/font/comment_list_item/CommentListItem.vue'

export default {
  data () {
    return {
      loading: true
    }
  },
  components: {
    CommentListItem
  },
  computed: {
    items: function () {
      return this.$store.getters.comment
    }
  },
  mounted () {
    var id = this.$route.params.id
    this.$store.dispatch('GetArticleComment', id)
      .then(result => {
        this.loading = false
      })
  }
}
</script>

<style lang="less" scoped>
.commentList {
  padding: 20px;
  width: 80%;
  min-width: 300px;
  @media only screen and(max-width: 600px) {
    margin: 0 auto;
  }
  .title {
    font-weight: 600;
    font-size: 0.8em;
  }
  .tip {
    border: 1px rgba(44, 62, 80, 0.5) solid;
    font-size: 0.8em;
    padding: 5px 10px;
    .text {
      display: block;
      text-align: center;
    }
  }
}
</style>
