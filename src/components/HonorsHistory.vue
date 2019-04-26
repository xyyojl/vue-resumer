<template>
  <div>
    <h2>获奖情况</h2>
    <el-form class="honorsInput" :label-position="labelPosition">
      <div class="honorBlock" v-for="(honor,index) in honorsHistory">
        <i class="el-icon-circle-close" v-on:click="removeHonorsHistory(index)"></i>
        <el-form-item label="奖项">
          <el-input :value="honor.awards" @input="changeResumeField($event,'honorsHistory','awards',index)" placeholder="奖项"></el-input>
        </el-form-item>
        <el-form-item label="获奖时间">
          <div class="block">
            <el-date-picker
              :value="honor.honorDate"
              @input="changeResumeField($event,'honorsHistory','honorDate',index)"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0"
            ></el-date-picker>
          </div>
        </el-form-item>
      </div>
      <el-button class="btn" type="text" v-on:click="addHonorsHistory">+ 添加更多</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["honorsHistory"],
  methods: {
    addHonorsHistory() {
      this.honorsHistory.push({
        awards: "",
        honorDate: ""
      });
    },
    removeHonorsHistory(index) {
      this.honorsHistory.splice(index, 1);
    },
    changeResumeField($event, field, subfield, index) {
      this.$store.commit("updateResume", {
        field,
        subfield,
        value: $event,
        index
      });
    }
  },
  data() {
    return {
      pickerOptions0: {
        disableDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      labelPosition: "top"
    };
  }
};
</script>
<style lang="scss">
</style>

