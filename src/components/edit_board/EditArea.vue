<template>
  <div class="editArea">
    <textarea
      v-model="contentValue"
      @input='inputContent'>
    </textarea>
  </div>
</template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      contentValue: this.content
    }
  },
  watch: {
    content: function (val, oldVal) {
      this.contentValue = val
    }
  },
  methods: {
    inputContent (e) {
      this.$emit('transferContent', e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
.editArea {
  width: 94%;
  height: 88%;
  textarea {
    font-weight: 500;
    font-size: 1.1em;
    display: inline-block;
    margin: 2px;
    padding: 4px;
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
    outline: none;
    overflow: auto;
    background: #2c3e50;
    color: white;
  }
}
</style>
