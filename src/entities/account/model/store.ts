import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Account } from './types'

export const useAccountStore = defineStore(
  'accounts',
  () => {
    const accounts = ref<Account[]>([])

    function addAccount() {
      accounts.value.push({
        id: crypto.randomUUID(),
        labels: [],
        type: 'LDAP',
        login: '',
        password: null,
      })
    }

    function updateAccount(id: string, data: Partial<Account>) {
      const index = accounts.value.findIndex((a) => a.id === id)
      if (index !== -1) {
        accounts.value[index] = { ...accounts.value[index], ...data }
      }
    }

    function removeAccount(id: string) {
      accounts.value = accounts.value.filter((a) => a.id !== id)
    }

    return { accounts, addAccount, updateAccount, removeAccount }
  },
  { persist: true },
)
