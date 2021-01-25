// 查询页面的通过银行账号查询
<template>
<!-- TODO 银行卡号输入后判断属于哪个银行 -->
  <div id="bank-inquire">
    <h2>银行汇款查询</h2><p>您可以通过输入汇款时银行账号查询</p>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium">
      <el-row :gutter="11" type="flex" justify="start">
        <el-col :span="6">
          <el-form-item prop="bank_number">
            <el-input
              v-model="formData.bank_number"
              placeholder="请输入银行账号"
              show-word-limit
              clearable
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
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

export default {
  name: "bank-inquire",
  data() {
    return {
      formData: {
        bank_number: undefined
      },
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
