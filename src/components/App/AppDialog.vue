<script setup lang="ts">
import { useDialog } from "../../composables/useDialog";
import { NewUser } from "../../types";

const { visible } = useDialog();
defineProps<{
  user: NewUser;
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
          :invalid="!user.firstName"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Last Name</label>
        <InputText
          id="email"
          class="flex-auto"
          :invalid="!user.lastName"
          v-model="user.lastName"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <InputText
          id="username"
          v-model="user.username"
          :invalid="!user.username"
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
          :invalid="!user.email"
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
      <!-- ! we can also add slot here to add custom content and be more dynamic but its only for demo -->
    </Dialog>
  </teleport>
</template>

<style scoped></style>
