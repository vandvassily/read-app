<template>
  <div class="catory-list">
    <div class="title">{{ title }}</div>
    <div class="catory-list-item" v-for="item in dataList" v-bind:key="item.id">
      <img class="book-cover" src="@/assets/logo.png" alt="poster" />
      <div class="book-info">
        <div class="book-title">{{ item.name }}</div>
        <div class="book-desc">{{ item.name }}</div>
        <div class="book-viewer">{{ item.name }}</div>
      </div>
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
    font-size: 0.16rem; /* 20/100 */
    color: #42b983;
    width: 100%;
  }
  .catory-list-item {
    display: flex;
    width: 100%;
    padding: 0.1rem 0;
    height: 0.8rem;
    border-bottom: 1px solid #eeeeee;

    .book-cover {
      width: 0.625rem;
      height: 0.8rem;
    }
  }
  .book-info {
    flex: 1;
    margin-left: 0.2rem;
    position: relative;
    text-align: left;

    .book-title {
      color: #333;
      font-size: 0.14rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .book-desc {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 0.12rem;
      color: #999;
      line-height: 0.2rem;
    }

    .book-viewer {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
