<template>
  <aside class="sidebar" :class="{'sidebar-hide': !openNav}">
    <el-menu :default-active="selectMenu" class="sidebar-menu" :collapse="!openNav"
             :collapse-transition="false" :router="true">
      <template v-for="menu in user.accessMenu">
        <!--一级菜单-->
        <el-menu-item v-if="!menu.children" :key="menu.name" :index="menu.path">
          <i :class="menu.icon" v-if="menu.icon"></i>
          <span slot="title">{{ $t(menu.title) }}</span>
        </el-menu-item>
        <!--二级及以上的菜单-->
        <the-submenu :key="menu.name" :subMenu="menu" v-else :i18n="i18n"></the-submenu>
      </template>
    </el-menu>
  </aside>
</template>

<script>
import TheLayoutSubSidebar from './TheLayoutSubSidebar'
import { mapState } from 'vuex'
import { random } from 'lodash'
// import Lodash from 'lodash'

export default {
  name: 'TheLayoutSidebar',
  props: ['openNav'],
  components: {
    'the-submenu': TheLayoutSubSidebar
  },
  computed: {
    selectMenu () {
      // console.log(this.$route.path)
      return this.$route.meta.menuPath || this.$route.path
    },
    ...mapState(['user'])
  },
  methods: {
    i18n: function (key) {
      return this.$t(key)
    }
  },
  mounted () {
    console.log(6666666666, random(10))
    // console.log(6666666666666, this.user)
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  float: left;
  width: 240px;
  height: 100%;
  border-right: 1px solid #e6e6e6;
  overflow: auto;

  .sidebar-menu {
    border: none;
    height: 100%;
  }
}

.sidebar-hide {
  width: 65px;
}
</style>
