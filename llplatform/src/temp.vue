<template>
  <!-- 词条搜素 -->
  <div class="cont">
    <page-header class="pageHeader" :isBack="false" v-if="$_isMobile">
      <div class="flex flexRow homeNav">
        <div class="flex flexRow logo-wrap">
          <div class="logo">
            <img src="@/assets/logo/mb_logo.png" alt="" />
          </div>
          <img src="@/assets/logo/titleLogo.png" alt="" class="pageName" />
        </div>
      </div>
    </page-header>
    <div class="header" v-if="$_isMobile">
      <!-- 提问知识移动端 -->
      <span
        class="flex flexRow flexCenter pointer mb_shareCont"
        @click="toContribution()"
      >
        <i class="iconfont icon-gongxianzhishi"></i>
        <span>我要提问</span>
      </span>
      <div class="swiper">
        <img class="swiperImg" src="@/assets/images/mb_banner.png" alt="" />
        <div class="swiperText">
          <img
            class="swiperImg"
            src="@/assets/images/mb_banner-text.png"
            alt=""
          />
        </div>
      </div>
      <div class="flex flexRow header-title"></div>
    </div>
    <div class="flex flexRow searchCont">
      <img
        class="personImg"
        v-if="!$_isMobile"
        src="@/assets/images/searchPerson.png"
        alt=""
      />
      <div class="mb_personWrap" v-if="$_isMobile">
        <img class="mb_personImg" src="@/assets/images/mb_person.png" alt="" />
        <img
          class="mb_personHand"
          src="@/assets/images/mb_personhands.png"
          alt=""
        />
      </div>
      <div class="searchBox">
        <el-input
          v-model="searchInput"
          @keyup.enter.native="handleSearch"
          placeholder="请输入搜索内容关键字"
        ></el-input>
        <span class="flex flexRow flexCenter searchBtn" @click="handleSearch">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索</span>
        </span>
      </div>
      <span
        class="flex flexRow flexCenter pointer shareCont"
        @click="toContribution()"
        v-if="!$_isMobile"
      >
        <i class="iconfont icon-gongxianzhishi"></i>
        <span>{{ activeName == 1 ? "贡献知识" : "我要提问" }}</span>
      </span>
    </div>
    <div class="flex flexRow flexCenter tabs">
      <div
        class="flex flexRow flexCenter tab-item"
        :class="{ active: activeName == 1 }"
        @click="changeTab(1)"
      >
        <i class="iconfont icon-citiao"></i>
        <span>词条</span>
      </div>
      <div
        class="flex flexRow flexCenter tab-item"
        :class="{ active: activeName == 2 }"
        @click="changeTab(2)"
      >
        <i class="iconfont icon-wenda"></i>
        <span>问答</span>
      </div>
    </div>
    <div class="tabs-content">
      <div class="wrapper" v-show="activeName == 1">
        <div class="tags-wrapper">
          <div class="flex flexRow flexCenter tagsCont">
            <span
              class="tag"
              :class="{ active: choosedTags.indexOf(tag.id) > -1 }"
              v-for="tag in tagsList"
              :key="tag.id"
              @click="toggleTag(tag)"
            >{{ tag.name }}</span
            >
          </div>
          <i
            class="el-icon-arrow-down"
            @click="loadMoreTags()"
            v-if="tagMore"
          ></i>
        </div>
        <search-que :searchVal="entrySearchVal" v-show="isSearch" />
        <div class="hot-wrapper" v-show="!isSearch">
          <div class="titleRow">
            <i class="iconfont icon-tuijianredian"></i>
            <span>推荐热点</span>
          </div>
          <div class="flex flexRow newsCont">
            <div class="newsboard">
              <div
                class="flex flexRow flexLeft new-item"
                v-for="(hotNew, index) in hotNewsLeft"
                :key="hotNew.id"
                @click="toDetail(hotNew.id)"
              >
                <i
                  class="iconfont icon-tuijianredian-shangjiantou top-icon"
                  v-if="index == 0"
                ></i>
                <span class="new-icon" v-else-if="index > 0 && index <= 3"
                >{{ index }}
                  <i
                    class="iconfont icon-tuijianredian-qiansanbiaoqian new_bcg-icon"
                  ></i>
                </span>
                <span class="num-icon" v-else>{{ index }}</span>
                <span class="new-wrap">
                  <el-tooltip
                    effect="light"
                    :content="hotNew.title"
                    placement="right"
                  >
                    <span class="ellipsis new-title">{{ hotNew.title }}</span>
                  </el-tooltip>
                  <span class="flag-wrap">
                    <span class="new-flag hot" v-if="hotNew.isHot">hot</span>
                    <span class="new-flag new" v-if="hotNew.isNew">new</span>
                  </span>
                </span>
              </div>
            </div>
            <div class="newsboard">
              <div
                class="flex flexRow flexLeft new-item"
                v-for="(hotNew, index) in hotNewsRight"
                :key="hotNew.id"
                @click="toDetail(hotNew.id)"
              >
                <span
                  class="new-icon"
                  v-if="
                    index + hotNewsLeft.length > 0 &&
                    index + hotNewsLeft.length <= 3
                  "
                >{{ index + hotNewsLeft.length }}
                  <i
                    class="iconfont icon-tuijianredian-qiansanbiaoqian new_bcg-icon"
                  ></i>
                </span>
                <span class="num-icon" v-else>{{
                  index + hotNewsLeft.length
                }}</span>
                <span class="new-wrap">
                  <el-tooltip
                    effect="light"
                    :content="hotNew.title"
                    placement="right"
                  >
                    <span class="ellipsis new-title">{{ hotNew.title }}</span>
                  </el-tooltip>
                  <span class="flag-wrap">
                    <span class="new-flag hot" v-if="hotNew.isHot">hot</span>
                    <span class="new-flag new" v-if="hotNew.isNew">new</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <answer-que-tab :searchVal="qaSearchVal" v-show="activeName == 2" />
    </div>
    <div>当前登录用户: {{currentName2}}-{{currentName3}}-{{currentName}}</div>
  </div>
</template>

<script>
import pageHeader from "@/components/mobilePageHeader";
import pageFooter from "@/components/mobilePageFooter";
import answerQueTab from "./answerQueTab";
import searchQue from "./searchQue";

import {
  getFireDictionaryHotList,
  searchFireDictionary,
} from "api/fireSearch/refireDictionary";
import { gettoken, getuserinfo } from 'api/login'
import { getTagCategoryList } from "api/knowledgeManagement/tagClassification";
import { getEnterpriseUser } from 'api/user'
import { mapActions } from 'vuex';
export default {
  name: "searchEntry",
  data() {
    return {
      currentName3: '',
      currentName2: '',
      currentName: '',
      loginState: '',
      loginCode: '',
      searchInput: "",
      entrySearchVal: {},
      qaSearchVal: {
        indexText: "",
      },
      activeName: 1,
      isSearch: false,
      tagsList: [],
      tagPage: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
      choosedTags: [], //选中的标签数组
      hotNewsList: [],
      hotNewsLeft: [],
      hotNewsRight: [],
      lazyTab: {
        1: false,
        2: false,
      },
    };
  },
  computed: {
    tagMore() {
      return this.tagsList.length < this.tagPage.total;
    },
  },
  components: {
    pageHeader,
    pageFooter,
    answerQueTab,
    searchQue,
  },
  created () {
    const obj = {
      mobile: this._isMobile(),
      query: this.$route.query
    }
    this.open(obj)
    if(this._isMobile()) {
      const code = this.$route.query && this.$route.query.code;
      const state = this.$route.query && this.$route.query.state;
      if(code) {
        // 移动端OAuth2.0授权登录
        getEnterpriseUser(code, state, 2).then(res => {
          if(res.code == '200') {
            this.qyLogin(res.data)
          }
        })
      }
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const obj = {
          mobile: this._isMobile(),
          query: this.$route.query,
          text: '路由改变啦~'
        }
        this.open(obj)
        // const queryData = route.query;
        // if(queryData) {
        //   if(queryData.code) {
        //     // 移动端OAuth2.0授权登录
        //     getEnterpriseUser(queryData.code, queryData.state, 2).then(res => {
        //       if(res.code == '200') {
        //         this.qyLogin(res.data)
        //       }
        //     })
        //   }
        // }
      },
      immediate: true
    }
  },
  async mounted() {
    this.getTagsClassification();
    let hotNewsList = await this.getHotDateList();
    this.hotNewsList = hotNewsList;
    this.handleNewsData();
  },
  destroyed() {
    console.log('searchEntry页面销毁了~')
  },
  methods: {
    ...mapActions({
      Login: 'user/Login'
    }),
    qyLogin (userId) {
      const paramesData = {
        loginType: 3,
        username: userId,
      }
      this.$store.dispatch("Login", paramesData).then(res => {
        this.$router.push({ path: "/" }).catch(()=>{});
      })
    },
    open(router) {
      this.$alert(router, '当前路由', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    getTagsClassification() {
      const params = {
        data: {},
        pageNo: Number(this.tagPage.current), // 查询的分页页码
        pageSize: Number(this.tagPage.pageSize) || Number(10), // 查询的分页页大小, 默认10
        sorting: "",
      };
      getTagCategoryList(params).then((res) => {
        if (res.code == "200") {
          this.tagPage.total = res.data.total;
          let addData = res.data.data.map((item) => {
            return {
              id: item.tagCategoryCode,
              name: item.tagCategoryName,
            };
          });
          this.tagsList = this.tagsList.concat(addData);
        }
      });
    },
    // 获取热点推荐列表
    getHotDateList() {
      let data = {
        data: {},
        // pageNo: Number(this.page.current), // 查询的分页页码
        // pageSize: Number(this.page.pageSize) || Number(10), // 查询的分页页大小, 默认10
        // sorting: "",
      };
      return getFireDictionaryHotList(data).then((res) => {
        if (res.code == "200") {
          const { data } = res.data;
          let showData = data.map((e) => {
            return {
              title: e.dictionaryName,
              id: e.dictionaryCode,
            };
          });
          return showData;
        }
      });
    },
    // 搜索
    handleSearch() {
      this.isSearch = true;
      if (this.activeName == 1) {
        this.entrySearchVal = {
          indexText: this.searchInput,
          tagCateGoryCode: JSON.parse(JSON.stringify(this.choosedTags)),
        };
      } else {
        this.qaSearchVal = {
          indexText: this.searchInput,
        };
      }
    },
    handleNewsData() {
      let length = Math.ceil(this.hotNewsList.length / 2);
      let leftData = [],
        rightData = [];
      console.log(length);
      this.hotNewsList.forEach((e, i) => {
        if (i <= length - 1) {
          leftData.push(e);
        } else {
          rightData.push(e);
        }
      });
      this.hotNewsLeft = leftData;
      this.hotNewsRight = rightData;
    },
    changeTab(name) {
      if (name == 1) {
        this.isSearch = false;
      }
      if (name == this.activeName) {
        return;
      }
      if (name == 2 && !this.lazyTab[name]) {
        this.qaSearchVal = {
          ...this.qaSearchVal,
        };
      }
      this.lazyTab[name] = true;
      this.activeName = name;
    },
    toggleTag(item) {
      if (this.choosedTags.indexOf(item.id) > -1) {
        let index = this.choosedTags.indexOf(item.id);
        this.choosedTags.splice(index, 1);
      } else {
        this.choosedTags.push(item.id);
      }
    },
    // 加载更多标签分类页
    loadMoreTags() {
      this.tagPage.current++;
      this.getTagsClassification();
    },
    // 去贡献知识或者知识问答
    toContribution() {
      if (this.activeName == 1 && !this.$_isMobile) {
        // 知识贡献
        let loc = "/entryManagement/creatEntry";
        this.$router.push({
          path: loc,
        });
        // this.$router.push(loc);
      } else {
        // 知识提问
        let loc = "/knowQues";
        // this.$router.push(loc);
        this.$router.push({
          path: loc,
        });
      }
    },
    // 词条详情
    toDetail(code) {
      const loc = "/entryDetail";
      this.$router.push({
        path: loc,
        query: { code: code },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    .header-title {
      align-items: center;
      justify-content: center;
      height: 127px;
      // font-size: 2.125rem;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: justify;
      color: #ffffff;
      background: #5b8aff;
      background: linear-gradient(131deg, #1a6de4 3%, #003bc5 97%);
      border-top-left-radius: 14px;
      border-top-right-radius: 14px;
      position: relative;
      top: -30px;
      z-index: 0;
    }
  }
  .cont {
    margin: 24px auto;
    background: #ffffff;
    .iconfont {
      color: #ffffff;
      border-radius: 50%;
      text-align: center;
    }
    .flexCenter {
      align-items: center;
    }
    .flexLeft {
      align-items: center;
      justify-content: flex-start;
    }
  }
  .ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .searchCont {
    position: relative;
    padding-top: 80px;
    z-index: 1;
    max-width: 820px;
    margin: 0 auto;
    .personImg {
      position: absolute;
      top: 10px;
      left: 30px;
      width: 58px;
      height: 84px;
    }
    .searchBox {
      position: relative;
      /deep/.el-input--medium .el-input__inner {
        width: 650px;
        height: 48px;
        opacity: 1;
        background: #fdfdfd;
        border: 1px solid #d6d6d6;
        border-radius: 25px;
        padding: 0 20px;
        padding-right: 110px;
      }
      .searchBtn {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        color: #ffffff;
        background: linear-gradient(104deg, #fbbb00 0%, #fc5900 85%);
        border-radius: 21px;
        box-shadow: 3px 2px 4px 0px #ffe9c6;
        font-size: 16px;
        padding: 6px 17px;
        cursor: pointer;
        .iconfont {
          font-size: 27px;
          margin-right: 6px;
        }
      }
    }
    .shareCont {
      line-height: 48px;
      height: 48px;
      background: linear-gradient(340deg, #3aa7fb 14%, #3aa7fb 14%, #7bedff 97%);
      border-radius: 24px;
      box-shadow: 0px 5px 16px 0px #d9d9d9;
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #ffffff;
      padding-right: 20px;
      margin-left: 12px;
      .iconfont {
        margin-left: 1px;
        margin-right: 10px;
        line-height: 44px;
        width: 44px;
        height: 44px;
        background: linear-gradient(319deg, #73dbff 21%, #98f4ff 84%);
      }
    }
  }
  .tabs {
    margin: 20px auto;
    .tab-item {
      position: relative;
      height: 50px;
      background: linear-gradient(270deg, #1e53fa, #0382e1 98%);
      border-radius: 7px;
      box-shadow: 0px 3px 6px 0px #c2e0ff;
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      line-height: 25px;
      text-align: center;
      text-shadow: 0px 2px 4px 0px #114de2;
      padding-right: 32px;
      margin-right: 20px;
      cursor: pointer;
      &.active {
        background: linear-gradient(270deg, #08acff, #25c5ff 98%);
        &::after {
          content: "";
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 0px;
          height: 0px;
          border: 10px solid #16b9ff;
          border-top-color: #16b9ff;
          border-bottom-color: transparent;
          border-right-color: transparent;
          border-left-color: transparent;
        }
      }
      .iconfont {
        font-size: 26px;
        margin: 0 15px;
      }
    }
  }
  .tabs-content {
    .wrapper {
      max-width: 820px;
      margin: 0 auto;
      padding-bottom: 20px;
    }
  }
  .tags-wrapper {
    text-align: center;
    i {
      cursor: pointer;
      font-size: 1.875rem;
    }
  }
  .tagsCont {
    flex-wrap: wrap;
    justify-content: flex-start;
    .tag {
      font-size: 14px;
      font-weight: 400;
      padding: 5px 20px;
      border: 1px solid #919191;
      border-radius: 6px;
      margin-right: 20px;
      margin-bottom: 16px;
      cursor: pointer;
      &.active {
        font-weight: 600;
        color: #f05d21;
        background: #ffede0;
        border: 2px solid #f05d21;
      }
    }
  }
  .titleRow {
    text-align: center;
    line-height: 0;
    margin: 10px 0 28px 0;
    .iconfont {
      color: #f05d21;
      font-size: 26px;
      margin-right: 10px;
    }
    span {
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: justify;
      color: #f05d21;
      line-height: 25px;
    }
  }
  .newsCont {
    flex-wrap: wrap;
    .hot {
      color: #ffffff;
      background: #ff8128;
    }
    .new {
      color: #ffffff;
      background: #28c4ff;
    }
    .newsboard {
      width: calc(50% - 75px);
      margin-right: 150px;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
    .new-item {
      width: calc(100%);
      height: 20px;
      padding: 38px 0 22px 0;
      border-bottom: 1px solid #e1e1e1;
      position: relative;
      .new-icon {
        position: relative;
        font-size: 14px;
        width: 15px;
        height: 20px;
        line-height: 20px;
        color: #ffffff;
        text-align: center;
        z-index: 0;
        .new_bcg-icon {
          position: absolute;
          left: -3px;
          font-size: 22px;
          color: #f45905;
          z-index: -1;
        }
      }
      .top-icon {
        font-size: 20px;
        color: #f45905;
      }
      .num-icon {
        font-size: 14px;
        width: 17px;
        height: 16px;
        line-height: 18px;
        // background: #e1e1e1;
        border-radius: 2px;
        color: #a9a9a9;
        text-align: center;
      }

      .new-title {
        cursor: pointer;
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #0c60c3;
        margin-left: 12px;
        display: inline-block;
        // max-width: 200px;
      }
      .new-flag {
        padding: 0px 4px;
        border-radius: 2px;
        line-height: 20px;
        margin-right: 4px;
      }
    }
    .new-wrap {
      position: relative;
    }
    .flag-wrap {
      position: relative;
      top: -0.625rem;
      left: 2px;
    }
  }
  @media screen and (max-device-width: 1023px) {
    .cont {
      width: 100%;
      max-width: 100%;
      margin: 0;
      overflow-x: hidden;
      height: 100%;
    }
    .searchCont {
      position: relative;
      top: -125px;
      padding: 0;
      margin: 0 30px;
      &::after {
        content: "";
        width: calc(100% + 32px);
        height: 88px;
        opacity: 0.2;
        background: #ffffff;
        border-radius: 44px;
        position: absolute;
        left: -16px;
        top: -10px;
        z-index: -1;
      }
      .mb_personWrap {
        position: absolute;
        top: -180px;
        left: auto;
        right: 0px;
        width: 138px;
        height: 206px;
        z-index: 0;
        .mb_personImg {
          width: 138px;
          height: 149px;
        }
        .mb_personHand {
          width: 113px;
          height: 69px;
          position: relative;
          top: -40px;
          left: 11px;
        }
      }
      .searchBox {
        position: relative;
        width: 100%;
        /deep/.el-input--medium .el-input__inner {
          width: 100%;
          height: 70px;
          opacity: 1;
          background: #ffffff;
          border-radius: 44px;
          box-shadow: 0px 0px 16px 0px #1c55cb;
          padding: 0 20px;
          padding-right: 62px;
          font-size: 28px;
        }
        .searchBtn {
          position: absolute;
          right: 6px;
          top: 50%;
          transform: translateY(-50%);
          color: #ffffff;
          width: 62px;
          height: 62px;
          background: linear-gradient(104deg, #fbbb00 0%, #fc5900 85%);
          border-radius: 40px;
          box-shadow: 3px 2px 4px 0px #ffe9c6;
          .iconfont {
            font-size: 30px;
            margin-right: 0;
          }
          span {
            display: none;
          }
        }
      }
      .shareCont {
        line-height: 48px;
        height: 48px;
        background: linear-gradient(
            340deg,
            #3aa7fb 14%,
            #3aa7fb 14%,
            #7bedff 97%
        );
        border-radius: 24px;
        box-shadow: 0px 5px 16px 0px #d9d9d9;
        font-size: 16px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        color: #ffffff;
        padding-right: 20px;
        margin-left: 12px;
        .iconfont {
          margin-left: 1px;
          margin-right: 10px;
          line-height: 44px;
          width: 44px;
          height: 44px;
          background: linear-gradient(319deg, #73dbff 21%, #98f4ff 84%);
        }
      }
    }
    .newsCont {
      flex-wrap: wrap;
      .newsboard {
        width: calc(100%);
        margin-right: 0;
      }
      .new-item {
        .iconfont {
          margin-right: 15px;
        }
        .new-icon {
          font-size: 30px;
          width: 15px;
          height: 20px;
          text-align: center;
          color: #f86506;
          background: transparent;
          font-weight: 600;
          .new_bcg-icon {
            display: none;
          }
        }
        .top-icon {
          font-size: 20px;
          color: #f45905;
        }
        .num-icon {
          font-size: 30px;
          font-weight: 400;
          color: #a9a9a9;
        }
        .new-title {
          margin-left: 20px;
          font-size: 28px;
          position: relative;
        }
        .new-flag {
          padding: 0px 4px;
          margin-right: 2px;
        }
      }
    }
    .mb_shareCont {
      color: #ffffff;
      background: linear-gradient(340deg, #3aa7fb 14%, #3aa7fb 14%, #7bedff 97%);
      border-radius: 44px;
      box-shadow: 0px 5px 16px 0px #0e4ac6;
      position: absolute;
      top: 130px;
      right: 30px;
      z-index: 1;
      padding: 15px 20px;
      .iconfont {
        font-size: 30px;
        margin-right: 10px;
      }
    }
    .tabs {
      position: relative;
      top: -108.8px;
      .tab-item {
        background: linear-gradient(270deg, #1e53fa, #0382e1 98%);
        box-shadow: 0px 3px 6px 0px #c2e0ff;
        font-size: 32px;
        padding-right: 10px;
        padding-left: 10px;
        .iconfont {
          font-size: 30px;
          margin: 0 10px;
        }
      }
    }
    .tabs-content {
      position: relative;
      top: -108px;
      padding: 0 20px;
      .wrapper {
        max-width: 100%;
      }
    }
    .tagsCont {
      .tag {
        padding: 4px 30px;
        font-size: 30px;
      }
    }
    // .pageHeader,
    // .header,
    // .footer {
    //   display: block;
    // }
    .pageHeader {
      align-items: center;
      .pageName {
        width: 265px;
        // height: 3.875rem;
      }
      .logo {
        width: 52px;
        height: 52px;
        display: inline-block;
        // background: linear-gradient(59deg, #2c5ae8 5%, #0d3fb6 87%);
        border-radius: 72px;
        margin-right: 10px;
      }
    }
    .titleRow {
      margin: 29px 0 20px 0;
      .iconfont {
        color: #f05d21;
        font-size: 38px;
        margin-right: 20px;
      }
      span {
        font-size: 32px;
      }
    }
  }
</style>

