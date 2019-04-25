import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了

export default new Vuex.Store({
    state: {
        count: 0,
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
                useTime: '',
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
    },
    mutations: {
        increment(state) {
            state.count++
        },
        switchTab(state, payload){
            state.currentTab = payload // 关于 payload 看这里 http://vuex.vuejs.org/zh-cn/mutations.html#提交载荷（payload）
        }
    }
})