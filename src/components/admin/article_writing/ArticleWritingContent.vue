<template>
  <div class="articleWritingContent">
    <EditBoard
      @transferContent='getContent'>
    </EditBoard>
  </div>
</template>

<script>
import EditBoard from '@/components/edit_board/EditBoard.vue'

export default {
  components: {
    EditBoard
  },
  data () {
    return {
      text: null
    }
  },
  methods: {
    getContent (content) {
      this.$emit('transferContent', content)
    }
  }
}
</script>

<style lang="less" scoped>
.articleWritingContent {
  margin-top: 20px;
}
</style>
