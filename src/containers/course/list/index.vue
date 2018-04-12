<template>
  <div>
    <el-table
      :data="courseData"
      style="width: 100%"
      stripe
      :default-sort="{ prop: 'id' }">
      <el-table-column
        prop="id"
        label="课程ID"
        width="100"
        sortable>
      </el-table-column>
      <el-table-column
        label="课程名"
        min-width="300">
        <template scope="scope">
          <div style="padding: 10px 0" class="text-overflow">
            <img class="v-middle" style="height: 60px" :src="scope.row.cover.small" alt="">
            <span>{{ scope.row.title }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="课程状态"
        width="120">
        <template scope="scope">
          {{ scope.row.status }}
        </template>
      </el-table-column>
      <el-table-column
        prop="minCoursePrice"
        label="价格"
        width="120"
        sortable>
        <template scope="scope">
          <div class="text-right width-50">
            {{ scope.row.minCoursePrice }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="课程类型"
        width="120">
        <template scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column
        prop="studentNum"
        label="学员数"
        width="80">
      </el-table-column>
      <el-table-column
        prop="createdTime"
        label="创建时间"
        width="200">
        <template scope="scope">
          {{ scope.row.createdTime }}
        </template>
      </el-table-column>
      <el-table-column
        label="更新时间"
        width="200">
        <template scope="scope">
          {{ scope.row.updatedTime }}
        </template>
      </el-table-column>
    </el-table>
    <div class="es-pagination text-right" v-if="paging.total > paging.limit">
      <el-pagination
        layout="total, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        :total="paging.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'courseList',
  computed: {
    ...mapState({
      courseData: state => state.course.courseSet,
      paging: state => state.course.paging
    })
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions('course', [
      'getCourses'
    ]),
    fetchData(params = {}) {
      this.getCourses(params).then((res) => {
        console.log('res', res);
      })
    },
    handleCurrentChange(val) {
      console.log('当前第', val, '页');

      this.fetchData({
        offset: (val - 1) * this.paging.limit,
      })
    }
  }
}
</script>
