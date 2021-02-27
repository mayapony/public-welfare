<template>
  <el-card class="drafts">
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
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
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
</template>

<script>
export default {
  data() {
    return {
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
.drafts {
  width: 80%;
  margin-left: 17%;
  margin-top: 2vh;
}
</style>