<template>
    <div>
        <h2>项目经历</h2>
        <el-form class="projectsInput" :label-position="labelPosition">
            <div v-for="(project,index) in projectsHistory" class="projectBlock"> 
                <i class="el-icon-circle-close" v-on:click="removeProjectsHistory(index)"></i>
                <el-form-item label="项目名称">
                    <el-input :value="project.projectName"  @input="changeResumeField($event,'projectsHistory','projectName',index)" placeholder="项目名称"></el-input>
                </el-form-item>     
                <el-form-item label="你的职责">
                    <el-input :value="project.responsibilities" @input="changeResumeField($event,'projectsHistory','responsibilities',index)" placeholder="你的职责"></el-input>
                </el-form-item>               
                <el-form-item label="项目开始时间">
                    <div class="block">
                        <el-date-picker :value="project.beginTime" @input="changeResumeField($event,'projectsHistory','beginTime',index)" type="date" placeholder="选择开始时间" :picker-options="pickerOptions0"></el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item label="项目结束时间">
                    <div class="block">
                        <el-date-picker :value="project.endTime" @input="changeResumeField($event,'projectsHistory','endTime',index)" type="date" placeholder="选择结束时间" :picker-options="pickerOptions0"></el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item label="项目介绍" prop="desc">
                    <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" placeholder="项目介绍" 
                    :value="project.projectIntroduction"
                    @input="changeResumeField($event,'projectsHistory','projectIntroduction',index)"></el-input>
                </el-form-item>
            </div>
            <el-button class="btn" type="text" v-on:click="addProjectsHistory">+ 添加更多</el-button>                    
        </el-form>
    </div>
</template>
<script>
export default {
    props:['projectsHistory'],
    methods:{
        addProjectsHistory(){
            this.projectsHistory.push({
                projectName:'',
                responsibilities:'',
                useTime:'',
                projectIntroduction: ''
            })
        },
        removeProjectsHistory(index){
            this.projectsHistory.splice(index,1);
        },
        changeResumeField($event,field, subfield,index){
            this.$store.commit('updateResume',{
                field, 
                subfield, 
                'value':$event,
                index
            })
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


