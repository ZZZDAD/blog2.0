<template>
  <div class="font">
    <!-- header -->
    <FontHeader></FontHeader>
    <!-- body -->
    <div style="margin-top:45px;">
      <!-- sidebar -->
      <FontSidebar></FontSidebar>
      <!-- directory / article -->
      <Scroll class="wrapper" v-if="model===0">
        <div class="content">
          <router-view></router-view>
        </div>
      </Scroll>

      <div class="wrapper" v-if="model===1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import FontHeader from "@/components/font/font_header/FontHeader.vue";
import FontSidebar from "@/components/font/font_sidebar/FontSidebar.vue";
import Scroll from "@/components/scroll/Scroll.vue";

export default {
  components: {
    FontHeader,
    FontSidebar,
    Scroll
  },
  data() {
    return {
      sort: [],
      model: -1
    };
  },
  mounted() {
    document.body.clientWidth > 600 ? (this.model = 1) : (this.model = 0);
  }
};
</script>

<style lang="less">
.font {
  .fontHeader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .fontSidebar {
    float: left;
    min-width: 250px;
    max-width: 400px;
    width: 40%;
    overflow-y: auto;
    @media only screen and(max-width: 600px) {
      position: fixed;
      top: 47px;
      bottom: 0 !important;
      left: -300px;
      &.show {
        left: 0px;
      }
    }
  }
  .wrapper {
    position: fixed;
    top: 50px;
    bottom: 10px;
    left: 40%;
    right: 0px;
    overflow-y: scroll;
    padding-top: 10px;
    @media only screen and(max-width: 600px) {
      padding-top: 0px;
      left: 30px;
      right: 30px;
      transition: left 0.4s ease-in-out;
      .content {
        padding-top: 10px;
      }
    }
  }
}
</style>
