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
      <li v-bind:class="{active:currentTab === 0}">
        <profileEditor v-bind:profile="profile"/>
      </li>
      <li v-bind:class="{active:currentTab === 1}">
        <workHistory v-bind:workHistory="workHistory"/>
      </li>
      <li v-bind:class="{active:currentTab === 2}">
        <studyHistory v-bind:studyHistory="studyHistory"></studyHistory>
      </li>
      <li v-bind:class="{active:currentTab === 3}">
        <projectsHistory v-bind:projectsHistory="projectsHistory"/>
      </li>
      <li v-bind:class="{active:currentTab === 4}">
        <honorsHistory v-bind:honorsHistory="honorsHistory"/>
      </li>
      <li v-bind:class="{active:currentTab === 5}">
        <contactInformation v-bind:contactInformation="contactInformation"/>
      </li>
    </ol>
  </div>
</template>
<script>
import profileEditor from "./ProfileEditor";
import workHistory from "./WorkHistory";
import studyHistory from "./StudyHistory";
import projectsHistory from "./ProjectsHistory";
import honorsHistory from "./HonorsHistory";
import contactInformation from "./ContactInformation";

export default {
  name: "ResumeEditor",
  data() {
    return {
      currentTab: 0,
      icons: ["shenfenzheng", "work", "book", "xiangmu", "jiangbei", "phone"],
      profile: {
        name: "",
        city: "",
        birth: "",
        job: "",
        introduction: ""
      },
      workHistory: [{ company: "", content: "", post: "" }],
      studyHistory:[
        {
          school:'',
          profession:'',
          // education:'',
          education:['大专','本科','硕士','博士','其它'],
          graduation:''
        }
      ],
      projectsHistory:[
        {
          projectName:'',
          responsibilities:'',
          useTime:'',
          projectIntroduction: ''
        }
      ],
      honorsHistory:[
        {
          awards:'',
          honorDate:''
        }
      ],
      contactInformation:[
        {
          phone:'',
          email:'',
          blog:''
        }
      ]
    };
  },
  methods: {},
  components: {
    profileEditor,
    workHistory,
    studyHistory,
    projectsHistory,
    honorsHistory,
    contactInformation
  }
};
</script>
<style lang="scss">
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
      > div h2 {
        color: #192229;
        padding-top: 20px;
        padding-left: 32px;
        box-sizing: border-box;
      }
      > div .profileInput,
      > div .ContactInformationInput {
        width: 415px;
        padding: 12px 32px 32px 32px;
      }
      > div .workInput {
        width: 390px;
        padding: 20px 32px 32px 32px;
        position: relative;
        > div {
          margin-bottom: 20px;
          box-shadow: 0 0 3px hsla(0, 0, 0, 0.3);
          padding: 16px;
          position: relative;
          > .el-icon-circle-close {
            position: absolute;
            right: 16px;
            top: 16px;
            z-index: 10;
          }
        }
        > .btn {
          position: absolute;
          right: 32px;
          bottom: 7px;
          left: 50%;
          margin-left: -34px;
        }
      }
      > div .studyInput,
      > div .projectsInput, 
      > div .honorsInput {
        width: 390px;
        padding: 20px 32px 32px 32px;
        position: relative;
        label{
          padding-bottom: 0;
        }
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
            margin-left: -34px;
        }
    }
    }
  }
}
</style>