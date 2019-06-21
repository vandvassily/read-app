<template>
  <div class="catory-list">
    <div class="title">{{ title }}</div>
    <div class="catory-list-item" v-for="item in dataList" v-bind:key="item.id">
      <img src="@/assets/logo.png" alt="poster" />
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatoryList',
  props: ['title', 'dataList']
};
</script>

<style lang="less" scoped>
.catory-list {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    text-align: left;
    font-size: 0.2rem; /* 20/100 */
    color: #42b983;
    width: 100%;
  }
}
</style>
