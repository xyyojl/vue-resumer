<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li
          v-for="(item,index) in [0,1,2,3,4,5]"
          :class="{active:currentTab === item}"
          @click="currentTab = item"
          :key="index"
        >
          <svg class="icon">
            <use v-bind:xlink:href="`#icon-${icons[item]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
      <!-- <li
        v-for="(item,index) in [0,1,2,3,4,5]"
        :class="{active:currentTab === item}"
        :key="index"
      >Tab{{item+1}}</li> -->
      <li v-bind:class="{active:currentTab === 0}">
        <h2>个人信息</h2>
        <el-form class="profileInput">
          <el-form-item label="姓名">
            <el-input v-model="profile.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="所在城市">
            <el-input v-model="profile.city" placeholder="所在城市"></el-input>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-input v-model="profile.birth" placeholder="出生日期"></el-input>
          </el-form-item>
          <el-form-item label="申请岗位">
            <el-input v-model="profile.job" placeholder="目标岗位"></el-input>
          </el-form-item>           
          <el-form-item label="自我介绍"  prop="desc">
            <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="profile.introduction" placeholder="自我介绍"></el-input>
          </el-form-item>                      
        </el-form>
      </li>
      <li v-bind:class="{active:currentTab === 1}">
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
              <el-form-item label="工作内容"  prop="desc">
                <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="work.content" placeholder="工作内容"></el-input>
              </el-form-item>   
          </div>       
          <el-button class="btn" type="text" v-on:click="addWorkHistory">+ 添加更多</el-button>                            
        </el-form> 
           
      </li>
      <li v-bind:class="{active:currentTab === 2}">
        <h2>教育经历</h2>
      </li>
      <li v-bind:class="{active:currentTab === 3}">
        <h2>项目经历</h2>
      </li>
      <li v-bind:class="{active:currentTab === 4}">
        <h2>获奖情况</h2>
      </li>
      <li v-bind:class="{active:currentTab === 5}">
        <h2>联系方式</h2>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "ResumeEditor",
  data() {
    return {
      currentTab: 0,
      icons: ["shenfenzheng", "work", "book", "xiangmu", "jiangbei", "phone"],
      profile:{
        name:'',
        city:'',
        birth:'',
        job:'',
        introduction:''
      },
      workHistory:[
        {company:'',content:'',post:''}
      ]
    };
  },
  methods:{
    addWorkHistory(){
      this.workHistory.push({
        company:'',
        content:'',
        post:''
      })
    },
    removeWorkHistory(index){
      this.workHistory.splice(index,1);
    }
  }
};
</script>
<style lang="scss" scoped>
#resumeEditor {
  min-height: 100px;
  display: flex;
  background-color: #fff;
  color: #333;
  > nav {
    width: 80px;
    text-align: center;
    background: #080c0f;
    > ol li {
      padding-top: 16px;
      padding-bottom: 16px;
      > .icon {
        width: 32px;
        height: 32px;
        fill: white;
      }
      &.active {
        background: #fff;
        > .icon {
          fill: #192229;
        }
      }
    }
  }
  > .panes {
    > li {
      display: none;
      overflow: auto;
      height: 100%;
      &.active {
        display: block;
      }
      > h2{
        color: #192229;
        padding-top: 20px;
        padding-left: 32px;
        box-sizing: border-box;
      }
      > .profileInput{
        width: 415px;
        padding: 12px 32px 32px 32px;
      }
      > .workInput{
        width: 390px;
        padding: 20px 32px 32px 32px;
        position: relative;
        > div{
          margin-bottom: 20px;
          box-shadow: 0 0 3px hsla(0, 0, 0, 0.3);
          padding: 16px;
          position: relative;
          > .el-icon-circle-close{
            position: absolute;
            right: 16px;
            top: 16px;
            z-index: 10;
          }
        }
        > .btn{
          position: absolute;
          right: 32px;
          bottom: 7px;
          left: 50%;
          margin-left: -34px;;
        }
      }
    }
  }
}
</style>