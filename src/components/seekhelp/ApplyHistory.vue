<template>
  <el-table
    ref="applyTable"
    :data="tableData"
    style="width: 100%"
    stripe
    border
  >
    <el-table-column label="日期" width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
    <el-table-column label="申请表">
      <a href="#">《测试文件》</a>
    </el-table-column>
    <el-table-column
      prop="status"
      label="申请状态"
      width="180"
      :filters="status"
      :filter-method="filterStatus"
      filter-placement="bottom-end"
    >
      <template slot-scope="scope">
        <el-tag :type="getTagType(scope.row.tag)" disable-transitions>
          {{ scope.row.tag }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '通过',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '未通过',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '审核中',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '通过',
        },
      ],
      status: [
        { text: '未通过', value: '未通过' },
        { text: '审核中', value: '审核中' },
        { text: '通过', value: '通过' },
      ],
    }
  },
  methods: {
    resetDateFilter() {
      this.$refs.applyTable.clearFilter('date')
    },
    clearFilter() {
      this.$refs.applyTable.clearFilter()
    },
    filterStatus(value, row) {
      return value === row.tag
    },
    getTagType: function (tag) {
      switch (tag) {
        case '通过':
          return 'success'
        case '审核中':
          return 'warning'
        case '未通过':
          return 'error'
      }
    },
  },
  computed: {},
}
</script>
<style>
</style>