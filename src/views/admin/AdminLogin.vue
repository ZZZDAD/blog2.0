<template>
  <div class="adminLogin">
    <img src="http://blog-1253521382.cosgz.myqcloud.com/base/logo.png" class="logo">
    <div class="input">
      <el-input
        placeholder="username"
        v-model="username"
        class="username"
        size="small"
        clearable>
      </el-input>
      <el-input
        type='password'
        placeholder="password"
        v-model="password"
        class="password"
        size="small"
        clearable>
      </el-input>
    </div>
    <el-button
      type="primary"
      size="small"
      class="login-btn"
      @click='login'>
      Login
    </el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login () {
      if (this.username && this.password) {
        this.$store.dispatch('Login', {
          username: this.username,
          password: this.password
        }).then(reslut => {
          this.$router.push('article')
        }).catch(error => {
          this.$message({
            showClose: true,
            message: '账号或密码有误',
            type: 'error'
          })
        })
      } else {
        this.$message({
          showClose: true,
          message: '请输入账号和密码',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.adminLogin {
  .logo {
    margin-top: 50px;
  }
  .input {
    margin: 0 auto;
    width: 200px;
    .username,
    .password {
      margin-top: 10px;
    }
  }
  .login-btn {
    margin-top: 20px;
  }
}
</style>
