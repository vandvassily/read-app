<template>
  <div class="category-list">
    <div v-if="showTitle" class="title">{{ title }}</div>
    <router-link :to="'/book/' + item._id" tag="div" class="category-list-item" v-for="item in fitlerDataList" v-bind:key="item._id">
      <img class="book-cover" :src="item.cover" alt="poster" />
      <div class="book-info">
        <div class="book-title">{{ item.title }}</div>
        <div v-if="hasAuthor" class="book-author">{{ item.author }}</div>
        <div class="book-desc" :class="hasAuthor ? 'line-one' : 'line-two'">{{ item.shortIntro }}</div>
        <div class="book-viewer">人气 {{ item.latelyFollower }} | 留存率 {{ item.retentionRatio }}%</div>
      </div>
    </router-link>
    <router-link v-if="showMore" :to="{ name: 'categoryDetails', query: { major } }" class="look-more">查看更多></router-link>
  </div>
</template>

<script>
import utils from '@/utils';

export default {
  name: 'CategoryList',
  props: {
    title: String,
    hasAuthor: Boolean,
    showTitle: {
      type: Boolean,
      default: true
    },
    major: {
      type: String,
      default: '奇幻'
    },
    showMore: {
      type: Boolean,
      default: false
    },
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
  padding: 0.1rem 0.1rem 0;
  margin-bottom: 0.2rem;
  background: #fff;
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
    .book-author {
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #999;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .book-desc {
      padding: 0.02rem 0 0;
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

    .line-one {
      -webkit-line-clamp: 1;
    }

    .book-viewer {
      position: absolute;
      left: 0;
      bottom: 0;
      color: #666;
      font-size: 0.14rem;
    }
  }

  .look-more {
    line-height: 0.4rem;
    font-size: 0.16rem;
    color: #42b983;
    text-decoration: none;
  }
}
</style>
