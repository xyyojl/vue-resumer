<template>
    <div>
        <h2>教育经历</h2>
        <el-form class="studyInput" :label-position="labelPosition">
            <div v-for="(study,index) in studyHistory" class="studyBlock"> 
                <i class="el-icon-circle-close" v-on:click="removeStudyHistory(index)"></i>
                <el-form-item label="学校名称">
                    <el-input v-model="study.school" placeholder="学校名称"></el-input>
                </el-form-item>     
                <el-form-item label="专业">
                    <el-input v-model="study.profession" placeholder="专业"></el-input>
                </el-form-item>         
                <el-form-item label="学历" :inline="true" label-width="80px">
                    <el-select placeholder="学历" v-model="study.education">
                        <el-option label="大专" value="大专"></el-option>
                        <el-option label="本科" value="本科"></el-option>
                        <el-option label="硕士" value="硕士"></el-option>
                        <el-option label="博士" value="博士"></el-option>
                        <el-option label="其它" value="其它"></el-option>
                    </el-select>
                </el-form-item>         
                <el-form-item label="毕业时间">
                    <div class="block">
                        <el-date-picker  v-model="study.graduation" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
                    </div>
                </el-form-item>
            </div>
            <el-button class="btn" type="text" v-on:click="addStudyHistory">+ 添加更多</el-button>                    
        </el-form>
    </div>
</template>
<script>
export default {
    props:['studyHistory'],
    methods:{
        addStudyHistory(){
            this.studyHistory.push({
                school:'',
                profession:'',
                education:'',
                graduation:''
            })
        },
        removeStudyHistory(index){
            this.studyHistory.splice(index,1);
        }
    },
    data(){
        return {
            pickerOptions0:{
                disableDate(time){
                    return time.getTime() < Date.now()  - 8.64e7;
                }
            },
            labelPosition:'top',
        }
    }
}
</script>
<style lang="scss">
    
</style>


