<template>
  <div class="login-form">
    <div class="login-form__title">登录</div>
    <el-form ref="form" label-position="top" :model="loginForm" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="loginForm.username" placeholder="邮箱/手机/用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
        <span style="font-size: 12px">请使用try6.edusoho.cn上的账号登录</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="cvp-block cvp-width-full" @click="onSubmit('loginForm')" :loading="isLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      loginForm: {
        username: null,
        password: null
      },
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      'userLogin'
    ]),
    onSubmit(formName) {
      this.isLoading = true;
      this.userLogin({
        username: this.loginForm.username,
        password: this.loginForm.password
      }).then((res) => {
        console.log('loginSuccess', res);
        this.isLoading = false;

        const redirect = decodeURIComponent(this.$route.query.redirect || 'homepage');
        console.log('redirect', redirect);
        this.$router.push({
          name: redirect
        });

      }).catch((error) => {
        console.log('loginCatch', error);
        this.isLoading = false;
        this.$message.error(error.message);
      })
    }
  }
}
</script>

<style lang="less">
.login-form {
  margin: 50px auto;
  width: 400px;
  padding: 24px;
  border-radius: 4px;
  background: #fff;
  &__title {
    font-size: 20px;
    margin-bottom: 24px;
    text-align: center;
  }
}
</style>
