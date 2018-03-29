<template>
  <header class="es-header clearfix">
    <div class="header__user">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img :src="user.avatar && user.avatar.small" alt="" class="avatar avatar-sm header__user-avatar">
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
    }
  }
}
</script>

<style lang="less">
.es-header {
  position: relative;
  // height: 56px;
  background-color: #fff;
  margin-bottom: 24px;
  padding: 12px 24px;
  .header__user {
    float: right;
  }
  .header__user-avatar {
    vertical-align: middle;
  }
  .header__user-name {
    line-height: 32px;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>

