<template>
  <div class="fontArticle" v-loading="loading" @touchstart='hideSidebar' @scroll="hideSidebar">
    <div class="articleHtml" v-html="articleHtml">
    </div>
    <ArticleComment v-show='!loading'>
    </ArticleComment>
  </div>
</template>

<script>
import ArticleComment from "@/components/font/article_comment/ArticleComment.vue";
import Code from "@/components/code/Code.vue";

export default {
  asyncData({ store, route }) {
    return store.dispatch("GetArticle", route.params.id);
  },
  components: {
    ArticleComment,
    Code
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    articleHtml() {
      return this.$store.getters.article.content;
    }
  },
  mounted() {
    this.loading = false;

    // pre监听事件
    const pres = document.querySelectorAll("pre");
    for (let i in pres) {
      var reg = /^\d+$/;
      if (reg.test(pres[i])) {
        break;
      }

      let codeElem = pres[i].children[0];
      codeElem.style.transform = "translate(0px, 0px)";
      let width = codeElem.offsetWidth - pres[i].offsetWidth + 20;
      let startX = 0; // 此次触摸的初始 X 位置
      let currX = 0; // 当前触摸 X 位置
      let moveDistance = 0; // 此次触摸的 X 位移
      let lastMoveDistance = 0; // 上一次触摸的 X 位移

      if (codeElem) {
        codeElem.addEventListener("touchstart", e => {
          startX = e.changedTouches[0].clientX;
        });
        codeElem.addEventListener("touchend", e => {
          lastMoveDistance = moveDistance;
          moveDistance = 0;
        });

        codeElem.addEventListener("touchmove", e => {
          if (moveDistance <= 0) {
            currX = e.changedTouches[0].clientX;

            moveDistance = currX - startX + lastMoveDistance;

            if (moveDistance > 0) {
              moveDistance = 0;
            }
            if (moveDistance <= 0 - width) {
              moveDistance = 0 - width;
            }
            codeElem.style.transform = `translate(${moveDistance}px, 0)`;
          } else {
            codeElem.style.transform = `translate(${moveDistance}px, 0)`;
          }
        });
      }
    }
  },
  methods: {
    hideSidebar() {
      if (this.$store.getters.show_sidebar == true) {
        this.$store.dispatch("SetShowSidebar");
      }
    }
  }
};
</script>

<style lang="less">
.fontArticle {
  .articleHtml {
    font-size: 0.9rem;
    width: 80%;
    @media only screen and(max-width: 600px) {
      width: 100%;
    }
    .imp {
      font-weight: 700;
    }
    h1,
    h2,
    h3,
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
        float: left;
        transform: translate(0, 0);
      }
    }
  }
}
</style>
