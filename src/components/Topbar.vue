<template>
    <div id="topbar">
        <h1 class="title">Resumer</h1>
        <div>
            <el-button type="primary">注册</el-button>
            <el-button>登录</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'Topbar'
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

