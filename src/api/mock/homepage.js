export default [
  {
    path: '/today/data',
    data: [
      {
        title: '登录用户',
        'number|1-5': 1,
        'total|20-50': 1,
        subtitle: '在线总数',
      },
      {
        title: '新增注册',
        'number|1-50': 1,
        'total|200-500': 1,
        subtitle: '总数',
      },
      {
        title: '新增学员',
        'number|1-500': 1,
        'total|500-1500': 1,
        subtitle: '总人次',
      },
      {
        title: '新增会员',
        'number|1-50': 1,
        'total|50-500': 1,
        subtitle: '总数',
      },
      {
        title: '未回复回答',
        'number|1-100': 1,
        'total|200-500': 1,
        subtitle: '总数',
      },
    ],
  }, {
    path: '/pay_order/statistic',
    data: [
      {
        name: '课程订单',
        'value|200-500': 1,
      }, {
        name: '会员订单',
        'value|200-500': 1,
      }, {
        name: '班级订单',
        'value|200-500': 1,
      },
    ],
  }, {
    path: '/order/statistic',
    data: [
      {
        'newOrder|1-5': 1,
        'payOrder|2-8': 1,
        date: '1989-01-01',
      },
      {
        'newOrder|1-5': 1,
        'payOrder|2-8': 1,
        date: '1989-01-02',
      },
      {
        'newOrder|1-5': 1,
        'payOrder|2-8': 1,
        date: '1989-01-03',
      },
      {
        'newOrder|1-5': 1,
        'payOrder|2-8': 1,
        date: '1989-01-04',
      },
      {
        'newOrder|1-5': 1,
        'payOrder|2-8': 1,
        date: '1989-01-05',
        // date: '@date("yyyy-MM-dd")',
      },
    ],
  },
];
