<template>
  <v-btn icon density="compact" variant="text" size="small" color="grey" @click="$emit('click', $event)">
    <v-icon size="20">{{ icon }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>
