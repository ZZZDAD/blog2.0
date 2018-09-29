<template>
  <div class="fontHeader">
    <i class="iconfont icon-sidebar" @click='showSidebar'></i>
    <div class="title" @click='intoDirectory'>
      <img src="https://blog-1253521382.cosgz.myqcloud.com/base/logo.png" class="logo">
      <span class="text"> Zhang Da D's Blog </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showSidebar () {
      this.$store.dispatch('SetShowSidebar')
    },
    intoDirectory () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.fontHeader {
  border-bottom: solid 1px #e6e6e6;
  text-align: left;
  padding: 10px 20px;
  z-index: 99;
  background: white;
  min-width: 300px;
  .icon-sidebar {
    font-size: 1.2em;
    font-weight: 600;
    opacity: 0;
    @media only screen and(max-width: 600px) {
      opacity: 1;
    }
  }
  .title {
    display: inline-block;
    margin-left: 9%;
    cursor: pointer;
    cursor: hand;
  }
  .logo {
    margin-right: 5px;
    vertical-align: top;
    width: 25px;
    height: 25px;
  }
  .text {
    word-spacing: 0.2em;
    display: inline-block;
    font-size: 1.1em;
    font-weight: 600;
  }
}
</style>
