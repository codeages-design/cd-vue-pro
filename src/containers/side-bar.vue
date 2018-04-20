<template>
  <aside class="cvp-sidebar" :class="{ 'cvp-sidebar--collapse': isCollapse }">
    <div class="cvp-sidebar__header">
      <span class="cvp-sidebar__logo cvp-text-overflow">
        Codeages Vue Pro
      </span>
    </div>
    <ul class="cvp-sidebar__nav">
      <li class="cvp-sidebar__nav-item"
        @click="switchNav(item.routeName)"
        v-for="(item, index) in sideMenu"
        :key="index"
        @mouseover="mouseover(index)"
        @mouseout="mouseout(index)"
      >
        <div
          class="cvp-sidebar__nav-item__title cvp-text-overflow"
          :class="{ open: item.isShowSub }"
          v-if="item.children"
          @click="showSubToggle(index)"
        >
          <i :class="item.icon" v-if="item.icon"></i>

          <span class="cvp-sidebar__nav-item__name">
            {{ item.title }}
          </span>
          <span class="cvp-sidebar__nav-item__action">
            <i class="cvp-icon cvp-icon-arrow-down"></i>
          </span>
        </div>

        <div
          class="cvp-sidebar__nav-item__title  cvp-text-overflow"
          :class="{ active: routeName === item.routeName }"
          @click="switchNav(item.routeName)"
          v-else
        >
          <i :class="item.icon" v-if="item.icon"></i>
          <span class="cvp-sidebar__nav-item__name">
            {{ item.title }}
          </span>
        </div>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <ul class="cvp-sidebar__subnav" v-show="item.isShowSub">
            <li
            :class="{ active: routeName === subitem.routeName }"
            @click="switchNav(subitem.routeName)"
            v-for="(subitem, subindex) in item.children"
            :key="subindex"
            >
              <i :class="item.icon" v-if="subitem.icon"></i>
              {{ subitem.title }}
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </aside>
</template>

<script>
import { sideMenu } from '../data';
import transition from '@/mixins/transition';

export default {
  props: ['isCollapse'],
  data() {
    return {
      sideMenu,
      routeName: '',
      height: null,
    }
  },
  mixins: [transition],
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
    switchNav(name) {
      this.$router.push({ name: name });
    },
    setShowSub(index) {
      this.$set(this.sideMenu[index], 'isShowSub', !this.sideMenu[index].isShowSub);
    },
    showSubToggle(index) {
      if (!this.isCollapse) {
        this.setShowSub(index);
      }
    },
    mouseover(index) {
      if (this.isCollapse) {
        this.setShowSub(index);
      }
    },
    mouseout(index) {
      if (this.isCollapse) {
        this.setShowSub(index);
      }
    }
  }
}
</script>

<style lang="less">
@import '~@/assets/styles/mixins.less';
@import '~@/assets/styles/variables.less';

@prefix: cvp-sidebar;

.cvp-sidebar--collapse.cvp-sidebar {
  width: 64px;
  .cvp-transition();
  .@{prefix}__header {
    padding: 19px 12px;
  }
  .@{prefix}__logo {
    width: 40px;
    .cvp-transition();
  }
  .@{prefix}__nav-item {
    position: relative;
    padding-left: 0;
  }
  .@{prefix}__nav-item__action {
    display: none;
  }
  .@{prefix}__nav-item__name {
    display: none;
  }
  .@{prefix}__subnav {
    position: absolute;
    top: 0;
    left: 100%;
    overflow-y: auto;
    max-height: 500px;
    > li {
      padding: 12px;
      min-width: 100px;
      .cvp-text-overflow;
    }
  }
}

.cvp-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 220px;
  height: 100%;
  color: #fff;
  // overflow-y: auto;
  // overflow-x: hidden;
  background-color: @sidebar-color;
  z-index: 1;
  .cvp-transition();
  &__header {
    padding: 19px 24px;
    background-color: #31344f;
    background-color: lighten(@sidebar-color, 5%);
  }
  &__logo {
    width: 100%;
    display: inline-block;
    .cvp-transition();
  }
  &__nav {
    margin: 0;
    padding: 16px 0;
    font-size: 14px;
    list-style: none;
  }
  &__nav-item__title {
    position: relative;
    display: block;
    padding: 12px 24px;
    line-height: 20px;
    color: #fff;
    .cvp-transition();
    &:hover {
      cursor: pointer;
      background: #333951;
      background-color: darken(@sidebar-color, 3%);
      .cvp-transition();
    }
    &.active {
      background: #1b1c29;
      background-color: darken(@sidebar-color, 5%);
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 4px;
        height: 100%;
        background: #535cac;
        background-color: @color-primary;
      }
    }
    &.open {
      .cvp-sidebar__nav-item__action {
        > i {
          transform: rotate(180deg);
          .cvp-transition();
        }
      }
    }
  }
  &__nav-item__action {
    > i {
      position: absolute;
      right: 24px;
      .cvp-transition();
    }
  }
  &__subnav {
    padding-left: 0;
    background: #000;
    > li {
      padding: 12px 24px 12px 48px;
      list-style: none;
      .cvp-transition();
      opacity: 0.6;
      color: #f1f1f1;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
        .cvp-transition();
      }
      &.active {
        opacity: 1;
      }
    }
  }
}

.collapse-transition {
  transition: height .3s;
}
</style>
