<template>
  <div id="inquire">
    <el-card class="form_card" shadow="hover">
      <div slot="header">查询信息</div>
      <div class="form">
        <el-form
          ref="elForm"
          :model="formData"
          :rules="rules"
          size="medium"
        >
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item prop="order_number">
                <el-input
                  v-model="formData.order_number"
                  placeholder="订单号"
                  show-word-limit
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item prop="name">
                <el-input
                  v-model="formData.name"
                  placeholder="捐赠人姓名"
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
                  placeholder="捐赠人手机号码"
                  :maxlength="12"
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item>
                <el-button type="primary" icon="el-icon-search" size="medium">
                  点击查询
                </el-button>
              </el-form-item>
            </el-col>
            <el-col :span="1">
                <el-button @click="resetForm" size="medium">重置</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "inquire",
  components: {},
  props: [],
  data() {
    return {
      formData: {
        order_number: undefined,
        name: undefined,
        phone_number: undefined,
        field110: undefined,
      },
      rules: {
        order_number: [
          {
            required: true,
            message: "请输入订单号",
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: "请输入捐赠人姓名",
            trigger: "blur",
          },
        ],
        phone_number: [
          {
            required: true,
            message: "请输入捐赠人手机号码",
            trigger: "blur",
          },
          {
            pattern: /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/,
            message: "手机号码填写有误",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
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

<style>
.form_card {
  width: 870px;
  margin: 0 auto;
  margin-top: 2vh;
}
</style>