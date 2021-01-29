var rules = {
  project: [
    {
      required: true,
      message: '请选择项目捐赠捐赠项目',
      trigger: 'change',
    },
  ],
  money: [
    {
      required: true,
      message: '金额不能为空',
      trigger: 'change',
    },
  ],
  donate_name: [],
  phoneNum: [
    {
      required: true,
      message: '请输入电话号码',
      trigger: 'blur',
    },
    {
      pattern: /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/,
      message: '您输入的号码有误',
      trigger: 'blur',
    },
  ],
  needInvoice: [],
  leave_word: [],
  pay_mode: [
    {
      required: true,
      message: '请选择支付方式',
      trigger: 'change',
    },
  ],
}

export { rules }
