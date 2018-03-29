export default {
  install(Vue) {
    Vue.prototype.isDev = () => process.env.NODE_ENV !== 'production';

    Vue.prototype.setTitle = title => document.title = title;
  },
};
