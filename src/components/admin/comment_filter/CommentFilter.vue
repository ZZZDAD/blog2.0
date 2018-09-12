<template>
  <div class="commentFilter">
    <!-- sort -->
    <el-select
      v-model="sort"
      placeholder="分类"
      size='small'>
      <el-option
        v-for="item in sortItems"
        :key="item.id"
        :label="item.value"
        :value="item.id">
      </el-option>
    </el-select>
    <!-- article -->
    <el-select
      v-model="article"
      placeholder="文章"
      size='small'>
      <el-option
        v-for="item in articleItems"
        :key="item.id"
        :label="item.value"
        :value="item.id">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleItems: [
        { id: 1, value: 'node' }, { id: 2, value: 'mongodb' }
      ],
      sort: '',
      article: ''
    }
  },
  computed: {
    sortItems: function () {
      return this.$store.getters.sort
    },
  }
}
</script>

<style lang="less" scoped>
.commentFilter {
  .el-select {
    margin: 20px;
  }
}
</style>
