<template>
  <div id="app" class="es-wrap" :class="{ 'hide-sidebar': isHideSidebar }">
    <x-side-bar @sidebarToggle="sidebarToggle"></x-side-bar>
    <main class="es-main">
      <x-header :user="user"></x-header>
      <div class="container-fluid">
        <div class="es-main-container" v-loading="isLoading">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive">
            </router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive">
          </router-view>
        </div>
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
      isHideSidebar: false,
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
      return this.isHideSidebar = !this.isHideSidebar;
    }
  }
};
</script>
