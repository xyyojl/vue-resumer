<template>
    <div>
        <h2>个人信息</h2>
        <el-form class="profileInput">
            <el-form-item label="姓名">
            <el-input v-model="profile.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="所在城市">
            <el-input v-model="profile.city" placeholder="所在城市"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
            <el-input v-model="profile.birth" placeholder="格式:1998-01-01"></el-input>
            </el-form-item>
            <el-form-item label="申请岗位">
            <el-input v-model="profile.job" placeholder="目标岗位"></el-input>
            </el-form-item>           
            <el-form-item label="自我介绍"  prop="desc">
            <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="profile.introduction" placeholder="用几句话介绍一下自己吧！"></el-input>
            </el-form-item>                      
        </el-form>
    </div>
</template>
<script>
export default {
    props:['profile']
}
</script>
<style lang="scss">

</style>



