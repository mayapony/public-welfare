let rules = {
  bank_number: [
    {
      require: true,
      message: '请输入银行账号',
      trigger: 'blur'
    },
    {
      pattern: /^([1-9]{1})(\d{14}|\d{18})$/,
      message: '请输入正确的银行卡号',
      trigger: 'blur'
    }
  ]
}

export { rules }
