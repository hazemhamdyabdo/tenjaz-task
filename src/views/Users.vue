<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUsersStore } from "../stores/useres/index";
import { useDialog } from "../composables/useDialog";
import AppDialog from "../components/App/AppDialog.vue";

import { FilterMatchMode } from "@primevue/core/api";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import Tag from "primevue/tag";
import Button from "primevue/button";

const usersStore = useUsersStore();
const { toggleDialog } = useDialog();

const { allUsers, loading } = storeToRefs(usersStore);
const { getUsers, deleteUser, updateUser } = usersStore;

const selectedUser = ref();
const roles = ["admin", "moderator"];

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  role: { value: null, matchMode: FilterMatchMode.EQUALS },
});

const getSeverity = (status: string) => {
  const statusMap: { [key: string]: string } = {
    admin: "success",
    moderator: "info",
  };

  return statusMap[status];
};

const editUser = (user: any) => {
  toggleDialog();
  selectedUser.value = user;
};

onMounted(async () => {
  await getUsers();
});
</script>

<template>
  <div class="card">
    <div class="font-semibold text-xl mb-4">Filtering</div>
    <DataTable
      :value="allUsers"
      :paginator="true"
      :rows="10"
      dataKey="id"
      :rowHover="true"
      v-model:filters="filters"
      filterDisplay="menu"
      :loading="loading"
      :globalFilterFields="['role', 'email', 'username']"
      showGridlines
    >
      <template #header>
        <div class="flex justify-end">
          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
            />
          </IconField>
        </div>
      </template>
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>

      <Column field="username" header="Username" />
      <Column field="email" header="Email" />

      <Column field="role" header="Role" style="min-width: 12rem">
        <template #body="{ data }">
          <Tag :value="data.role" :severity="getSeverity(data.role)" />
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <Select
            v-model="filterModel.value"
            @change="filterCallback()"
            :options="roles"
            placeholder="Select One"
            style="min-width: 12rem"
            :showClear="true"
          >
            <template #option="slotProps">
              <Tag
                :value="slotProps.option"
                :severity="getSeverity(slotProps.option)"
              />
            </template>
          </Select>
        </template>
      </Column>
      <Column class="w-40">
        <template #body="{ data }" class="flex justify-end">
          <Button
            icon="pi pi-trash"
            @click="deleteUser(data)"
            severity="secondary"
            rounded
          ></Button>
          <Button
            @click="editUser(data)"
            icon="pi pi-pencil"
            class="ml-2"
            rounded
            severity="secondary"
          ></Button>
        </template>
      </Column>
    </DataTable>
  </div>
  <AppDialog
    :user="selectedUser"
    @update:user="updateUser"
    @close:dialog="toggleDialog"
  />
</template>
