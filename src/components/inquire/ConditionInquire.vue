// 查询页面的通过银行账号查询
<template>
  <!-- TODO 银行卡号输入后判断属于哪个银行 -->
  <div id="condition_inquire">
    <h2>请选择查询条件</h2>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium">
      <el-row :gutter="20" type="flex" justify="start">
        <el-col :span="5">
          <el-form-item prop="donor_name">
            <el-input
              v-model="formData.donor_name"
              placeholder="请输入捐赠人姓名"
              clearable
              :style="{ width: '100%' }"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item prop="receiver_name">
            <el-input
              v-model="formData.receiver_name"
              placeholder="请输入受助人姓名"
              clearable
              :style="{ width: '100%' }"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="15">
          <el-form-item>
            <el-date-picker
              v-model="formData.date_range"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="">
            <el-cascader
              placeholder="请选择地址"
              :options="options"
              v-model="selectedOptions"
              @change="handleChange"
              clearable="true"
            >
            </el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="0">
          <el-form-item label="">
            <el-select v-model="user_project" placeholder="请选择项目">
              <el-option
                v-for="item in projects"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="medium">
              点击查询
            </el-button>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-button @click="resetForm" size="medium">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { rules } from "@/assets/js/inquire/bank_rules";
import { regionData } from "element-china-area-data";
export default {
  name: "condition-inquire",
  data() {
    return {
      formData: {
        donor_name: undefined,
        receiver_name: undefined,
        date_range: undefined,
      },
      options: regionData,
      projects: undefined,
      user_project: undefined,
      selectedOptions: [],
      rules: rules,
    };
  },
  methods: {
    submitForm() {
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        // TODO 提交表单
      });
    },
    resetForm() {
      this.$refs["elForm"].resetFields();
    },
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
<style scoped>
h2 {
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-left: 5px solid #d71518;
  padding-left: 5px;
}
p {
  font-size: 1rem;
  color: #d71518;
}
</style>
