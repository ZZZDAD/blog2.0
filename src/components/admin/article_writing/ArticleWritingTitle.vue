<template>
  <div class="articleWritingTitle">
    <span class="label"> 文章标题: </span>
    <el-input
      type="text"
      v-model="title"
      size='small'
      clearable>
    </el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  computed: {
    article: function () {
      return this.$store.getters.article
    }
  },
  watch: {
    title: function (val) {
      this.$emit('transferTitle', val)
    },
    article: function (val) {
      this.title = val.title
    }
  }
}
</script>

<style lang="less" scoped>
.articleWritingTitle {
  .label {
    font-weight: 600;
    font-size: 1.2em;
    color: #2c3e50;
  }
  .el-input {
    width: 250px;
    font-size: 1.1em;
    font-weight: 500;
    margin-left: 10px;
    color: #2c3e50;
  }
}
</style>
