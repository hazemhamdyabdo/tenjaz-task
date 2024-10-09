<script lang="ts" setup>
import { RouterView } from "vue-router";
import AppDrawer from "./components/App/AppDrawer.vue";
</script>

<template>
  <section class="">
    <AppDrawer />
    <!-- max-w-7xl  -->
    <main class="main-container">
      <router-view />
    </main>
  </section>
</template>
<style>
.main-container {
  padding: 2rem;
  margin-top: 56px;
  margin-left: 255px;
  min-height: calc(100vh - 56px);
  min-width: calc(100vw - 255px);
  overflow-y: auto;
  transition-property: padding;
  background-color: aliceblue;
}
</style>
