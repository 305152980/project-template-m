<template>
  <div class="layout-container">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item to="/home">
        <van-icon name="wap-home-o" slot="icon" />
        <span class="text">home</span>
      </van-tabbar-item>
      <van-tabbar-item to="/moduleA">
        <van-icon name="setting-o" slot="icon" />
        <span class="text">module-a</span>
      </van-tabbar-item>
      <van-tabbar-item to="/moduleB">
        <van-icon name="shopping-cart-o" slot="icon" />
        <span class="text">module-b</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.layout-container {
}
</style>
