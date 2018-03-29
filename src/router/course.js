export default [{
  path: 'course/:courseId',
  name: 'course',
  component: (resolve) => require(['@/containers/course/index.vue'], resolve),
}, {
  path: 'courses',
  name: 'courseList',
  meta: {
    title: '课程列表',
  },
  component: (resolve) => require(['@/containers/course/list/index.vue'], resolve),
}];
