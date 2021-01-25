<template>
  <div id="inquire">
    <el-card class="form_card" shadow="hover">
      <div slot="header">查询信息</div>
      <online-inquire></online-inquire>
      <bank-inquire></bank-inquire>
      <condition-inquire></condition-inquire>
    </el-card>
  </div>
</template>

<script>
import OnlineInquire from '@/components/inquire/OnlineInquire'
import BankInquire from '@/components/inquire/BankInquire'
import ConditionInquire from '@/components/inquire/ConditionInquire'
export default {
  name: "inquire",
  components: { OnlineInquire, BankInquire, ConditionInquire },
  props: [],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
.form_card {
  width: 85%;
  margin: 0 auto;
  margin-top: 2vh;
}
#inquire {
  padding-top: 20px;
  background-color: #f9f9f9;
  margin-bottom: 5vh;
}
html {
  background-color: #f9f9f9;
}
</style>