import { ref } from "vue";

const isDrawerOpen = ref(false);
export const useDrawer = () => {
  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
  };
  return { isDrawerOpen, toggleDrawer };
}
