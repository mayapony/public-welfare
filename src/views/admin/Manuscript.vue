
<template>
  <div id="container">
    <el-card class="manuscript">
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <el-table-column label="发布日期" prop="date"> </el-table-column>
        <el-table-column label="文稿" prop="name"> </el-table-column>
        <el-table-column align="right">
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="dialogTableVisible = true"
              >替换</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog title="草稿箱" :visible.sync="dialogTableVisible">
      <el-table :data="tableData">
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="200"
        ></el-table-column>
        <el-table-column align="right">
          <template>
            <el-button type="primary">选择</el-button>
          </template>
        </el-table-column>
      </el-table> </el-dialog
    >>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '《习近平谈治国理念》',
        },
        {
          date: '2016-05-04',
          name: '《习近平谈治国理念》',
        },
        {
          date: '2016-05-01',
          name: '《习近平谈治国理念》',
        },
        {
          date: '2016-05-03',
          name: '《习近平谈治国方阵》',
        },
      ],
      search: '',

      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      formLabelWidth: '120px',
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
  },
}
</script>>

<style scoped>
#container {
  height: 100vh;
}
.manuscript {
  width: 90%;
  margin: 0 auto;
  /* margin-left: 17%; */
  margin-top: 2vh;
}
</style>