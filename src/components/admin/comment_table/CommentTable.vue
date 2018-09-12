<template>
  <div class="commentTable" v-loading="loading">
    <el-table
      :data="commentItems"
      height="550"
      border>
      <el-table-column
        prop="article"
        label="博文"
        width="250"
        align='left'>
      </el-table-column>
      <el-table-column
        prop="name"
        label="昵称"
        width="100"
        align='left'>
      </el-table-column>
      <el-table-column
        prop="mail"
        label="邮箱"
        width="180"
        align='left'>
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        width="150"
        align='left'>
      </el-table-column>
      <el-table-column
        prop="message"
        label="留言"
        min-width="250"
        align='left'>
      </el-table-column>
      <el-table-column
        label="操作"
        width="180"
        align='left'>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="reply(scope.$index, scope.row)"> 回复 </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="remove(scope.$index, scope.row)"> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { get_article, remove_comment } from '@/api'

export default {
  data () {
    return {
      loading: true,
      commentItems: []
    }
  },
  methods: {
    reply (index, row) {
      console.log(index, row)
    },
    remove (index, row) {
      this.$confirm('是否移除该留言?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        remove_comment({
          _id: row._id
        }).then(response => {
          const data = response.data
          if (data.code == 200) {
            this.$store.dispatch('GetAllComment')
            this.$message({
              showClose: true,
              type: 'success',
              message: '移除成功'
            })
          }
        })
      })
    }
  },
  computed: {
    getComment: function () {
      return this.$store.getters.comment
    }
  },
  watch: {
    getComment: function (val) {
      var newArr = []
      var self = this
      for (var i in val) {
        (function (i) {
          var item = val[i]
          get_article(val[i].article_id).then(response => {
            item.article = response.data.data.title
            newArr.push(item)
            if (i == val.length - 1) {
              self.commentItems = newArr
            }
          })
        })(i)
      }
    }
  },
  mounted () {
    this.$store.dispatch('GetAllComment')
      .then(result => {
        if (result[0]) {
          var newArr = []
          var self = this
          for (var i in result) {
            (function (i) {
              var item = result[i]
              get_article(result[i].article_id).then(response => {
                item.article = response.data.data.title
                newArr.push(item)
                if (i == result.length - 1) {
                  self.commentItems = newArr
                  self.loading = false
                }
              })
            })(i)
          }
        } else {
          this.loading = false
        }
      })
  }
}
</script>

<style lang="less" scoped>
.commentTable {
  .el-table {
    width: 95%;
    display: block;
    margin: 0 auto;
  }
}
</style>
