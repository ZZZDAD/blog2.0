<template>
  <div class="leaveComment">
    <el-form label-position="right" label-width="100px">
      <el-form-item label="昵称">
        <el-input
          v-model="name"
          clearable
          size='small'>
        </el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input
          v-model="mail"
          clearable
          size='small'>
        </el-input>
      </el-form-item>
      <el-form-item label="留言">
        <el-input
          v-model="message"
          type="textarea"
          class="textarea"
          clearable
          resize='none'>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button
      type="info"
      plain
      size='small'
      @click='leaveComment'>
      发表留言
    </el-button>
  </div>
</template>

<script>
import { post_comment } from '@/api'

export default {
  props: ['article'],
  data () {
    return {
      name: '',
      mail: '',
      message: ''
    }
  },
  methods: {
    leaveComment () {
      var email_reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
      if (this.name == '') {
        this.$message({
          showClose: true,
          message: '请问兄台怎么称呼？',
          type: 'warning'
        })
      }
      else if (!email_reg.test(this.mail)) {
        this.$message({
          showClose: true,
          message: '您的邮箱格式有误哟～',
          type: 'warning'
        })
      }
      else if (this.message == '') {
        this.$message({
          showClose: true,
          message: '你不留言，人家会认为你在向我表白的',
          type: 'warning'
        })
      }
      else {
        post_comment({
          article_id: this.$route.params.id,
          name: this.name,
          mail: this.mail,
          message: this.message
        }).then(response => {
          const data = response.data
          if (data.code == 200) {
            this.$message({
              showClose: true,
              message: '我已收到你的留言～',
              type: 'success'
            })
            this.$store.dispatch('GetArticleComment', this.$route.params.id)
          } else {
            this.$message({
              showClose: true,
              message: '可以转告我，服务器在开小差～',
              type: 'error'
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.leaveComment {
  .el-form-item {
    margin-bottom: 5px;
  }
  .el-input {
    width: 70%;
  }
  .textarea {
    width: 70%;
  }
  .el-button {
    display: block;
    margin: 0 auto;
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
