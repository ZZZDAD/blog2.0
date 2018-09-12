<template>
  <div class="adminHeader">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" @click='intoLogin'> 登陆中心 </el-menu-item>
      <el-submenu index="2">
        <template slot="title"> 管理中心 </template>
        <el-menu-item index="2.1" @click='intoArticle'> 文章 </el-menu-item>
        <el-menu-item index="2.2" @click='intoComment'> 留言 </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    intoLogin () {
      this.$router.push('/admin/login')
    },
    intoArticle(){
      this.$router.push('/admin/article')
    },
    intoComment () {
      this.$router.push('/admin/comment')
    }
  }
}
</script>

<style lang="less" scoped>
.adminHeader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
