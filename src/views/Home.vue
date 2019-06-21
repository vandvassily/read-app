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

export default {
  name: 'home',
  data() {
    return {
      bookTitle: '书籍类别',
      bookList: [
        {
          id: 1,
          name: '奇幻'
        },
        {
          id: 2,
          name: '玄幻'
        }
      ]
    };
  },
  components: {
    HelloWorld,
    CatoryList
  }
};
</script>
