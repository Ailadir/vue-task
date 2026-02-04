<template>
  <v-select
    :model-value="modelValue"
    :items="items"
    :label="label"
    density="compact"
    variant="outlined"
    v-bind="$attrs"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  items: string[]
  label: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()

defineOptions({ inheritAttrs: false })
</script>
