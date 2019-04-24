<template>
  <div>
    <h2>工作经历</h2>
    <el-form class="workInput">
      <div class="workBlock" v-for="(work,index) in workHistory">
        <i class="el-icon-circle-close" v-on:click="removeWorkHistory(index)"></i>
        <el-form-item label="公司名称">
          <el-input v-model="work.company" placeholder="公司名称"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="work.post" placeholder="职位"></el-input>
        </el-form-item>
        <el-form-item label="工作内容" prop="desc">
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 6}"
            v-model="work.content"
            placeholder="工作内容"
          ></el-input>
        </el-form-item>
      </div>
      <el-button class="btn" type="text" v-on:click="addWorkHistory">+ 添加更多</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["workHistory"],
  methods: {
    addWorkHistory() {
      this.workHistory.push({
        company: "",
        content: "",
        post: ""
      });
    },
    removeWorkHistory(index) {
      this.workHistory.splice(index, 1);
    }
  },
  data(){
    return {
      // labelPosition:'top',
    }
  }
};
</script>
<style lang="scss">

</style>

