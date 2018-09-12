<template>
  <div class="articleWritingSort">
    <span class="label"> 所属标签: </span>
    <div
      class="sortLabelPlace">
      <el-tag
        v-for="(item, index) in sortItems"
        :key="item.id"
        :disable-transitions="false"
        closable
        @close="removeSort(index)">
        {{ item.value }}
      </el-tag>
      <el-autocomplete
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        :fetch-suggestions="querySearch"
        size="small"
        @select="selectSort">
      </el-autocomplete>
      <el-button
        v-else
        class="button-new-tag"
        size="small"
        @click="showInput">
        添加分类标签
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    removeSort (index) {
      this.items.splice(index, 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    querySearch (inputValue, cb) {
      var results = inputValue ? this.getSort.filter(this.createFilter(inputValue)) : this.getSort
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (inputValue) {
      return (sort) => {
        return (sort.value.toLowerCase().indexOf(inputValue.toLowerCase()) === 0)
      }
    },
    selectSort (item) {
      this.items.push(item.id)
      this.inputVisible = false
      this.inputValue = ''
    }
  },
  computed: {
    article: function () {
      return this.$store.getters.article
    },
    getSort: function () {
      return this.$store.getters.sort
    },
    // 用来显示分类的数组
    sortItems: function () {
      var sortArr = []
      for (var i in this.getSort) {
        for (var j in this.items) {
          if (this.getSort[i].id == this.items[j]) {
            sortArr.push(this.getSort[i])
          }
        }
      }
      return sortArr
    }
  },
  watch: {
    items: function (val, oldVal) {
      this.$emit('transferSort', val)
    },
    article: function (val) {
      if (val._id) {
        val.sort[0] ? this.items = val.sort : ''
      } else {
        this.items = []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.articleWritingSort {
  margin-top: 20px;
  .label {
    font-weight: 600;
    font-size: 1.2em;
    color: #2c3e50;
    vertical-align: top;
  }
  .sortLabelPlace {
    margin-left: 10px;
    display: inline-block;
    width: 70%;
    .el-tag {
      margin-right: 10px;
      margin-bottom: 10px;
    }
    .button-new-tag {
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
      color: #2c3e50;
      margin-bottom: 10px;
    }
    .input-new-tag {
      width: 90px;
      margin-bottom: 10px;
    }
  }
}
</style>
