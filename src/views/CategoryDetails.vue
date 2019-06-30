<template>
  <div>
    <TopBack :title="title" />
    <section class="wrapper">
      <CategoryList :title="title" :dataList="dataList" :showTitle="false" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryList from '@/components/CategoryList';
import TopBack from '@/components/TopBar/TopBack';
import { getCategoryList } from '@/api';
// import TopBar from '@/components/TopBar';
// import SearchBar from '@/components/SearchBar';

export default {
  name: 'CategoryDetails',
  data() {
    return {
      dataList: [],
      title: this.$route.query.major || this.$route.query.minor
    };
  },
  created() {
    getCategoryList({
      major: this.$route.query.major,
      limit: 30
    }).then(res => {
      this.dataList = res.books;
    });
  },
  mounted() {},
  components: {
    TopBack,
    // SearchBar,
    CategoryList
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  background: #fff;
}
</style>
