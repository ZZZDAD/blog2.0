<template>
  <div class="articleComment">
    <CommentList></CommentList>
    <LeaveComment></LeaveComment>
  </div>
</template>

<script>
import CommentList from '@/components/font/comment_list/CommentList.vue'
import LeaveComment from '@/components/font/leave_comment/LeaveComment.vue'

export default {
  components: {
    CommentList,
    LeaveComment
  }
}
</script>

<style lang="less" scoped>
.articleComment {
  overflow: hidden;
  .el-button {
    @media only screen and(min-width: 600px) {
      &:hover {
        background: #2c3e50;
        opacity: 0.6;
        color: white;
      }
    }
  }
}
</style>
