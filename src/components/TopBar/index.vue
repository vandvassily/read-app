<template>
  <div class="top-bar">
    <img class="logo" src="@/assets/logo.png" alt="" />
    <router-link to="/bookshelf">
      <img class="my-books" src="@/assets/shujia.svg" alt="" />
    </router-link>
    <router-link to="/center">
      <img class="my-center" src="@/assets/me.svg" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {},
  computed: {}
};
</script>

<style lang="less" scoped>
.top-bar {
  position: relative;
  height: 0.5rem;
  width: 100%;
  // background: #b83320;
  background: #b93321;
  .logo {
    position: absolute;
    left: 0.4rem;
    width: 0.4rem;
    height: 0.4rem;
    top: 0.05rem;
  }

  .my-books {
    position: absolute;
    top: 0.05rem;
    right: 0.8rem;
    width: 0.4rem;
    height: 0.4rem;
  }

  .my-center {
    position: absolute;
    top: 0.05rem;
    right: 0.2rem;
    width: 0.4rem;
    height: 0.4rem;
  }
}
</style>
