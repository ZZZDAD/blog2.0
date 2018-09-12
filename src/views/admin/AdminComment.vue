<template>
  <div class="adminComment">
    <!-- <CommentFilter></CommentFilter> -->
    <CommentTable></CommentTable>
  </div>
</template>

<script>
import CommentFilter from '@/components/admin/comment_filter/CommentFilter.vue'
import CommentTable from '@/components/admin/comment_table/CommentTable.vue'

export default {
  components: {
    CommentFilter,
    CommentTable
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
.adminComment {
}
</style>
