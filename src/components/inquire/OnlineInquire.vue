// 查询页面的在线查询部分
<template>
  <div id="online-inquire">
    <h2>在线捐赠查询</h2><p>您可以通过输入订单号或者姓名+手机号查询</p>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium">
      <el-row :gutter="20" type="flex" justify="start">
        <el-col :span="6">
          <el-form-item prop="order_number">
            <el-input
              v-model="formData.order_number"
              placeholder="请输入订单号"
              show-word-limit
              clearable
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item prop="name">
            <el-input
              v-model="formData.name"
              placeholder="请输入捐赠人姓名"
              clearable
              :style="{ width: '100%' }"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item prop="phone_number">
            <el-input
              v-model="formData.phone_number"
              placeholder="请输入捐赠人手机号码"
              :maxlength="12"
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
import { rules } from "@/assets/js/inquire/rules";

export default {
  name: "online-inquire",
  data() {
    return {
      formData: {
        order_number: undefined,
        name: undefined,
        phone_number: undefined,
        field110: undefined,
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
