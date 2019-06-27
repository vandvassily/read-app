<template>
  <div class="category-list">
    <div class="title">{{ title }}</div>
    <div class="category-list-item" v-for="item in fitlerDataList" v-bind:key="item.id">
      <img class="book-cover" :src="item.cover" alt="poster" />
      <div class="book-info">
        <div class="book-title">{{ item.title }}</div>
        <div class="book-desc">{{ item.shortIntro }}</div>
        <div class="book-viewer">人气 {{ item.latelyFollower }} | 留存率 {{ item.retentionRatio }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '@/utils';

export default {
  name: 'CategoryList',
  props: {
    title: String,
    hasAuthor: Boolean,
    dataList: Array
  },
  computed: {
    fitlerDataList: function() {
      let dataList = this.dataList;
      //在使用filter时需要注意的是，前面调用的是需要使用filter的数组，而给filter函数传入的是数组中的每个item，也就是说filter里面的函数，是每个item要去做的，并将每个结果返回。
      return dataList.filter(function(item) {
        item.cover = utils.staticPath + item.cover;
        return item;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.category-list {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.1rem;
  margin-bottom: 0.2rem;
  .title {
    text-align: left;
    font-size: 0.16rem;
    color: #42b983;
    width: 100%;
    font-weight: 600;
    line-height: 0.24rem;
    padding-left: 0.04rem;
    border-left: 4px solid #42b983;
  }
  .category-list-item {
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
      overflow: hidden;
      text-overflow: ellipsis;
      /* autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 2;
      font-size: 0.12rem;
      color: #999;
      line-height: 0.2rem;
      max-height: 0.4rem;
    }

    .book-viewer {
      position: absolute;
      left: 0;
      bottom: 0;
      color: #666;
      font-size: 0.14rem;
    }
  }
}
</style>
