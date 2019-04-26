<template>
    <div>
        <h2>个人信息</h2><!-- , $event.target.value -->
        <el-form class="profileInput">
            <el-form-item label="姓名">
            <el-input :value="profile.name" @input="changeResumeField($event,'profile','name')" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="所在城市">
            <el-input :value="profile.city" @input="changeResumeField($event,'profile','city')" placeholder="所在城市"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
            <el-input :value="profile.birth" @input="changeResumeField($event,'profile','birth')" placeholder="格式:1998-01-01"></el-input>
            </el-form-item>
            <el-form-item label="申请岗位">
            <el-input :value="profile.job"  @input="changeResumeField($event,'profile','job')" placeholder="目标岗位"></el-input>
            </el-form-item>           
            <el-form-item label="自我介绍"  prop="desc">
            <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" 
            :value="profile.introduction"  @input="changeResumeField($event,'profile','introduction')"
            placeholder="用几句话介绍一下自己吧！"></el-input>
            </el-form-item>                      
        </el-form>
    </div>
</template>
<script>
export default {
    props:['profile'],
    methods:{
        changeResumeField($event,field, subfield){
            console.log(1)
            console.log($event) // 输入值：xxx
            console.log(field)
            console.log(subfield) // name
            // field, subfield
            this.$store.commit('updateResume',{
                field, // profile
                subfield, // key
                'value':$event // 输入值
            })
        }
    }
}
</script>
<style lang="scss">

</style>



