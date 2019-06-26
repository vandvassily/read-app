<template>
  <div class="search-bar">
    <router-link to="/about" class="search-link" tag="div">
      <img class="search-icon" src="@/assets/search.svg" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {},
  computed: {}
};
</script>

<style lang="less" scoped>
.search-bar {
  position: relative;
  width: 100%;
  height: 0.38rem;
  padding: 0.04rem 0.1rem;
  box-sizing: border-box;
  background: #fff;
  .search-link {
    position: relative;
    border-radius: 0.04rem;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background: #eee;
  }
  .search-icon {
    width: 0.2rem;
    height: 0.2rem;
    position: absolute;
    display: block;
    right: 0.1rem;
    top: 0.05rem;
  }
}
</style>
