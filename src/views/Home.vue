<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CatoryList :title="bookTitle" :dataList="bookList" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
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
  mounted() {
    getBookList().then(res => {
      this.bookList = res.bookLists;
    });
  },
  components: {
    HelloWorld,
    CatoryList
  }
};
</script>
