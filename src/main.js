import Vue from 'vue';
import ElementUI from 'element-ui';
import router from '@/router';
import filters from '@/filters';
import utils from '@/utils';
import store from '@/store';
import plugins from '@/plugins';
import '@/components';
import { Alert, Panel, message } from 'cd-vue';

import 'cd-vue/src/styles/index.less';
import '@/assets/styles/main.less';

Vue.use(filters);
Vue.use(plugins);
Vue.use(ElementUI);

Vue.component('cd-alert', Alert);
Vue.component('cd-panel', Panel);
Vue.prototype.$message = message;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>',
});
