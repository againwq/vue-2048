<template>
  <div id="app">
    <Nav></Nav>
    <Description></Description>
    <Main></Main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Main from './components/Main.vue';
import Description from './components/Description.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Main,
    Description
  },
  
}
</script>

<style scoped>
*,
body,
html {
  -moz-user-select: none;
  /*火狐*/
  /*选中文字时避免出现蓝色背景*/
  -webkit-user-select: none;
  /*webkit浏览器*/
  /*选中文字时避免出现蓝色背景*/
  -ms-user-select: none;
  /*IE10*/
  /*选中文字时避免出现蓝色背景*/
  user-select: none;
  /*选中文字时避免出现蓝色背景*/
}

#app {
  width: 450px;
  height: 650px;
  margin: 0px auto;
  background-color: #faf8ef;
  border: 1px;
  border-radius: 10px;
}
</style>

