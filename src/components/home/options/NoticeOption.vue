<template>
  <div class="notice-option">
    <el-card class="box-card">
      <div class="radio">
        排序：
        <el-radio-group v-model="reverse">
          <el-radio :label="true">倒序</el-radio>
          <el-radio :label="false">正序</el-radio>
        </el-radio-group>
      </div>

      <el-timeline :reverse="reverse">
        <el-timeline-item
          placement="top"
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
        >
          <el-card id="card-box" shadow="hover">
            <div id="card-cotent">
              <el-image
                style="
                  width: 150px;
                  height: 100px;
                  vertical-align: text-top;
                  margin-right: 2%;
                "
                :src="url"
                fit="fill"
              ></el-image>
              <div id="text-content">
                <h2>
                  第八十五批1名医务工作者获中国红基会字节跳动医务工作者人道救助基金资助
                </h2>
                <p>{{ activity.content }}</p>
              </div>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'notice-option',
  data() {
    return {
      reverse: true,
      url:
        'https://crcf-website-photo.oss-cn-beijing.aliyuncs.com/attachment/20210122/fcaeff67a942497c9d779a046f2799e7.png',
      activities: [
        {
          content:
            '2021年1月22日，1名医务工作者获得中国红十字基金会字节跳动医务工作者人道救助基金（以下简称“医务人道救助基金”）提供的人道救助。',
          timestamp: '2018-04-15',
        },
        {
          content: '通过审核',
          timestamp: '2018-04-13',
        },
        {
          content:
            '2021年1月22日，1名医务工作者获得中国红十字基金会字节跳动医务工作者人道救助基金（以下简称“医务人道救助基金”）提供的人道救助。',
          timestamp: '2018-04-11',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped>
#card-box {
  width: 90%;
}
h2 {
  border-left: none;
  margin-top: 5px;
  font-weight: bold;
  font-size: 1.6rem;
  color: #333333;
}
p {
  margin-left: 5px;
  line-height: 1.5rem;
}
#card-cotent {
  border: 1px solid #e4e7ed;
  display: flex;
  justify-content: flex-start;
}
.el-card__body {
  background-color: red;
}
</style>