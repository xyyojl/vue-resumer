<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <header>
      <Topbar class="topbar" v-on:preview="preview"/>
    </header>
    <main>
      <ResumeEditor class="editor"/>
      <ResumePreview class="preview"/>
    </main>
    <el-button class="exitPreview" type="primary" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import "normalize.css/normalize.css";
import "./assets/reset.scss";

import Topbar from "./components/Topbar";
import ResumeEditor from "./components/ResumeEditor";
import ResumePreview from "./components/ResumePreview";
import store from "./store/index";

export default {
  name: "App",
  store,
  components: {
    Topbar,
    ResumeEditor,
    ResumePreview
  },
  computed: {
    previewMode:{
      get(){
        return this.$store.state.previewMode;
      },
      set(value){
        return this.$store.commit('changePreviewMode', value)
      }
    }
  },
  methods: {
    preview() {
      this.previewMode = true;
    },
    exitPreview() {
      this.previewMode = false;
    }
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100vh;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.topbar {
  background-color: #407fe3;
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
}
main {
  display: flex;
  flex: 1;
  background-color: #ddd;
  > .editor {
    width: 40em;
    margin: 16px 8px 16px 16px;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 4px;
    overflow: auto;
  }
  > .preview {
    flex: 1;
    background-color: #fff;
    margin: 16px 16px 16px 8px;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 4px;
    overflow: auto;
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.previewMode #resumeEditor,
.previewMode #topbar{
  display: none;
}
.previewMode #resumePreview{
  max-width: 800px;
  margin: 32px auto;
}
.exitPreview{
  display: none;
}
.previewMode .exitPreview{
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: block;
}
</style>

