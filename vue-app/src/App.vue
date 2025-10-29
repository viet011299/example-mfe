<template>
  <div id="app">
    <h1>Vue Remote App (Standalone)</h1>
    <VueWidget />
  </div>
</template>

<script>
import VueWidget from "./components/VueWidget.vue";

export default {
  name: "App",
  components: {
    VueWidget,
  },
};
</script>

<style>
#app {
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>