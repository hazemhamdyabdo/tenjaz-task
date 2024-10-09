import { ref } from 'vue';
import { defineStore } from 'pinia'
import { useDialog } from "../../composables/useDialog";
import axios from "../../plugins/axios";
import { useToast } from "primevue/usetoast";


export const useUsersStore = defineStore('users', () => {

  const { toggleDialog } = useDialog()
  const toast = useToast();

  const allUsers = ref([])
  const loading = ref(false);


  const getUsers = async () => {
    loading.value = true
    try {
      const { data: { users } } = await axios.get('/users')
      allUsers.value = users
    } catch (error) {
      console.log(error)
      toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to fetch users', life: 3000 });
    } finally {
      loading.value = false
    }
  }

  const updateUser = async (user: any) => {
    loading.value = true
    try {
      await axios.put(`/users/${user.id}`, user)
      toast.add({ severity: 'success', summary: 'Success', detail: 'User updated', life: 3000 });
    } catch (error) {
      console.log(error)
      toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to update user', life: 3000 });
    } finally {
      loading.value = false
      await getUsers()
      toggleDialog()
    }
  }

  const deleteUser = async ({ id }: { id: number }) => {
    loading.value = true
    try {
      await axios.delete(`/users/${id}`)
      toast.add({ severity: 'success', summary: 'Success', detail: 'User deleted', life: 3000 });
    } catch (error) {
      console.log(error)
      toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete user', life: 3000 });
    } finally {
      loading.value = false
      await getUsers()
    }
  }

  return { allUsers, getUsers, loading, updateUser, deleteUser }

})
