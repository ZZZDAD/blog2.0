<template>
    <div class="fontDirectory">
      <DirectoryItem v-for="item in items" :key='item._id' :item='item' v-loading="loading">
      </DirectoryItem>
    </div>
</template>

<script>
import DirectoryItem from "@/components/font/directory_item/DirectoryItem.vue";

export default {
  asyncData({ store }) {
    return store.dispatch("GetPublishedArticle");
  },
  components: {
    DirectoryItem
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    items: function() {
      return this.$store.getters.published_article;
    }
  },
  mounted() {
    this.loading = false;
  }
};
</script>


<style lang="less" scoped>
.wrapper.fontDirectory{
  // height: 100%;
}
</style>