<template>
  <div class="top-bar">
    <img class="logo" src="@/assets/logo.png" alt="" />
    <img class="my-books" src="@/assets/shujia.svg" alt="" />
    <img class="my-center" src="@/assets/me.svg" alt="" />
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
  background: #eee;
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
