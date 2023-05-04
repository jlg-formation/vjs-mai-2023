<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  version: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span>Version : {{ props.version }}</span>
</template>

<style scoped lang="scss"></style>
