<template>
  <div id="resumePreview">
    <section class="profile">
      <h1>{{resume.profile.name || '区家乐'}}</h1>
      <h3>应聘岗位：{{resume.profile.job || '前端工程师'}}</h3>
      <p class="slogan">{{resume.profile.introduction || '让优秀成为一种习惯'}}</p>
      <p>
        <small>{{resume.profile.job || '前端工程师'}} | {{resume.profile.birth || '1998-04-07'}} | {{resume.profile.city || '广东江门'}}</small>
      </p>
    </section>
    <section class="studyItems">
      <h2>教育经历</h2>
      <ul>
        <li
          v-for="studyItem in filter(resume.studyHistory)"
        >毕业时间：<span v-show="studyItem.graduation">{{studyItem.graduation | formatDate}}</span> | {{studyItem.school}} | {{studyItem.profession}} | {{studyItem.education}}  </li>
      </ul>
    </section>
    <section class="workItems">
      <h2>工作经历</h2>
      <ul>
        <li v-for="workItem in filter(resume.workHistory)">
          <p><span>{{workItem.company}}</span><span style="margin-left: 200px;">{{workItem.post}}</span></p>
          <p>{{workItem.content}}</p>
        </li>
      </ul>
    </section>
    <section class="projectItems">
      <h2>项目经历</h2>
      <ul>
        <li v-for="projectItem in filter(resume.projectsHistory)">
          <p>
            <span v-show="projectItem.beginTime">{{projectItem.beginTime | formatDate}} - </span><span v-show="projectItem.endTime">{{projectItem.endTime | formatDate}}</span>
            <strong style="margin: 0 100px;">{{projectItem.projectName }} </strong>
            <span>{{projectItem.responsibilities}}</span>
            </p>
          <p>{{projectItem.projectIntroduction}}</p>
        </li>
      </ul>
    </section>
    <section class="honorItems">
      <h2>获奖经历</h2>
      <ul>
        <li v-for="honorItem in filter(resume.honorsHistory)">
          <p>
            <span v-show="honorItem.honorDate">{{honorItem.honorDate | formatDate}}</span>
            <span style="margin-left:30px;">{{honorItem.awards}}</span>
          </p>
        </li>
      </ul>
    </section>
    <section class="contact">
      <h2>联系方式</h2>
      <div>
        <ul>
          <li v-for="contactItem in resume.contactInformation">
            <p>电话：{{contactItem.phone || '13631897256'}}</p>
            <p>邮箱：{{contactItem.email || 'm13631897256@163.com'}}</p>
            <p>个人主页：{{contactItem.blog || 'www.github.com/xyyojl'}}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import { formatDate } from "../comment/date.js";
export default {
  name: "ResumePreview",
  computed: {
    resume() {
      return this.$store.state.resume;
    }
  },
  methods: {
    filter(array) {
      // 找出非空对象
      return array.filter(item => !this.isEmpty(item));
    },
    isEmpty(object) {
      //只要有一个value不是falsy，就返回false
      let empty = true;
      for (let key in object) {
        if (object[key]) {
          empty = false;
          break;
        }
      }
      return empty;
    }
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>
<style lang="scss">
#resumePreview {
  font-weight: normal;
  padding: 50px;
  > .profile {
    padding-bottom: 32px;
    border-bottom: 1px solid #dadada;
    > h3{
      font-size: 24px;
    }
    > .slogan {
      font-size: 20px;
      margin: 6px 0;
    }
    > p{
      font-size: 18px;
    }
  }
  > section h2 {
    position: relative;
    padding: 13px 0;
    background: rgb(243,243,243);
    color: #20a0ff;
    text-indent: 36px;
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 50px;
      background: #20a0ff;
    }
  }
  > .contact {
    padding: 32px 0;
    color: #333;
    > div {
      padding-top: 16px;
      p {
        font-size: 18px;
      }
    }
  }
  > .workItems,
  > .projectItems,
  > .honorItems {
    padding: 32px 0 12px 0;
    border-bottom: 1px solid #dadada;
    > ul {
      padding: 32px 16px 0 16px;
      > li {
        padding-bottom: 8px;
      }
      h3 {
        font-size: 20px;
        font-weight: normal;
        padding-bottom: 10px;
      }
      p {
        font-size: 16px;
        padding-bottom: 10px;
        white-space: pre-line;
      }
    }
  }
  > .studyItems {
    padding: 32px 0;
    border-bottom: 1px solid #dadada;
    > ul li {
      padding: 20px 0 0 0;
      font-size: 16px;
    }
  }
}
</style>