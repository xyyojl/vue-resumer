<template>
    <div id="resumePreview">
        {{count}}
        <button @click="add">xxxx</button>  
    </div>
</template>
<script>
export default {
    name:'ResumePreview',
    computed:{
        count(){
            return this.$store.state.count;
        }
    },
    methods:{
        add(){
            this.$store.commit('increment');
        }
    }
}
</script>
<style lang="scss" scoped>
#resumePreview{
    min-height: 100px;
}
</style>