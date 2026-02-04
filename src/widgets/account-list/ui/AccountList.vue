<template>
  <div>
    <v-row align="center" class="mb-2">
      <v-col>
        <span class="text-h5 font-weight-bold">Учетные записи</span>
      </v-col>
      <v-col cols="auto">
        <v-btn icon variant="outlined" size="small" density="compact" @click="store.addAccount">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-alert type="info" variant="tonal" density="compact" class="mb-3">
      Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
    </v-alert>

    <AccountRow v-for="account in store.accounts" :key="account.id" :account="account" />
  </div>
</template>

<script setup lang="ts">
import AccountRow from './AccountRow.vue'
import { useAccountStore } from '@/entities/account'

const store = useAccountStore()
</script>
