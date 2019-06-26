<template>
  <div class="home">
    <div class="home-top">
      <TopBar />
    </div>
    <div class="home-wrapper">
      <BookList :title="bookTitle" :dataList="bookList" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BookList from '@/components/BookList';
import TopBar from '@/components/TopBar';
import { getBookList } from '@/api';

export default {
  name: 'bookshelf',
  data() {
    return {
      bookTitle: '书籍类别',
      bookList: []
    };
  },
  created() {
    getBookList().then(res => {
      this.bookList = res.bookLists;
    });
  },
  mounted() {},
  components: {
    TopBar,
    BookList
  }
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
  margin-top: 0.5rem;
  background: #f4f4f4;
}
</style>
