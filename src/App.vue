<template>
  <div id="app">
    <!-- 케밥 표기법으로 해야 -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  components: {
    ToolBar
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
