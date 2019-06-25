<template>
  <div class="home">
    <div class="home-top">
      <TopBar />
    </div>
    <div class="home-wrapper">
      <CatoryList :title="bookTitle" :dataList="bookList" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CatoryList from '@/components/CatoryList';
import TopBar from '@/components/TopBar';
// import { getBookList } from '@/api';

export default {
  name: 'home',
  data() {
    return {
      bookTitle: '书籍类别',
      bookList: []
    };
  },
  created() {
    // getBookList().then(res => {
    //   this.bookList = res.bookLists;
    // });
  },
  mounted() {},
  components: {
    TopBar,
    CatoryList
  }
};
</script>

<style lang="less" scoped>
.home-top {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}
.home-wrapper {
  margin-top: 0.5rem;
  background: #f4f4f4;
}
</style>
