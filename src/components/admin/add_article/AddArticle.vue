<template>
  <div class="addArticle" @click='addArticle'>
    <el-button type="text"> 添加文章 </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    addArticle () {
      this.$store.dispatch('GetArticle', '')
    }
  }
}
</script>

<style lang="less" scoped>
.addArticle {
  height: 20px;
  text-align: left;
  margin-bottom: 20px;
  .el-button {
    font-size: 1.2em;
  }
}
</style>
