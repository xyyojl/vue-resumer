<template>
    <div id="topbar" v-on:preview="preview">
        <h1 class="title">Resumer</h1>
        <div>
            <!-- <el-button type="primary">注册</el-button>
            <el-button>登录</el-button> -->
            <el-button v-on:click="preview">预览</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'Topbar',
    methods:{
        preview(){
            this.$emit('preview',true);
        }
    }
}
</script>
<style lang="scss" scoped>
#topbar{
    color: #fff;
    min-height: 80px;
    display: flex;
    align-items: center;
    padding-left: 104px;
    padding-right: 104px;
    justify-content: space-between;
    > .title{
        
    }
}
</style>

