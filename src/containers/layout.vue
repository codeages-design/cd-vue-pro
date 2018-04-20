<template>
  <div id="app" class="cvp-wrap" :class="{ 'cvp-wrap--collapse': isCollapse }">
    <x-side-bar :isCollapse="isCollapse"></x-side-bar>
    <main class="cvp-main">
      <x-header :user="user" @sidebarToggle="sidebarToggle"></x-header>
      <div class="cvp-container-fluid" v-loading="isLoading">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive">
          </router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive">
        </router-view>
      </div>
    </main>
  </div>
</template>

<script>
import XSideBar from '@/containers/side-bar';
import XHeader from '@/containers/header';
import { mapState } from 'vuex';

export default {
  name: 'layout',
  data() {
    return {
      isCollapse: false,
    }
  },
  components: {
    XSideBar,
    XHeader
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      user: state => state.user
    })
  },
  methods: {
    sidebarToggle() {
      return this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="less">
@import '~@/assets/styles/mixins.less';

.cvp-wrap {
  position: relative;
  &&--collapse {
    .cvp-main {
      margin-left: 64px;
      .cvp-transition();
    }
  }
}

.cvp-main {
  margin-left: 220px;
  min-width: 980px;
  .cvp-transition();
}

.cvp-container-fluid {
  padding-left: 24px;
  padding-right: 24px;
  margin-right: auto;
  margin-left: auto;
  min-height: 500px;
}
</style>

