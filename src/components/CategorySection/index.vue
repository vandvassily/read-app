<template>
  <div class="category-section">
    <div class="section-name">
      {{ title | filterTitle }}
    </div>
    <div class="cate-list">
      <div class="cate-item" v-for="item in dataList" :key="item.name">
        <p class="cate-name">{{ item.name }}</p>
        <p class="books-num">{{ item.bookCount }}</p>
      </div>
    </div>
    <router-link v-if="showMore" :to="{ name: 'categoryDetails', query: { major } }" class="look-more">查看更多></router-link>
  </div>
</template>

<script>
export default {
  name: 'CategorySection',
  props: {
    title: String,
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
  computed: {},
  filters: {
    filterTitle: function(value) {
      if (!value) return '男生';
      const array = {
        male: '男生',
        female: '女生',
        picture: '漫画',
        press: '出版'
      };
      return array[value];
    }
  }
};
</script>

<style lang="less" scoped>
.category-section {
  position: relative;
  background: #fff;

  .section-name {
    padding: 0 0.2rem;
    font-size: 0.12rem;
    line-height: 0.4rem;
    height: 0.4rem;
    text-align: left;
    color: #999;
  }
  .cate-list {
    display: grid;
    border-top: 0.01rem solid #f8f8f8;
    grid-template-columns: repeat(auto-fill, 33.33%);
    grid-template-rows: auto;
  }
  .cate-item {
    border-right: 0.01rem solid #f8f8f8;
    border-bottom: 0.01rem solid #f8f8f8;

    .cate-name {
      color: #333;
      font-weight: 700;
      font-size: 0.16rem;
    }
    .books-num {
      color: #ccc;
      font-size: 0.14rem;
    }
  }
}
</style>
