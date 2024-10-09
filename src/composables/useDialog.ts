import { ref } from "vue";

const visible = ref(false);
export const useDialog = () => {
  const toggleDialog = () => {
    visible.value = !visible.value;
  };
  return { visible, toggleDialog };
}
