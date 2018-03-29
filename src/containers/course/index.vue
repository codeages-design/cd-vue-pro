<template>
  <div>{{courseData.title}}</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return  {
      courseId: this.$route.params.courseId,
    }
  },
  computed: {
    ...mapState({
      courseData: state => { return state.course.single }
    })
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route(to, from) {
      this.courseId = this.$route.params.courseId;
      this.fetchData();
    }
  },
  methods: {
    ...mapActions('course', [
      'getCourse'
    ]),
    fetchData() {
      this.getCourse({
        courseId: this.courseId
      }).then((res) => {
        console.log(res, 'courseData');
      })
    }
  }
}
</script>
