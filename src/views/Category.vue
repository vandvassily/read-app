<template>
  <div>
    <TopBack />
    <section class="wrapper">
      <CategorySection :title="'male'" :dataList="dataObj.male" />
      <CategorySection :title="'female'" :dataList="dataObj.female" />
      <CategorySection :title="'picture'" :dataList="dataObj.picture" />
      <CategorySection :title="'press'" :dataList="dataObj.press" />
    </section>
    <!-- <CategoryList :title="obj.category2.minor" :dataList="categoryList2" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import CategorySection from '@/components/CategorySection';
import TopBack from '@/components/TopBar/TopBack';
// import SearchBar from '@/components/SearchBar';
import { getCategories } from '@/api';

export default {
  name: 'home',
  data() {
    return {
      dataObj: {}
    };
  },
  created() {
    getCategories().then(res => {
      if (res.ok) this.dataObj = res;
    });
  },
  mounted() {},
  components: {
    TopBack,
    // SearchBar,
    CategorySection
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.wrapper {
  background: #f4f4f4;
}
</style>
