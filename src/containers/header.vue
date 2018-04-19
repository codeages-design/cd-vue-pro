<template>
  <header class="cvp-header cvp-clearfix">
    <span class="cvp-header__toggle" @click="sidebarToggle">
      <i class="cvp-icon cvp-icon-menu" style="font-size: 20px"></i>
    </span>
    <div class="cvp-header__user">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img
            :src="user.avatar && user.avatar.small" alt=""
            class="cvp-avatar cvp-avatar--sm cvp-header__user-avatar">
          <span class="header__user-name">{{ user.nickname }}</span>
          <i class="el-icon-caret-bottom el-icon--right" style="font-size: 12px"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">
            登出
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    handleCommand(command) {
      this.$router.push({ name: command });
    },
    sidebarToggle() {
      this.$emit('sidebarToggle');
    },
  }
}
</script>

<style lang="less">
@import '~@/assets/styles/mixins.less';
@import '~@/assets/styles/variables.less';

.cvp-header {
  position: relative;
  background-color: #fff;
  margin-bottom: 24px;
  padding: 12px 24px;
  &__toggle {
    .cvp-transition;
    &:hover {
      color: @color-primary;
      cursor: pointer;
      .cvp-transition;
    }
  }
  &__user {
    float: right;
  }
  &__user-avatar {
    vertical-align: middle;
  }
  &__user-name {
    line-height: 32px;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>

