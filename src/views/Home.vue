<template>
  <div class="home">
    <CatoryList :title="bookTitle" :dataList="bookList" />
  </div>
</template>

<script>
// @ is an alias to /src
import CatoryList from '@/components/CatoryList';
import { getBookList } from '@/api';

export default {
  name: 'home',
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
    CatoryList
  }
};
</script>
