<template>
  <v-row align="center">
    <v-col cols="3">
      <BaseInput v-model="rawLabel" label="Метки" :max-length="50" @blur="handleBlur" />
    </v-col>

    <v-col cols="2">
      <BaseSelect :model-value="localType" :items="ACCOUNT_TYPES" label="Тип записи"
        @update:model-value="handleTypeChange" />
    </v-col>

    <v-col cols="3">
      <BaseInput v-model="localLogin" label="Логин" :error="touched.login && !!validationErrors.login"
        :error-messages="touched.login && validationErrors.login ? [validationErrors.login] : []" :max-length="100"
        @blur="handleLoginBlur" />
    </v-col>

    <v-col cols="3">
      <BaseInput v-if="localType === 'Локальная'" v-model="localPassword" label="Пароль" :is-password="true"
        :error="touched.password && !!validationErrors.password"
        :error-messages="touched.password && validationErrors.password ? [validationErrors.password] : []"
        :max-length="100" @blur="handlePasswordBlur" />
    </v-col>

    <v-col cols="1" class="d-flex align-center">
      <IconButton icon="mdi-delete" @click="handleDelete" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { BaseInput, BaseSelect, IconButton } from '@/shared/ui'
import { ACCOUNT_TYPES, useAccountStore, validateAccount, parseLabels, labelsToString } from '@/entities/account'
import type { Account, AccountType } from '@/entities/account'

const props = defineProps<{ account: Account }>()

const store = useAccountStore()

const rawLabel = ref(labelsToString(props.account.labels))
const localLogin = ref(props.account.login)
const localPassword = ref(props.account.password ?? '')
const localType = ref<AccountType>(props.account.type)

const touched = reactive({ login: false, password: false })

const validationErrors = computed(() =>
  validateAccount(localLogin.value, localType.value === 'Локальная' ? localPassword.value : null, localType.value),
)

function tryPersist() {
  if (Object.keys(validationErrors.value).length === 0) {
    store.updateAccount(props.account.id, {
      labels: parseLabels(rawLabel.value),
      type: localType.value,
      login: localLogin.value,
      password: localType.value === 'Локальная' ? localPassword.value : null,
    })
  }
}

function handleBlur() {
  tryPersist()
}

function handleLoginBlur() {
  touched.login = true
  tryPersist()
}

function handlePasswordBlur() {
  touched.password = true
  tryPersist()
}

function handleTypeChange(type: string) {
  localType.value = type as AccountType
  if (type === 'LDAP') {
    localPassword.value = ''
    touched.password = false
  }
  tryPersist()
}

function handleDelete() {
  store.removeAccount(props.account.id)
}

</script>
