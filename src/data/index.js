const sideMenu = [
  {
    title: '首页',
    icon: 'cvp-icon cvp-icon-home',
    routeName: 'homepage',
  },
  {
    title: '课程',
    icon: 'cvp-icon cvp-icon-course',
    isShowSub: false,
    children: [
      {
        title: '所有课程',
        // icon: 'cvp-icon cvp-icon-home',
        routeName: 'courseList'
      }
    ]
  }
]

export {
  sideMenu,
}
