<template>
  <div id="app">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return { message: 'hello Vue' }
  }
}
</script>

<style>
  p{color:red;}
</style>
