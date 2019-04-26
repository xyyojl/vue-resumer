<template>
  <div>
    <h2>联系方式</h2>
    <el-form class="ContactInformationInput">
      <div v-for="(contact,index) in contactInformation" class="contactBlock">
        <el-form-item label="电话">
          <el-input
            :value="contact.phone"
            @input="changeResumeField($event,'contactInformation','phone',index)"
            placeholder="电话"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input :value="contact.email"
           @input="changeResumeField($event,'contactInformation','email',index)"
           placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="个人主页">
          <el-input :value="contact.blog"
           @input="changeResumeField($event,'contactInformation','blog',index)"
           placeholder="博客链接"></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["contactInformation"],
  methods: {
    changeResumeField($event, field, subfield, index) {
      this.$store.commit("updateResume", {
        field,
        subfield,
        value: $event,
        index
      });
    }
  }
};
</script>