<template>
  <div id="resumePreview">
    <section class="profile">
      <h1>{{resume.profile.name || '区家乐'}}</h1>
      <p class="slogan">{{resume.profile.introduction || '让优秀成为一种习惯'}}</p>
      <p>
        <small>{{resume.profile.job || '前端工程师'}} | {{resume.profile.birth || '1998-04-07'}} | {{resume.profile.city || '广东江门'}}</small>
      </p>
    </section>
    <section class="studyItems">
      <h2>教育经历</h2>
      <ul>
        <li v-for="studyItem in filter(resume.studyHistory)">
          {{studyItem.school}} | {{studyItem.profession}} | {{studyItem.education}} | 毕业时间：{{studyItem.graduation}}
        </li>
      </ul>
    </section>
    <section class="workItems">
      <h2>工作经历</h2>
      <ul>
        <li v-for="workItem in filter(resume.workHistory)">
          <p>{{workItem.company}}</p>
          <p>{{workItem.post}}</p>
          <p>{{workItem.content}}</p>
        </li>
      </ul>
    </section>
    <section class="projectItems" >
        <h2>项目经历</h2>
        <ul>
           <li v-for="projectItem in filter(resume.projectsHistory)">
               <h3>{{projectItem.projectName }}</h3>
               <p>{{projectItem.responsibilities}}</p>
               <p>{{projectItem.useTime}}</p>
               <p>{{projectItem.projectIntroduction}}</p>
           </li>
       </ul>
   </section>
   <section class="honorItems" >
        <h2>获奖经历</h2>
        <ul>
           <li v-for="honorItem in filter(resume.honorsHistory)">
               <h3>{{honorItem.awards}}</h3>
               <p>{{honorItem.honorDate}}</p>
           </li>
       </ul>    
   </section>
    <section class="contact">
        <h2>联系方式</h2>
        <div>
            <p>电话：{{resume.contactInformation.phone || '14323872482'}}</p>
            <p>邮箱：{{resume.contactInformation.email || 'm13631897256@163.com'}}</p>
            <p>个人主页：{{resume.contactInformation.blog || 'www.github.com/xyyojl'}}</p>
        </div>      
      </section>
  </div>
</template>
<script>
export default {
  name: "ResumePreview",
  computed: {
    resume() {
      return this.$store.state.resume;
    }
  },
  methods: {
      filter(array){ // 找出非空对象
        return array.filter(item => !this.isEmpty(item));
      },
      isEmpty(object){ //只要有一个value不是falsy，就返回false
        let empty = true;
        for (let key in object) {
            if (object[key]) {
                empty = false;
                break;
            }
        }
        return empty;
      }
  }
};
</script>
<style lang="scss">
#resumePreview {
    font-weight: normal;
    padding: 50px;
    > .profile{
        padding-bottom: 32px;
        border-bottom: 1px solid #DADADA;
        > .solgan{
            font-size: 30px;
        }
    }
    > section h2{
        background: #20A0FF;
        color: #fff;
        padding: 15px;
        width: 88px;
        font-weight: normal;
    }
    > .contact{
        padding: 32px 0;
        color: #333;
        > div{
            padding-top: 16px;
            > p{
                font-size: 18px;
            }
        }
    }
    > .workItems,
    > .projectItems,
    > .honorItems{
        padding: 32px 0 12px 0;
        border-bottom: 1px solid #DADADA; 
        > ul{
            list-style: disc;
            padding: 32px 16px 0 16px;
            > li{
                padding-bottom: 20px;
            }
            h3{
                font-size: 20px;
                font-weight: normal;
                padding-bottom: 10px;
            }
            p{
                font-size: 16px;
                padding-bottom: 10px;
                white-space: pre-line;
            }
        }
    }
    > .studyItems{
        padding: 32px 0; 
        border-bottom: 1px solid #DADADA;
        > ul li{
            padding: 20px 0 0 0;
            font-size: 16px;
        }
    }
    
}
</style>