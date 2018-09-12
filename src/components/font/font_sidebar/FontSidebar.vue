<template>
  <div class="fontSidebar" :class="{'show':(isShowSidebar)}">
    <div class="box">
      <img src="http://blog-1253521382.cosgz.myqcloud.com/base/avatar.jpeg" class="avatar">
      <div v-if="routeName=='FontDirectory'">
        <span class="contact"> wechat：694835329 </span>
        <!-- <span class="contact"> mail：694835329@qq.com </span> -->
      </div>
      <SortList v-if="routeName=='FontDirectory'" @transferSort='transferSort'>
      </SortList>
      <TableOfArticle v-if="routeName=='FontArticle'">
      </TableOfArticle>
    </div>
  </div>
</template>

<script>
import SortList from "@/components/font/sort_list/SortList.vue";
import TableOfArticle from "@/components/font/table_of_article/TableOfArticle.vue";

export default {
  components: {
    SortList,
    TableOfArticle
  },
  data() {
    return {
      routeName: ""
    };
  },
  computed: {
    isShowSidebar() {
      return this.$store.getters.show_sidebar;
    }
  },
  methods: {
    transferSort(sort) {
      this.$emit("transferSort", sort);
    }
  },
  watch: {
    $route(to) {
      this.routeName = to.name;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.routeName = this.$route.name;
    });
  }
};
</script>

<style lang="less" scoped>
.fontSidebar {
  @media only screen and(max-width: 600px) {
    background: white;
    z-index: 50;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 0px 5px;
    transition: left 0.4s ease-in-out;
  }
  .box {
    float: right;
    width: 200px;
    padding: 25px;
    .avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    .contact {
      display: block;
    }
  }
}
</style>
