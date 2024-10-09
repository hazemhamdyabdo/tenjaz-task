<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import type { User } from "../types";

import { useUsersStore } from "../stores/useres/index";
import { useDialog } from "../composables/useDialog";
import AppDialog from "../components/App/AppDialog.vue";
import UserTable from "../components/Useres/UserTable.vue";

const usersStore = useUsersStore();
const { toggleDialog } = useDialog();

const { allUsers, loading } = storeToRefs(usersStore);
const { getUsers, deleteUser, updateUser } = usersStore;

const selectedUser = ref();
const roles = ["admin", "moderator"];

const editUser = (user: User) => {
  toggleDialog();
  selectedUser.value = user;
};

onMounted(async () => {
  await getUsers();
});
</script>

<template>
  <div class="card">
    <h4 class="font-semibold text-xl mb-4">Users</h4>
    <UserTable
      :users="allUsers"
      :loading="loading"
      :roles="roles"
      @editUser="editUser"
      @deleteUser="deleteUser"
    />
  </div>
  <AppDialog
    :user="selectedUser"
    @update:user="updateUser"
    @close:dialog="toggleDialog"
  />
</template>
