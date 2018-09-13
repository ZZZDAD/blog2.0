<template>
  <div class="editArea">
    <textarea v-model="contentValue" @input='inputContent'>
    </textarea>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      contentValue: this.content
    };
  },
  watch: {
    content: function(val, oldVal) {
      this.contentValue = val;
    }
  },
  methods: {
    inputContent(e) {
      this.$emit("transferContent", e.target.value);
    }
  }
};
</script>

<style lang="less" scoped>
.editArea {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  textarea {
    font-weight: 500;
    font-size: 1.1em;
    display: inline-block;
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
    outline: none;
    overflow: auto;
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }
}
</style>
