webpackJsonp([1],{"1uuo":function(t,e){},"27NF":function(t,e){},AcFR:function(t,e){},"F+wo":function(t,e){},I8Tk:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("7+uW"),n=(r("uMhA"),r("NcP2"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"topbar"},on:{preview:this.preview}},[e("h1",{staticClass:"title"},[this._v("Resumer")]),this._v(" "),e("div",[e("el-button",{on:{click:this.preview}},[this._v("预览")])],1)])},staticRenderFns:[]});var i=r("VU/8")({name:"Topbar",methods:{preview:function(){this.$emit("preview",!0)}}},n,!1,function(t){r("AcFR")},"data-v-44354bf9",null).exports,s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("个人信息")]),t._v(" "),r("el-form",{staticClass:"profileInput"},[r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{attrs:{value:t.profile.name,placeholder:"姓名"},on:{input:function(e){return t.changeResumeField(e,"profile","name")}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"所在城市"}},[r("el-input",{attrs:{value:t.profile.city,placeholder:"所在城市"},on:{input:function(e){return t.changeResumeField(e,"profile","city")}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"出生日期"}},[r("el-input",{attrs:{value:t.profile.birth,placeholder:"格式:1998-01-01"},on:{input:function(e){return t.changeResumeField(e,"profile","birth")}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"申请岗位"}},[r("el-input",{attrs:{value:t.profile.job,placeholder:"目标岗位"},on:{input:function(e){return t.changeResumeField(e,"profile","job")}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"自我介绍",prop:"desc"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:6},value:t.profile.introduction,placeholder:"用几句话介绍一下自己吧！"},on:{input:function(e){return t.changeResumeField(e,"profile","introduction")}}})],1)],1)],1)},staticRenderFns:[]};var a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("工作经历")]),t._v(" "),r("el-form",{staticClass:"workInput"},[t._l(t.workHistory,function(e,o){return r("div",{staticClass:"workBlock"},[r("i",{staticClass:"el-icon-circle-close",on:{click:function(e){return t.removeWorkHistory(o)}}}),t._v(" "),r("el-form-item",{attrs:{label:"公司名称"}},[r("el-input",{attrs:{value:e.company,placeholder:"公司名称"},on:{input:function(e){return t.changeResumeField(e,"workHistory","company",o)}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"职位"}},[r("el-input",{attrs:{value:e.post,placeholder:"职位"},on:{input:function(e){return t.changeResumeField(e,"workHistory","post",o)}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"工作内容",prop:"desc"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:6},value:e.content,placeholder:"工作内容"},on:{input:function(e){return t.changeResumeField(e,"workHistory","content",o)}}})],1)],1)}),t._v(" "),r("el-button",{staticClass:"btn",attrs:{type:"text"},on:{click:t.addWorkHistory}},[t._v("+ 添加更多")])],2)],1)},staticRenderFns:[]};var l={props:["studyHistory"],methods:{addStudyHistory:function(){this.studyHistory.push({school:"",profession:"",education:"",graduation:""})},removeStudyHistory:function(t){this.studyHistory.splice(t,1)},changeResumeField:function(t,e,r,o){this.$store.commit("updateResume",{field:e,subfield:r,value:t,index:o})}},data:function(){return{pickerOptions0:{disableDate:function(t){return t.getTime()<Date.now()-864e5}},labelPosition:"top"}}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("教育经历")]),t._v(" "),r("el-form",{staticClass:"studyInput",attrs:{"label-position":t.labelPosition}},[t._l(t.studyHistory,function(e,o){return r("div",{staticClass:"studyBlock"},[r("i",{staticClass:"el-icon-circle-close",on:{click:function(e){return t.removeStudyHistory(o)}}}),t._v(" "),r("el-form-item",{attrs:{label:"学校名称"}},[r("el-input",{attrs:{value:e.school,placeholder:"学校名称"},on:{input:function(e){return t.changeResumeField(e,"studyHistory","school",o)}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"专业"}},[r("el-input",{attrs:{value:e.profession,placeholder:"专业"},on:{input:function(e){return t.changeResumeField(e,"studyHistory","profession",o)}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"学历",inline:!0,"label-width":"80px"}},[r("el-select",{attrs:{placeholder:"学历",value:e.education},on:{input:function(e){return t.changeResumeField(e,"studyHistory","education",o)}}},[r("el-option",{attrs:{label:"大专",value:"大专"}}),t._v(" "),r("el-option",{attrs:{label:"本科",value:"本科"}}),t._v(" "),r("el-option",{attrs:{label:"硕士",value:"硕士"}}),t._v(" "),r("el-option",{attrs:{label:"博士",value:"博士"}}),t._v(" "),r("el-option",{attrs:{label:"其它",value:"其它"}})],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"毕业时间"}},[r("div",{staticClass:"block"},[r("el-date-picker",{attrs:{value:e.graduation,type:"date",placeholder:"选择日期","picker-options":t.pickerOptions0},on:{input:function(e){return t.changeResumeField(e,"studyHistory","graduation",o)}}})],1)])],1)}),t._v(" "),r("el-button",{staticClass:"btn",attrs:{type:"text"},on:{click:t.addStudyHistory}},[t._v("+ 添加更多")])],2)],1)},staticRenderFns:[]};var c={props:["projectsHistory"],methods:{addProjectsHistory:function(){this.projectsHistory.push({projectName:"",responsibilities:"",useTime:"",projectIntroduction:""})},removeProjectsHistory:function(t){this.projectsHistory.splice(t,1)},changeResumeField:function(t,e,r,o){this.$store.commit("updateResume",{field:e,subfield:r,value:t,index:o})}},data:function(){return{pickerOptions0:{disableDate:function(t){return t.getTime()<Date.now()-864e5}},labelPosition:"top"}}},p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("项目经历")]),t._v(" "),r("el-form",{staticClass:"projectsInput",attrs:{"label-position":t.labelPosition}},[t._l(t.projectsHistory,function(e,o){return r("div",{staticClass:"projectBlock"},[r("i",{staticClass:"el-icon-circle-close",on:{click:function(e){return t.removeProjectsHistory(o)}}}),t._v(" "),r("el-form-item",{attrs:{label:"项目名称"}},[r("el-input",{attrs:{value:e.projectName,placeholder:"项目名称"},on:{input:function(e){return t.changeResumeField(e,"projectsHistory","projectName",o)}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"你的职责"}},[r("el-input",{attrs:{value:e.responsibilities,placeholder:"你的职责"},on:{input:function(e){return t.changeResumeField(e,"projectsHistory","responsibilities",o)}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"项目开始时间"}},[r("div",{staticClass:"block"},[r("el-date-picker",{attrs:{value:e.beginTime,type:"date",placeholder:"选择开始时间","picker-options":t.pickerOptions0},on:{input:function(e){return t.changeResumeField(e,"projectsHistory","beginTime",o)}}})],1)]),t._v(" "),r("el-form-item",{attrs:{label:"项目结束时间"}},[r("div",{staticClass:"block"},[r("el-date-picker",{attrs:{value:e.endTime,type:"date",placeholder:"选择结束时间","picker-options":t.pickerOptions0},on:{input:function(e){return t.changeResumeField(e,"projectsHistory","endTime",o)}}})],1)]),t._v(" "),r("el-form-item",{attrs:{label:"项目介绍",prop:"desc"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:6},placeholder:"项目介绍",value:e.projectIntroduction},on:{input:function(e){return t.changeResumeField(e,"projectsHistory","projectIntroduction",o)}}})],1)],1)}),t._v(" "),r("el-button",{staticClass:"btn",attrs:{type:"text"},on:{click:t.addProjectsHistory}},[t._v("+ 添加更多")])],2)],1)},staticRenderFns:[]};var v={props:["honorsHistory"],methods:{addHonorsHistory:function(){this.honorsHistory.push({awards:"",honorDate:""})},removeHonorsHistory:function(t){this.honorsHistory.splice(t,1)},changeResumeField:function(t,e,r,o){this.$store.commit("updateResume",{field:e,subfield:r,value:t,index:o})}},data:function(){return{pickerOptions0:{disableDate:function(t){return t.getTime()<Date.now()-864e5}},labelPosition:"top"}}},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("获奖情况")]),t._v(" "),r("el-form",{staticClass:"honorsInput",attrs:{"label-position":t.labelPosition}},[t._l(t.honorsHistory,function(e,o){return r("div",{staticClass:"honorBlock"},[r("i",{staticClass:"el-icon-circle-close",on:{click:function(e){return t.removeHonorsHistory(o)}}}),t._v(" "),r("el-form-item",{attrs:{label:"奖项"}},[r("el-input",{attrs:{value:e.awards,placeholder:"奖项"},on:{input:function(e){return t.changeResumeField(e,"honorsHistory","awards",o)}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"获奖时间"}},[r("div",{staticClass:"block"},[r("el-date-picker",{attrs:{value:e.honorDate,type:"date",placeholder:"选择日期","picker-options":t.pickerOptions0},on:{input:function(e){return t.changeResumeField(e,"honorsHistory","honorDate",o)}}})],1)])],1)}),t._v(" "),r("el-button",{staticClass:"btn",attrs:{type:"text"},on:{click:t.addHonorsHistory}},[t._v("+ 添加更多")])],2)],1)},staticRenderFns:[]};var d={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("联系方式")]),t._v(" "),r("el-form",{staticClass:"ContactInformationInput"},t._l(t.contactInformation,function(e,o){return r("div",{staticClass:"contactBlock"},[r("el-form-item",{attrs:{label:"电话"}},[r("el-input",{attrs:{value:e.phone,placeholder:"电话"},on:{input:function(e){return t.changeResumeField(e,"contactInformation","phone",o)}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"邮箱"}},[r("el-input",{attrs:{value:e.email,placeholder:"邮箱"},on:{input:function(e){return t.changeResumeField(e,"contactInformation","email",o)}}})],1),t._v(" "),r("el-form-item",{attrs:{label:"个人主页"}},[r("el-input",{attrs:{value:e.blog,placeholder:"博客链接"},on:{input:function(e){return t.changeResumeField(e,"contactInformation","blog",o)}}})],1)],1)}),0)],1)},staticRenderFns:[]},f={name:"ResumeEditor",methods:{},components:{profileEditor:r("VU/8")({props:["profile"],methods:{changeResumeField:function(t,e,r){this.$store.commit("updateResume",{field:e,subfield:r,value:t})}}},s,!1,function(t){r("27NF")},null,null).exports,workHistory:r("VU/8")({props:["workHistory"],methods:{addWorkHistory:function(){this.workHistory.push({company:"",content:"",post:""})},removeWorkHistory:function(t){this.workHistory.splice(t,1)},changeResumeField:function(t,e,r,o){this.$store.commit("updateResume",{field:e,subfield:r,value:t,index:o})}},data:function(){return{}}},a,!1,function(t){r("nwL6")},null,null).exports,studyHistory:r("VU/8")(l,u,!1,function(t){r("I8Tk")},null,null).exports,projectsHistory:r("VU/8")(c,p,!1,function(t){r("F+wo")},null,null).exports,honorsHistory:r("VU/8")(v,m,!1,function(t){r("j13J")},null,null).exports,contactInformation:r("VU/8")({props:["contactInformation"],methods:{changeResumeField:function(t,e,r,o){this.$store.commit("updateResume",{field:e,subfield:r,value:t,index:o})}}},d,!1,null,null,null).exports},computed:{currentTab:{get:function(){return this.$store.state.currentTab},set:function(t){return this.$store.commit("switchTab",t)}},icons:function(){return this.$store.state.icons},resume:function(){return this.$store.state.resume}}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"resumeEditor"}},[r("nav",[r("ol",t._l([0,1,2,3,4,5],function(e,o){return r("li",{key:o,class:{active:t.currentTab===e},on:{click:function(r){t.currentTab=e}}},[r("svg",{staticClass:"icon"},[r("use",{attrs:{"xlink:href":"#icon-"+t.icons[e]}})])])}),0)]),t._v(" "),r("ol",{staticClass:"panes"},[r("li",{class:{active:0===t.currentTab}},[r("profileEditor",{attrs:{profile:t.resume.profile}})],1),t._v(" "),r("li",{class:{active:1===t.currentTab}},[r("workHistory",{attrs:{workHistory:t.resume.workHistory}})],1),t._v(" "),r("li",{class:{active:2===t.currentTab}},[r("studyHistory",{attrs:{studyHistory:t.resume.studyHistory}})],1),t._v(" "),r("li",{class:{active:3===t.currentTab}},[r("projectsHistory",{attrs:{projectsHistory:t.resume.projectsHistory}})],1),t._v(" "),r("li",{class:{active:4===t.currentTab}},[r("honorsHistory",{attrs:{honorsHistory:t.resume.honorsHistory}})],1),t._v(" "),r("li",{class:{active:5===t.currentTab}},[r("contactInformation",{attrs:{contactInformation:t.resume.contactInformation}})],1)])])},staticRenderFns:[]};var _=r("VU/8")(f,h,!1,function(t){r("dgqW")},null,null).exports;function b(t){return("00"+t).substr(t.length)}var y={name:"ResumePreview",computed:{resume:function(){return this.$store.state.resume}},methods:{filter:function(t){var e=this;return t.filter(function(t){return!e.isEmpty(t)})},isEmpty:function(t){var e=!0;for(var r in t)if(t[r]){e=!1;break}return e}},filters:{formatDate:function(t){return function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var r={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var o in r)if(new RegExp("("+o+")").test(e)){var n=r[o]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:b(n))}return e}(new Date(t),"yyyy-MM-dd")}}},g={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"resumePreview"}},[r("section",{staticClass:"profile"},[r("h1",[t._v(t._s(t.resume.profile.name||"区家乐"))]),t._v(" "),r("h3",[t._v("应聘岗位："+t._s(t.resume.profile.job||"前端工程师"))]),t._v(" "),r("p",{staticClass:"slogan"},[t._v(t._s(t.resume.profile.introduction||"让优秀成为一种习惯"))]),t._v(" "),r("p"),t._v(" "),r("p",[r("small",[t._v(t._s(t.resume.profile.job||"前端工程师")+" | "+t._s(t.resume.profile.birth||"1998-04-07")+" | "+t._s(t.resume.profile.city||"广东江门"))])])]),t._v(" "),r("section",{staticClass:"studyItems"},[r("h2",[t._v("教育经历")]),t._v(" "),r("ul",t._l(t.filter(t.resume.studyHistory),function(e){return r("li",[t._v(t._s(e.school)+" | "+t._s(e.profession)+" | "+t._s(e.education)+" | 毕业时间"),r("span",{directives:[{name:"show",rawName:"v-show",value:e.graduation,expression:"studyItem.graduation"}]},[t._v(t._s(t._f("formatDate")(e.graduation)))])])}),0)]),t._v(" "),r("section",{staticClass:"workItems"},[r("h2",[t._v("工作经历")]),t._v(" "),r("ul",t._l(t.filter(t.resume.workHistory),function(e){return r("li",[r("p",[t._v(t._s(e.company))]),t._v(" "),r("p",[t._v(t._s(e.post))]),t._v(" "),r("p",[t._v(t._s(e.content))])])}),0)]),t._v(" "),r("section",{staticClass:"projectItems"},[r("h2",[t._v("项目经历")]),t._v(" "),r("ul",t._l(t.filter(t.resume.projectsHistory),function(e){return r("li",[r("h3",[t._v(t._s(e.projectName))]),t._v(" "),r("p",[t._v(t._s(e.responsibilities))]),t._v(" "),r("p",[r("span",{directives:[{name:"show",rawName:"v-show",value:e.beginTime,expression:"projectItem.beginTime"}]},[t._v(t._s(t._f("formatDate")(e.beginTime))+" - ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.endTime,expression:"projectItem.endTime"}]},[t._v(t._s(t._f("formatDate")(e.endTime)))])]),t._v(" "),r("p",[t._v(t._s(e.projectIntroduction))])])}),0)]),t._v(" "),r("section",{staticClass:"honorItems"},[r("h2",[t._v("获奖经历")]),t._v(" "),r("ul",t._l(t.filter(t.resume.honorsHistory),function(e){return r("li",[r("h3",[t._v(t._s(e.awards))]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.honorDate,expression:"honorItem.honorDate"}]},[t._v(t._s(t._f("formatDate")(e.honorDate)))])])}),0)]),t._v(" "),r("section",{staticClass:"contact"},[r("h2",[t._v("联系方式")]),t._v(" "),r("div",[r("ul",t._l(t.resume.contactInformation,function(e){return r("li",[r("p",[t._v("电话："+t._s(e.phone||"13631897256"))]),t._v(" "),r("p",[t._v("邮箱："+t._s(e.email||"m13631897256@163.com"))]),t._v(" "),r("p",[t._v("个人主页："+t._s(e.blog||"www.github.com/xyyojl"))])])}),0)])])])},staticRenderFns:[]};var w=r("VU/8")(y,g,!1,function(t){r("qkTZ")},null,null).exports,H=r("NYxO"),k=r("424j");o.default.use(H.a);var R={name:"App",store:new H.a.Store({state:{currentTab:0,previewMode:!1,icons:["shenfenzheng","work","book","xiangmu","jiangbei","phone"],resume:{profile:{name:"",city:"",birth:"",job:"",introduction:""},workHistory:[{company:"",content:"",post:""}],studyHistory:[{school:"",profession:"",education:["大专","本科","硕士","博士","其它"],graduation:""}],projectsHistory:[{projectName:"",responsibilities:"",beginTime:"",endTime:"",projectIntroduction:""}],honorsHistory:[{awards:"",honorDate:""}],contactInformation:[{phone:"",email:"",blog:""}]}},mutations:{switchTab:function(t,e){t.currentTab=e},changePreviewMode:function(t,e){t.previewMode=e},updateResume:function(t,e){var r=e.field,o=e.subfield,n=e.value,i=e.index;t.resume[r]instanceof Array?t.resume[r][i][o]=n:t.resume[r][o]=n}},plugins:[Object(k.a)()]}),components:{Topbar:i,ResumeEditor:_,ResumePreview:w},computed:{previewMode:{get:function(){return this.$store.state.previewMode},set:function(t){return this.$store.commit("changePreviewMode",t)}}},methods:{preview:function(){this.previewMode=!0},exitPreview:function(){this.previewMode=!1}}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{previewMode:this.previewMode},attrs:{id:"app"}},[e("header",[e("Topbar",{staticClass:"topbar",on:{preview:this.preview}})],1),this._v(" "),e("main",[e("ResumeEditor",{staticClass:"editor"}),this._v(" "),e("ResumePreview",{staticClass:"preview"})],1),this._v(" "),e("el-button",{staticClass:"exitPreview",attrs:{type:"primary"},on:{click:this.exitPreview}},[this._v("退出预览")])],1)},staticRenderFns:[]};var F=r("VU/8")(R,j,!1,function(t){r("vDsm")},"data-v-305387e8",null).exports,x=r("/ocq"),C={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._v(" "),r("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),r("br"),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var T=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},C,!1,function(t){r("1uuo")},"data-v-d8ec41bc",null).exports;o.default.use(x.a);var I=new x.a({routes:[{path:"/",name:"HelloWorld",component:T}]}),$=r("zL8q"),E=r.n($);r("tvR6");o.default.config.productionTip=!1,o.default.use(E.a),new o.default({el:"#app",router:I,components:{App:F},template:"<App/>"})},NcP2:function(t,e){},dgqW:function(t,e){},j13J:function(t,e){},nwL6:function(t,e){},qkTZ:function(t,e){},tvR6:function(t,e){},uMhA:function(t,e){},vDsm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f69af8066d95d0eb5ef8.js.map