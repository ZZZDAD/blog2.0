<template>
  <div class="demoArea" v-html="content">

  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="less">
.demoArea {
  margin: 2px;
  padding: 4px;
  overflow: auto;
  width: 94%;
  height: 88%;
  * {
    margin: 0;
    color: #2c3e50;
  }
  img {
    width: 80%;
  }
  pre {
    background: rgba(200, 200, 200, 0.4);
    padding: 10px 10px 0px 10px;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
</style>
