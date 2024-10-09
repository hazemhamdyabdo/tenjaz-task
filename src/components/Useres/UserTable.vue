<script lang="ts" setup>
import { ref } from "vue";

import { useUsers } from "../../composables/useUsers";
import { FilterMatchMode } from "@primevue/core/api";
import Select from "primevue/select";

import type { User } from "../../types";

defineProps({
  users: Array as () => User[],
  loading: Boolean,
  roles: Array as () => string[],
});

const emit = defineEmits(["deleteUser", "editUser"]);

const { getSeverity } = useUsers();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  role: { value: null, matchMode: FilterMatchMode.EQUALS },
});
</script>

<template>
  <DataTable
    :value="users"
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

    <template #empty> No users found. </template>
    <template #loading> Loading users data. Please wait. </template>

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
          @click="$emit('deleteUser', data)"
          severity="secondary"
          rounded
        ></Button>
        <Button
          @click="$emit('editUser', data)"
          icon="pi pi-pencil"
          class="ml-2"
          rounded
          severity="secondary"
        ></Button>
      </template>
    </Column>
  </DataTable>
</template>
