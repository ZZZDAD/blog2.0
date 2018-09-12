<template>
  <div class="editBoard">
    <!-- 工具栏 -->
    <Toolbar
      @addElem='addElem'
      @showEdit='showEdit'
      @showDemo='showDemo'
      :isShowEdit='isShowEdit'
      :isShowDemo='isShowDemo'>
    </Toolbar>
    <!-- 编辑区 -->
    <div
      class="edit-area"
      :class="{'only-edit':(!isShowDemo)}"
      v-if='isShowEdit'>
      <EditArea
        @transferContent='getContent'
        :content='content'>
      </EditArea>
    </div>
    <!-- 展示区 -->
    <div
      class="demo-area"
      v-if='isShowDemo'>
      <DemoArea
        :content='content'>
      </DemoArea>
    </div>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import EditArea from './EditArea.vue'
import DemoArea from './DemoArea.vue'

export default {
  components: {
    Toolbar,
    EditArea,
    DemoArea
  },
  data () {
    return {
      isShowEdit: true,
      isShowDemo: true,
      content: ''
    }
  },
  methods: {
    addElem (elem) {
      this.content = this.content + elem
    },
    showEdit () {
      this.isShowEdit = !this.isShowEdit
    },
    showDemo () {
      this.isShowDemo = !this.isShowDemo
    },
    getContent (content) {
      this.content = content
    }
  },
  computed: {
    article: function () {
      return this.$store.getters.article
    }
  },
  watch: {
    content: function (val, oldVal) {
      this.$emit('transferContent', val)
    },
    article: function (val) {
      this.content = val.content
    }
  }
}
</script>

<style lang="less" scoped>
.editBoard {
  border: 1px rgb(223, 221, 231) solid;
  border-radius: 4px;
  overflow: hidden;
  height: 450px;
  .edit-area {
    float: left;
    border-right: 1px rgb(223, 221, 231) solid;
    width: 50%;
    height: 100%;
    background: #2c3e50;
    &.only-edit {
      width: 100%;
    }
  }
  .demo-area {
    overflow: auto;
    float: left;
    width: 49%;
    height: 100%;
  }
}
</style>
