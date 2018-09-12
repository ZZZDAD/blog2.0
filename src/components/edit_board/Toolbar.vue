<template>
  <div class="toolbar">
    <div class="left">
      <i
        class="iconfont icon-title"
        @click='title'>
      </i>
      <i
        class="iconfont icon-text"
        @click='text'>
      </i>
      <i
        class="iconfont icon-code"
        @click='code'>
      </i>
      <i
        class="iconfont icon-picture"
        @click='picture'>
      </i>
      <i
        class="iconfont icon-link"
        @click='link'>
      </i>
    </div>
    <div class="right">
      <i
        class="iconfont icon-edit"
        :class="{'noActive':(!isShowEdit)}"
        @click='edit'>
      </i>
      <i
        class="iconfont icon-demo"
        :class="{'noActive':(!isShowDemo)}"
        @click='demo'>
      </i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isShowEdit', 'isShowDemo'],
  methods: {
    title () {
      this.$emit('addElem', '<h1>  </h1>')
    },
    text () {
      this.$emit('addElem', '<p>  </p>')
    },
    code () {
      this.$emit('addElem', '<pre>  </pre>')
    },
    picture () {
      this.$emit('addElem', '<img src=""/>')
    },
    link () {
      this.$emit('addElem', '<a href="" target="_blank">  </a>')
    },
    edit () {
      this.$emit('showEdit')
    },
    demo () {
      this.$emit('showDemo')
    }
  }
}
</script>

<style lang="less" scoped>
.toolbar {
  border-bottom: 1px rgb(223, 221, 231) solid;
  overflow: hidden;
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  i {
    margin: 5px 10px;
    display: inline-block;
    cursor: pointer;
    cursor: hand;
    &.noActive{
      color: rgb(223, 221, 231);
    }
  }
}
</style>
