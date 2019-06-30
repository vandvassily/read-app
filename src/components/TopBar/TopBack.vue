<template>
  <div class="top-bar">
    <img class="back" src="@/assets/left_arrow.svg" alt="" @click="$router.go(-1)" />
    <div class="title">{{ title }}</div>
    <router-link to="/">
      <img class="my-center" src="@/assets/home.svg" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TopBack',
  props: {
    showTitle: {
      type: Boolean,
      default: true
    },
    title: String
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less" scoped>
.top-bar {
  position: relative;
  height: 0.5rem;
  width: 100%;
  background: #b93321;
  .back {
    position: absolute;
    left: 0.1rem;
    width: 0.3rem;
    height: 0.3rem;
    top: 0.1rem;
  }

  .title {
    padding: 0 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    color: #fff;
    font-size: 0.16rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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
