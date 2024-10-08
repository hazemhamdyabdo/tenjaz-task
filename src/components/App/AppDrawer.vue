<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import AppSvgIcon from "../App/AppSvgIcon.vue";
const router = useRouter();
const isDrawerOpen = ref(false);
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
</script>
<template>
  <nav
    class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="text-sm font-medium text-gray-500 dark:text-gray-400 flex"
            @click="toggleDrawer"
          >
            <img
              src="../../assets/imgs/engaz.jpg"
              class="h-8 me-3"
              alt="tenjaz Logo"
            />
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
              >Tenjaz</span
            >
          </button>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    :class="!isDrawerOpen ? 'w-64' : 'w-14'"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <router-link
            to="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <AppSvgIcon
              name="dashboard"
              class="w-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />

            <span class="ms-3" v-if="!isDrawerOpen">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <AppSvgIcon
              name="kanban"
              class="w-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />

            <template v-if="!isDrawerOpen">
              <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
              <span
                class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                >Pro</span
              >
            </template>
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <AppSvgIcon
              name="inbox"
              class="flex-shrink-0 w-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />

            <template v-if="!isDrawerOpen">
              <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                >3</span
              >
            </template>
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <AppSvgIcon
              name="users"
              class="flex-shrink-0 w-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />

            <template v-if="!isDrawerOpen">
              <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </template>
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <AppSvgIcon
              name="products"
              class="flex-shrink-0 w-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />

            <template v-if="!isDrawerOpen">
              <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </template>
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <AppSvgIcon
              name="signin"
              class="flex-shrink-0 w-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />

            <template v-if="!isDrawerOpen">
              <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </template>
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <AppSvgIcon
              name="signup"
              class="flex-shrink-0 w-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />

            <template v-if="!isDrawerOpen">
              <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </template>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
<style scoped></style>
