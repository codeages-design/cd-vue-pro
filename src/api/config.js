const config = [
  {
    name: 'login',
    url: '/tokens',
    method: 'POST',
  },
  {
    name: 'getCourse',
    url: '/course_sets/{courseId}',
    method: 'GET',
  },
  {
    name: 'getCourses',
    url: '/course_sets',
    method: 'GET',
  },
  {
    name: 'getTodayData',
    url: '/today/data',
    method: 'GET',
  },
  {
    name: 'getOrderStatistic',
    url: '/order/statistic',
    method: 'GET',
  },
  {
    name: 'getPayOrderStatistic',
    url: '/pay_order/statistic',
    method: 'GET',
  }
];

export default config;
