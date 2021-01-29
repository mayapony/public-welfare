// 线上捐赠
<template>
  <div id="donate-online">
    <h2>我要捐赠</h2>
    <el-card class="donate-card" shadow="never">
      <div>
        <p>
          请正确填写捐款人信息。标注
          <span class="red">“*”</span>
          为必须填写的项目。您当前选择的支付方式为
          <span class="red">{{ payMode }}</span> 支付
        </p>
        <el-row :gutter="16">
          <el-form
            ref="donateForm"
            :model="donateData"
            :rules="rules"
            size="medium"
            label-width="100px"
            label-position="left"
          >
            <el-col :span="18">
              <el-row>
                <el-col :span="14">
                  <el-form-item label="捐赠项目" prop="project">
                    <el-select
                      v-model="donateData.project"
                      placeholder="请选择项目捐赠捐赠项目"
                      clearable
                      :style="{ width: '100%' }"
                    >
                      <el-option
                        v-for="(item, index) in projectOptions"
                        :key="index"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="14">
                  <el-form-item label="金额" prop="money">
                    <el-radio-group v-model="donateData.money" size="medium">
                      <el-radio
                        v-for="(item, index) in moneyOptions"
                        :key="index"
                        :label="item.value"
                        :disabled="item.disabled"
                        >{{ item.label }}</el-radio
                      >
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                <el-col :span="14">
                  <el-form-item label=" 是否匿名" prop="isAnony">
                    <el-switch
                      v-model="donateData.isAnony"
                      active-text="匿名"
                    ></el-switch>
                  </el-form-item>
                </el-col>
                <el-col :span="15">
                  <el-form-item
                    label-width="180px"
                    label="捐赠人姓名（发票抬头）"
                    prop="donate_name"
                  >
                    <el-input
                      v-model="donateData.donate_name"
                      placeholder="请输入捐赠人姓名（发票抬头）"
                      clearable
                      prefix-icon="el-icon-user-solid"
                      :style="{ width: '100%' }"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="14">
                  <el-form-item label="联系电话" prop="phoneNum">
                    <el-input
                      v-model="donateData.phoneNum"
                      placeholder="请输入电话号码"
                      clearable
                      prefix-icon="el-icon-phone"
                      :style="{ width: '100%' }"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="13">
                  <el-form-item
                    label-width="140px"
                    label="是否需要票据"
                    prop="needInvoice"
                  >
                    <el-radio-group
                      v-model="donateData.needInvoice"
                      size="medium"
                    >
                      <el-radio
                        v-for="(item, index) in needInvoiceOptions"
                        :key="index"
                        :label="item.value"
                        :disabled="item.disabled"
                        >{{ item.label }}</el-radio
                      >
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                <el-col :span="13">
                  <el-form-item label="捐赠留言" prop="leave_words">
                    <el-input
                      v-model="donateData.leave_words"
                      type="textarea"
                      placeholder="请输入捐赠留言"
                      show-word-limit
                      :autosize="{ minRows: 1, maxRows: 20 }"
                      :style="{ width: '100%' }"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="14">
                  <el-form-item
                    label="选择支付方式"
                    prop="pay_mode"
                    label-width="140px"
                  >
                    <el-select
                      v-model="donateData.pay_mode"
                      placeholder="请选择选择支付方式"
                      clearable
                      :style="{ width: '100%' }"
                    >
                      <el-option
                        v-for="(item, index) in pay_modeOptions"
                        :key="index"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-form-item size="large">
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </el-col>
          </el-form>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import { rules } from '@/assets/js/donate/rules'
import options from '@/assets/js/donate/options'
export default {
  name: 'donate-online',
  data() {
    return {
      donateData: {
        project: undefined,
        money: 10,
        isAnony: false,
        donate_name: undefined,
        phoneNum: undefined,
        needInvoice: false,
        leave_words: undefined,
        pay_mode: 'Alipay',
      },
      rules: rules,
      projectOptions: options.projectOptions,
      moneyOptions: options.moneyOptions,
      needInvoiceOptions: options.needInvoiceOptions,
      pay_modeOptions: options.pay_modeOptions,
    }
  },
  computed: {
    payMode: function () {
      if (this.donateData.pay_mode === 'Alipay') {
        return '支付宝'
      } else return '微信'
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['donateForm'].validate((valid) => {
        if (!valid) return
        // TODO 提交表单
        console.log(this.donateData)
      })
    },
    resetForm() {
      this.$refs['donateForm'].resetFields()
    },
  },
}
</script>

<style scoped>
.donate-card {
  margin: 0 auto;
  margin-top: 20px;
}
</style>