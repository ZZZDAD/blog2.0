<template>
  <div class="demoArea" v-html="content">

  </div>
</template>

<script>
export default {
  props: ["content"]
};
</script>

<style lang="less">
.demoArea {
  padding: 10px;
  overflow: auto;
  font-size: 0.9rem;
  .imp {
    font-weight: 700;
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 10px 0 5px;
  }
  p {
    margin: 5px 0;
  }
  a {
    color: rgb(86, 156, 214);
  }
  pre {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    overflow: hidden;
    padding: 10px;
    overflow-x: scroll;
    code {
      // font-size: 10px!important;
      float: left;
      transform: translate(0, 0);
    }
  }
}
</style>
