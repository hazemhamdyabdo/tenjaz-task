<script lang="ts" setup>
import { RouterView } from "vue-router";
import { useDrawer } from "./composables/useDrawer";

const { isDrawerOpen } = useDrawer();
import AppDrawer from "./components/App/AppDrawer.vue";
</script>

<template>
  <section>
    <AppDrawer />
    <Toast />
    <main
      class="main-container"
      :style="{ 'margin-left': !isDrawerOpen ? '255px' : '3rem' }"
    >
      <router-view />
    </main>
  </section>
</template>
<style>
.main-container {
  padding: 2rem;
  margin-top: 56px;
  min-height: calc(100vh - 56px);
  min-width: calc(100vw - 255px);
  overflow-y: auto;
  background-color: aliceblue;
  transition: all 0.3s ease;
}
</style>
