<template>
  <div class="commentListItem">
    <span class="name">
      {{ item.name }}
    </span>
    <span class="time">
      {{ item.time }}
    </span>
    <span class="message">
      {{ item.message }}
    </span>
  </div>
</template>

<script>
export default {
  name: "commentListItem",
  props: {
    item: {
      type: Object,
      reqiured: true
    }
  },
  serverCacheKey: props => props.item._id + "::" + props.item.last_updated
};
</script>

<style lang="less" scoped>
.commentListItem {
  min-height: 50px;
  padding: 5px 10px;
  border: 1px rgba(44, 62, 80, 0.5) solid;
  font-size: 0.8em;
  margin-bottom: 10px;
  .name {
    font-weight: 700;
    display: block;
  }
  .time {
    font-size: 0.8em;
  }
  .message {
    display: block;
    font-size: 0.9em;
  }
}
</style>
