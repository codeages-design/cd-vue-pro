import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import * as types from '@/store/mutation-types';

import homepage from './homepage';
import course from './course';

Vue.use(Router);

// route分模块
const routes = [{
  path: '/',
  name: 'layout',
  redirect: {
    name: 'homepage',
  },
  component: (resolve) => require(['@/containers/layout.vue'], resolve),
  children: [
    ...homepage,
    ...course,
  ],
}, {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录',
  },
  component: (resolve) => require(['@/containers/login.vue'], resolve),
}, {
  path: '/logout',
  name: 'logout',
}];

// 页面刷新时，重新赋值token
if (localStorage.getItem('token')) {
  store.commit(types.USER_LOGIN, {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
  });
}

const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to.name, to.path, from.name);

  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // 登出操作
  if (to.name === 'logout') {
    store.commit(types.USER_LOGOUT);
    next({
      name: 'login',
    });
    return;
  }
  // 判断是否登录
  const isLogin = !!store.state.token;
  if (!isLogin && to.name !== 'login') {
    next({
      name: 'login',
      query: { redirect: to.name },
    });
  } else {
    next();
  }
});

export default router;
