<template>
  <div class="admin">
    <AdminHeader></AdminHeader>
    <div class="work">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/admin_header/AdminHeader.vue'

export default {
  components: {
    AdminHeader
  }
}
</script>

<style lang="less" scoped>
.admin {
  .work {
    // position: fixed;
    // top: 60px;
    // left: 0;
    // right: 0;
    // bottom: 0;
    margin-top: 60px;
  }
}
</style>
