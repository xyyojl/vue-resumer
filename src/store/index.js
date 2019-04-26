import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了

export default new Vuex.Store({
    state: {
        currentTab: 0,
        previewMode:false,
        icons: ["shenfenzheng", "work", "book", "xiangmu", "jiangbei", "phone"],
        resume:{
            profile: {
                name: "",
                city: "",
                birth: "",
                job: "",
                introduction: ""
            },
            workHistory: [{ company: "", content: "", post: "" }],
            studyHistory: [
                {
                    school: '',
                    profession: '',
                    // education:'',
                    education: ['大专', '本科', '硕士', '博士', '其它'],
                    graduation: ''
                }
            ],
            projectsHistory: [
                {
                    projectName: '',
                    responsibilities: '',
                    // useTime: '',
                    beginTime: '',
                    endTime:'',
                    projectIntroduction: ''
                }
            ],
            honorsHistory: [
                {
                    awards: '',
                    honorDate: ''
                }
            ],
            contactInformation: [
                {
                    phone: '',
                    email: '',
                    blog: ''
                }
            ]
        }
    },
    mutations: {
        switchTab(state, payload){
            state.currentTab = payload; // 关于 payload 看这里 http://vuex.vuejs.org/zh-cn/mutations.html#提交载荷（payload）
        },
        changePreviewMode(state, payload){
            state.previewMode = payload;
        },
        updateResume(state, {field, subfield, value}){
            console.log('xxx')
            console.log(field) // 对象
            console.log(subfield) // name
            console.log(value) // 值
            state.resume[field][subfield] = value;
        }
        /* initState(state, payload){
            Object.assign(state, payload);
        } */
    },
    plugins: [createPersistedState()]
})