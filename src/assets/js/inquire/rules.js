var rules = {
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
}
export { rules }