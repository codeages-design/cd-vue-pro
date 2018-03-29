<template>
  <div class="es-sidebar">
    <div class="sidebar__header">
      <span class="sidebar__logo text-overflow">EduSoho Vue</span>
      <span class="sidebar__toggle" @click="sidebarToggle"><i class="es-icon es-icon-menu"></i></span>
    </div>
    <ul class="sidebar__nav">
      <li class="sidebar__nav-item" :class="{ active: routeName === 'homepage' }" @click="switchNav('homepage')">
        <i class="es-icon es-icon-home"></i> <span class="sidebar__nav-item__name">首页</span>
      </li>
      <li class="sidebar__nav-item" :class="{ active: routeName === 'courseList' }" @click="switchNav('courseList')">
        <i class="es-icon es-icon-course"></i> <span class="sidebar__nav-item__name">所有课程</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeName: ''
    }
  },
  watch: {
    '$route': 'getRoute'
  },
  created() {
    this.getRoute();
  },
  methods: {
    getRoute() {
      this.routeName = this.$route.name;
    },
    sidebarToggle() {
      this.$emit('sidebarToggle');
    },
    switchNav(name) {
      this.$router.push({ name: name });
    }
  }
}
</script>

<style lang="less">
.hide-sidebar {
  .es-sidebar {
    width: 64px;
    .sidebar__logo {
      display: none;
    }
    .sidebar__toggle {
      float: none;
    }
    .sidebar__nav-item {
      padding-left: 0;
      text-align: center;
    }
    .sidebar__nav-item__name {
      display: none;
    }
  }
  .es-main {
    margin-left: 64px;
  }
}

.es-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 220px;
  height: 100%;
  color: #fff;
  background-color: #242639;
  .sidebar__header {
    padding: 19px 24px;
    background-color: #31344f;
  }
  .sidebar__logo {
    width: 150px;
    display: inline-block;
  }
  .sidebar__toggle {
    float: right;
    &:hover {
      cursor: pointer;
    }
  }
  .sidebar__nav {
    margin: 0;
    padding: 16px 0;
    font-size: 14px;
  }
  .sidebar__nav-item {
    position: relative;
    display: block;
    padding-left: 24px;
    height: 48px;
    line-height: 48px;
    color: #fff;
    &:hover {
      cursor: pointer;
      background: #333951;
    }
    &.active {
      background: #1b1c29;
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 4px;
        height: 100%;
        background: #535cac;
      }
    }
  }
}
</style>
