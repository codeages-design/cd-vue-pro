import moment from 'moment';

const courseStatus = {
  published: '发布',
  closed: '已关闭',
  draft: '未发布',
};

const courseType = {
  normal: '普通课程',
  live: '直播课程',
  liveOpen: '直播公开课',
  open: '公开课',
};

export default {
  install(Vue) {
    Vue.filter('trim', value => value.replace(/(^\s*)|(\s*$)/g, ''));

    Vue.filter('datetime', value => moment(+new Date(value)).format('YYYY-MM-DD HH:mm'));

    Vue.filter('courseStatus', value => courseStatus[value]);

    Vue.filter('courseType', value => courseType[value]);
  },
};
