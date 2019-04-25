<template>
    <div id="resumePreview">
        {{resume}}
    </div>
</template>
<script>
export default {
    name:'ResumePreview',
    computed:{
        resume(){
            return this.$store.state.resume;
        },
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
#resumePreview{
    min-height: 100px;
}
</style>