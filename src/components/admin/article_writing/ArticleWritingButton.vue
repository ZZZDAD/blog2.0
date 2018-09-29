<template>
  <div class="articleButton">
    <!-- 保存 -->
    <el-button
      type="primary"
      :loading="saving"
      @click='save'
      size='small'
      v-if='!_id'>
      <i class="el-icon-document" v-show="!saving"></i>
      保存
    </el-button>
    <!-- 更新 -->
    <el-button
      type="primary"
      :loading="updating"
      @click='update'
      size='small'
      v-if='_id'>
      <i class="el-icon-refresh" v-show="!updating"></i>
      更新
    </el-button>

    <!-- 发布 -->
    <el-button
      type="primary"
      :loading="publishing"
      @click='publish'
      size='small'
      :disabled='!_id'
      v-if='!isPublish'>
      <i class="el-icon-upload" v-show="!publishing"></i>
      发布
    </el-button>

    <!-- 取消发布 -->
    <el-button
      type="primary"
      :loading="cancelPublishing"
      @click='cancelPublish'
      size='small'
      v-if='isPublish'>
      <i class="el-icon-circle-close-outline" v-show="!publishing"></i>
      取消发布
    </el-button>

    <!-- 移除 -->
    <el-button
      type="danger"
      :loading="removing"
      @click='remove'
      :disabled='!_id'
      size='small'>
      <i class="el-icon-delete" v-show="!removing"></i>
      移除
    </el-button>
  </div>
</template>

<script>
import { save_article, update_article, publish_article, cancel_publish_article, remove_article } from '@/api'

export default {
  props: ['title', 'sort', 'content'],
  data () {
    return {
      saving: false,
      updating: false,
      publishing: false,
      cancelPublishing: false,
      removing: false
    }
  },
  computed: {
    article: function () {
      return this.$store.getters.article
    },
    _id: function () {
      return this.article._id
    },
    isPublish: function () {
      return this.article.isPublish
    }
  },
  methods: {
    // 保存
    save () {
      this.$confirm('是否保存文章?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.saving = true
        let intro = this.content.split('<p>')[1].split('</p>')[0]
        save_article({
          title: this.title,
          sort: this.sort.join('-'),
          content: this.content,
          intro: intro
        }, this.$store.getters.token).then(response => {
          if (response.data.code == 200) {
            this.$message({
              showClose: true,
              message: '保存成功',
              type: 'success'
            })
            let id = response.data.data._id
            this.$store.dispatch('GetArticle', id)
            this.$store.dispatch('GetAllArticle')
          }
          this.saving = false
        })
      })
    },
    // 更新
    update () {
      this.$confirm('是否更新文章?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.updating = true
        let intro = this.content.split('<p>')[1].split('</p>')[0]
        update_article({
          _id: this._id,
          title: this.title,
          sort: this.sort.join('-'),
          content: this.content,
          intro: intro
        }, this.$store.getters.token).then(response => {
          if (response.data.code == 200) {
            this.$message({
              showClose: true,
              message: '更新成功',
              type: 'success'
            })
            this.$store.dispatch('GetArticle', this._id)
            this.$store.dispatch('GetAllArticle')
          }
          this.updating = false
        })
      })
    },
    // 发布
    publish () {
      this.$confirm('是否发布文章?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.publishing = true
        publish_article({
          _id: this._id
        }, this.$store.getters.token).then(response => {
          if (response.data.code == 200) {
            this.$message({
              showClose: true,
              message: '发布成功',
              type: 'success'
            })
            this.$store.dispatch('GetArticle', this._id)
            this.$store.dispatch('GetAllArticle')
          }
          this.publishing = false
        })
      })
    },
    // 取消发布
    cancelPublish () {
      this.$confirm('是否取消发布文章?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.cancelPublishing = true
        cancel_publish_article({
          _id: this._id
        }, this.$store.getters.token).then(response => {
          if (response.data.code == 200) {
            this.$message({
              showClose: true,
              message: '取消发布成功',
              type: 'success'
            })
            this.$store.dispatch('GetArticle', this._id)
            this.$store.dispatch('GetAllArticle')
          }
          this.cancelPublishing = false
        })
      })
    },
    // 移除
    remove () {
      this.$confirm('是否删除文章?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.removing = true
        remove_article({
          _id: this._id
        }, this.$store.getters.token).then(response => {
          if (response.data.code == 200) {
            this.$message({
              showClose: true,
              message: '移除成功',
              type: 'success'
            })
            this.$store.dispatch('GetArticle', '')
            this.$store.dispatch('GetAllArticle')
          }
          this.removing = false
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.articleButton {
  padding: 10px;
  text-align: right;
}
</style>
