<template>
  <div>
    <h2>联系方式</h2>
    <el-form class="ContactInformationInput">
        <el-form-item label="电话">
            <el-input v-model="contactInformation.phone" placeholder="电话"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="contactInformation.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="个人主页">
            <el-input v-model="contactInformation.blog" placeholder="博客链接"></el-input>
        </el-form-item>        
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["contactInformation"],
};
</script>


