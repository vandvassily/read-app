<template>
  <div>
    <TopBack :title="'书籍详情'" />
    <section class="wrapper">
      <div>
        <div class="book-details">
          <img class="book-cover" :src="dataObj.cover | filterImgPath" alt="poster" />
          <div class="book-info">
            <div class="book-title">{{ dataObj.title }}</div>
            <div class="book-author">
              <span>{{ dataObj.author }}</span>
              <span> | {{ dataObj.minorCate }} | {{ dataObj.wordCount }}</span>
            </div>
            <div class="book-desc" :class="'line-two'">{{ dataObj.shortIntro }}</div>
            <div class="book-viewer">人气 {{ dataObj.latelyFollower }} | 留存率 {{ dataObj.retentionRatio }}%</div>
          </div>
        </div>
        <div class="read-link">
          <div class="half">
            <div class="button primary">加入书架</div>
          </div>
          <div class="half">
            <div class="button red">开始阅读</div>
          </div>
        </div>
        <div class="reader-data">
          <div class="third-part">
            <p>追人气</p>
            <p>{{ dataObj.latelyFollower }}</p>
          </div>
          <div class="third-part">
            <p>读者留存率</p>
            <p>{{ dataObj.retentionRatio }}%</p>
          </div>
          <div class="third-part">
            <p>日更字数/天</p>
            <p>{{ dataObj.serializeWordCount }}</p>
          </div>
        </div>
        <div class="introduction">
          <p>{{ dataObj.longIntro }}</p>
          <div class="chapter">
            <span>目录</span>
            <span class="chapter-name">{{ dataObj.lastChapter }}</span>
          </div>
        </div>
      </div>
    </section>
    <!-- <CategoryList :title="obj.category2.minor" :dataList="categoryList2" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TopBack from '@/components/TopBar/TopBack';
// import SearchBar from '@/components/SearchBar';
import { getBookInfo } from '@/api';
import utils from '@/utils';

export default {
  name: 'home',
  data() {
    return {
      dataObj: {}
    };
  },
  created() {
    getBookInfo(this.$route.params.id).then(res => {
      console.log(this.dataObj);
      //   res.cover = utils.staticPath + res.cover;
      this.dataObj = res;
    });
  },
  mounted() {},
  components: {
    TopBack
    // SearchBar,
  },
  methods: {},
  filters: {
    filterImgPath(value) {
      if (!value) return '';
      return utils.staticPath + value;
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  background: #fff;
  .book-details {
    display: flex;
    width: 100%;
    padding: 0.1rem;
    height: 0.8rem;

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

  .read-link {
    display: flex;
    position: relative;
    line-height: 0.6rem;

    .half {
      flex: 1;
      height: 100%;
    }
  }

  .reader-data {
    display: flex;
    padding: 0.2rem;
    position: relative;
    border-top: 0.01rem solid #ebebeb;
    border-bottom: 0.01rem solid #ebebeb;
    .third-part {
      flex: 1;

      p {
        margin: 0;
        padding: 0.05rem 0;
      }
    }
  }

  .introduction {
    padding: 0.1rem 0.1rem 0;
    border-bottom: 0.01rem solid #ebebeb;
    p {
      margin: 0;
      position: relative;
      padding: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      word-break: break-all;
      color: #222;
      text-align: left;
      border-bottom: 0.01rem solid #f4f4f4;
    }

    .chapter {
      padding: 0.15rem;
      line-height: 0.2rem;
      text-align: left;

      :first-child {
        color: #222;
        font-size: 0.14rem;
      }

      .chapter-name {
        float: right;
        color: #999;
        font-size: 0.12rem;
        max-width: 70%;
        word-break: break-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}

.button {
  padding: 0.1rem;
  text-align: center;
  margin: 0.1rem;
  line-height: 0.2rem;
  border-radius: 0.02rem;
}

.primary {
  border: 1px solid #b93321;
  color: #b93321;
  background-color: #fff;
}

.red {
  background: #b93321;
  color: #fff;
}
</style>
