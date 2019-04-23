<template>
  <div id="app">
    <Topbar/>
    <ResumeEditor/>
    <ResumePreview/>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'

import Topbar from './components/Topbar';
import ResumeEditor from './components/ResumeEditor';
import ResumePreview from './components/ResumePreview';

export default {
  name: 'App',
  data (){
    return { message: 'hello Vue' }
  },
  components:{
    Topbar, ResumeEditor, ResumePreview
  }
}
</script>

<style>
  p{color:red;}
</style>
