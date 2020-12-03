<template>
  <div id="app">
    <Header></Header>
    <SyncMsg></SyncMsg>
  </div>
</template>

<script>
import Header from "./components/header"
import SyncMsg from "./components/syncMsg"

export default {
  name: 'App',
  components: {
    Header,
    SyncMsg
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
