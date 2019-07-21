<template>
  <div>
    <TopBack :title="'书籍详情'" />
    <section class="wrapper" v-if="dataObj">
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
          <p class="intro-content" :class="collapsed ? 'collapsed' : ''">{{ dataObj.longIntro }}</p>
          <div class="intro-arrow" :class="collapsed ? '' : 'rotated'" @click="changeDesc"><img src="../assets/arrow_down.svg" alt="arrow_down" /></div>
          <div class="chapter">
            <span>目录</span>
            <span class="chapter-name">{{ dataObj.lastChapter }}</span>
          </div>
        </div>
        <div class="discussions" v-if="discussions">
          <div class="discus-title">热门书评</div>
          <div class="discus-list" v-for="item in discussions" :key="item.id">
            <div class="discus-item">
              <div class="reader-head">
                <img :src="item.author.avatar | filterImgPath" alt="" />
              </div>
              <div class="discuss-info">
                <p class="name">{{ item.author.nickname }}</p>
                <p class="title">{{ item.title }}</p>
                <p class="score" v-for="num in item.likeCount" :key="num.index">
                  <i class="star-full"></i>
                </p>
                <p class="content">{{ item.content }}</p>
                <p class="love">
                  <span>{{ item.created | formateTime }}</span>
                  <span>{{ item.voteCount }}人觉得有用</span>
                </p>
              </div>
            </div>
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
import { getBookInfo, getBookDiscussions } from '@/api';
import utils from '@/utils';

export default {
  name: 'home',
  data() {
    return {
      dataObj: null,
      collapsed: true,
      discussions: []
    };
  },
  created() {
    let bookId = this.$route.params.id;
    Promise.all([getBookInfo(bookId), getBookDiscussions(bookId)]).then(arr => {
      this.dataObj = arr[0];
      if (arr[1].posts.length > 2) {
        arr[1].posts.splice(0, 2);
        this.discussions = arr[1].posts;
      }
    });
    // getBookInfo(this.$route.params.id).then(res => {
    //   console.log(this.dataObj);

    // });
  },
  mounted() {},
  components: {
    TopBack
    // SearchBar,
  },
  methods: {
    changeDesc() {
      this.collapsed = !this.collapsed;
    }
  },
  filters: {
    filterImgPath(value) {
      if (!value) return '';
      return utils.staticPath + value;
    },
    formateTime(value) {
      return utils.timestampFormat(new Date(value));
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
    height: 1rem;
    box-sizing: border-box;

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
    box-sizing: border-box;

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
    position: relative;
    padding: 0.1rem 0.1rem 0;
    border-bottom: 0.01rem solid #ebebeb;
    p {
      margin: 0;
      position: relative;
      padding: 0;
      line-height: 1.6;
      font-size: 0.14rem;
      word-break: break-all;
      color: #222;
      text-align: left;
      transition: all 0.5s;
    }

    .intro-arrow {
      width: 0.2rem;
      height: 0.2rem;
      position: absolute;
      right: 0.1rem;
      bottom: 0.6rem;
      transition: all 0.5s;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .rotated {
      transform: rotate(180deg);
    }

    .chapter {
      padding: 0.15rem;
      line-height: 0.2rem;
      text-align: left;
      margin-top: 0.06rem;
      border-top: 0.01rem solid #f4f4f4;

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

.collapsed {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 3;
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

.discussions {
  padding: 0.1rem 0.2rem;
}
.discus-title {
  line-height: 0.4rem;
  text-align: left;
}

.discus-list {
  width: 100%;
  box-sizing: border-box;
}

.discus-item {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: relative;
  text-align: left;
  border-bottom: 0.01rem solid #f4f4f4;

  .reader-head {
    width: 0.6rem;
    height: 0.6rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.3rem;
    }
  }

  .discuss-info {
    flex: 1;
    padding-left: 0.1rem;

    p {
      margin: 0;
      padding: 0;
    }
    .name {
      position: relative;
      height: 0.2rem;
      line-height: 0.2rem;
      color: #a58d5e;
      font-size: 0.12rem;
    }

    .title {
      height: 0.3rem;
      line-height: 0.3rem;
      font-weight: 700;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #000;
    }

    .score {
      padding: 0.04rem 0;
      height: 0.2rem;

      .star-full {
        display: inline-block;
        vertical-align: middle;
        width: 0.2rem;
        height: 0.2rem;
        background: url(../assets/star.svg) no-repeat;
        background-size: 0.2rem 0.2rem;
      }
    }

    .content {
      height: 0.6rem;
      overflow: hidden;
      line-height: 0.3rem;
      text-align: justify;
    }

    .love {
      padding: 0.06rem 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      overflow: hidden;
      color: #999;
      span {
        vertical-align: middle;
      }
      :first-child {
        float: left;
      }
      :last-child {
        float: right;
      }
    }
  }
}
</style>
