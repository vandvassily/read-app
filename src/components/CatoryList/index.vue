<template>
  <div class="catory-list">
    <div class="title">{{ title }}</div>
    <div class="catory-list-item" v-for="item in fitlerDataList" v-bind:key="item.id">
      <img class="book-cover" :src="item.cover" alt="poster" />
      <div class="book-info">
        <div class="book-title">{{ item.title }}</div>
        <div class="book-desc">{{ item.desc }}</div>
        <div class="book-viewer">{{ item.collectorCount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const staticPath = 'http://statics.zhuishushenqi.com';

export default {
  name: 'CatoryList',
  props: ['title', 'dataList'],
  computed: {
    fitlerDataList: function() {
      let dataList = this.dataList;
      //在使用filter时需要注意的是，前面调用的是需要使用filter的数组，而给filter函数传入的是数组中的每个item，也就是说filter里面的函数，是每个item要去做的，并将每个结果返回。
      return dataList.filter(function(item) {
        item.cover = staticPath + item.cover;
        return item;
      });
    }
  }
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
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
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
    }
  }
}
</style>
