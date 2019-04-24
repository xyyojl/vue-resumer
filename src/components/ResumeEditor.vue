<template>
    <div id="resumeEditor">
        <nav>
            <ol>
                <li v-for="(item,index) in [0,1,2,3,4,5]" 
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
            <li v-for="(item,index) in [0,1,2,3,4,5]" 
                :class="{active:currentTab === item}" 
                :key="index"
                >Tab{{item+1}}</li>
        </ol>
    </div>
</template>
<script>
export default {
    name:'ResumeEditor',
    data(){
        return {
            currentTab: 0,
            icons:['shenfenzheng', 'work', 'book', 'xiangmu', 'jiangbei', 'phone']
        }
    }
}
</script>
<style lang="scss" scoped>
#resumeEditor{
    min-height: 100px;
    display: flex;
    background-color: #fff;
    > nav{
        width: 80px;
        text-align: center;
        background: #192229;
        > ol li{
            padding-top: 16px;
            padding-bottom: 16px;
            > .icon{
                width: 32px;
                height: 32px;
                fill: white;
            }
            &.active{
                background: #fff;
                > .icon {
                    fill: #000;
                }
            }
        }
    }
    > .panes{
        > li {
            display: none;
            &.active{
                display: block;
            }
        }
    }
}
</style>