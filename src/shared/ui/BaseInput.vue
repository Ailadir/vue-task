<template>
  <v-text-field
    :model-value="modelValue"
    :label="label"
    :type="inputType"
    :error="error"
    :error-messages="errorMessages"
    :max-length="maxLength"
    density="compact"
    variant="outlined"
    v-bind="$attrs"
    @update:model-value="$emit('update:modelValue', $event)"
    @blur="$emit('blur', $event)"
  >
    <template v-if="isPassword" #append-inner>
      <IconButton :icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" @click="showPassword = !showPassword" />
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import IconButton from './IconButton.vue'

const props = defineProps<{
  modelValue: string
  label: string
  isPassword?: boolean
  error?: boolean
  errorMessages?: string[]
  maxLength?: number
}>()

defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
}>()

defineOptions({ inheritAttrs: false })

const showPassword = ref(false)

const inputType = computed(() => {
  if (!props.isPassword) return 'text'
  return showPassword.value ? 'text' : 'password'
})
</script>
