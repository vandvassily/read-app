<template>
  <div class="home">
    <div class="home-top">
      <TopBar />
      <SearchBar />
    </div>
    <div class="home-wrapper">
      <CategoryList :title="obj.category1.minor" :dataList="categoryList1" />
      <CategoryList :title="obj.category2.minor" :dataList="categoryList2" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryList from '@/components/CategoryList';
import TopBar from '@/components/TopBar';
import SearchBar from '@/components/SearchBar';
import { getHomeCategoryList } from '@/api';

export default {
  name: 'home',
  data() {
    return {
      bookTitle: '书籍类别',
      bookList: [],
      obj: {
        category1: {
          type: 'hot',
          major: '奇幻',
          minor: '西方奇幻',
          limit: 5
        },
        category2: {
          type: 'hot',
          major: '玄幻',
          minor: '异界大陆',
          limit: 5
        }
      },
      categoryList1: [],
      categoryList2: []
    };
  },
  created() {
    getHomeCategoryList(this.obj).then(resArray => {
      this.categoryList1 = resArray[0].books;
      this.categoryList2 = resArray[1].books;
    });
  },
  mounted() {},
  components: {
    TopBar,
    SearchBar,
    CategoryList
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  overflow: hidden;
}
.home-top {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: auto;
  background: #fff;
  z-index: 20;
}
.home-wrapper {
  margin-top: 0.88rem;
  background: #f4f4f4;
}
</style>
