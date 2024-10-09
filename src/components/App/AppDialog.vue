<script setup lang="ts">
import { useDialog } from "../../composables/useDialog";

import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

const { visible } = useDialog();
defineProps<{
  user: {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}>();
const emit = defineEmits(["close:dialog", "update:user"]);
</script>
<template>
  <teleport to="body">
    <Dialog
      :visible="visible"
      modal
      header="Edit Profile"
      @close="emit('close:dialog')"
      @update:visible="emit('close:dialog')"
      :style="{ width: '25rem' }"
    >
      <span class="text-surface-500 dark:text-surface-400 block mb-8"
        >Update your information.</span
      >
      <div class="flex items-center gap-4 mb-4">
        <label for="firstName" class="font-semibold w-24">First Name</label>
        <InputText
          id="firstName"
          v-model="user.firstName"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Last Name</label>
        <InputText
          id="email"
          class="flex-auto"
          v-model="user.lastName"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <InputText
          id="username"
          v-model="user.username"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <InputText
          id="email"
          class="flex-auto"
          v-model="user.email"
          autocomplete="off"
        />
      </div>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="emit('close:dialog')"
        ></Button>
        <Button
          type="button"
          label="Save"
          @click="
            emit('update:user', {
              id: user.id,
              username: user.username,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
            })
          "
        ></Button>
      </div>
    </Dialog>
  </teleport>
</template>

<style scoped></style>
