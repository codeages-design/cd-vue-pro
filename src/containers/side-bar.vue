<template>
  <cd-sidebar
    :isCollapse="isCollapse"
    title="Codeages Vue Pro"
  >
    <cd-v-menu
    :isCollapse="isCollapse"
    :data="sideMenu"
    :currentRouteName="routeName"
    >
      <div slot-scope="props">
        <cd-collapse-transition>
          <cd-v-submenu
          :data="props.data"
          v-show="props.isShow"
          ></cd-v-submenu>
        </cd-collapse-transition>
      </div>
    </cd-v-menu>
  </cd-sidebar>
</template>

<script>
import { sideMenu } from '../data';

export default {
  props: ['isCollapse'],
  data() {
    return {
      sideMenu,
      routeName: '',
      height: null,
    }
  },
  watch: {
    '$route': 'getRoute',
    isCollapse(val) {
      if (val) {
        this.sideMenu.map((item, index) => {
          this.$set(this.sideMenu[index], 'isShowSub', false);
        })
      }
    }
  },
  created() {
    this.getRoute();
  },
  methods: {
    getRoute() {
      this.routeName = this.$route.name;
    },
  }
}
</script>
