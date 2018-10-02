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
    margin-top: 60px;
  }
}
</style>
