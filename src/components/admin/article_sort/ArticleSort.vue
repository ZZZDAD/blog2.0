<template>
  <div class="articleSort">
    <el-tag
      v-for="(item,index) in items"
      :key="item.id"
      closable
      :disable-transitions="false"
      @close="removeSort(index)">
      {{ item.value }}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="addSort"
      @blur="addSort"
    >
    </el-input>
    <el-button
      v-else class="button-new-tag"
      size="small"
      @click="showInput">
      + 添加新分类
    </el-button>
  </div>
</template>

<script>
import { add_sort, get_sort, remove_sort } from '@/api'

export default {
  data () {
    return {
      items: [],
      inputVisible: false,
      inputValue: ''
    };
  },
  methods: {
    // 移除分类标签
    removeSort (index) {
      remove_sort({
        id: this.items[index].id
      }).then(response => {
        if (response.data.code == 200) {
          this.$store.dispatch('GetSort')
          this.$message({
            showClose: true,
            message: '移除分类标签成功',
            type: 'success'
          })
        }
      })
      this.items.splice(index, 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      });
    },
    // 添加分类标签
    addSort () {
      let inputValue = this.inputValue
      if (inputValue) {
        add_sort({
          value: inputValue
        }).then(response => {
          const data = response.data
          if (data.code == 200) {
            this.items.push(data.data)
            console.log(data.data)
            this.$store.dispatch('GetSort')
          } else {
            console.error(data.message)
          }
        })
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  },
  mounted () {
    // 获取分类标签
    this.$store.dispatch('GetSort')
      .then(result => {
        this.items = result
      })
  }
}
</script>

<style lang="less" scoped>
.articleSort {
  text-align: left;
  width: 90%;
  padding: 10px;
  height: 65px;
  overflow: auto;
  .el-tag {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .button-new-tag {
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
  }
}
</style>
