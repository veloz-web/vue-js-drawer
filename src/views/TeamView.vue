<template>
  <v-container fluid>
    <h1 class="text-h4">{{ $route.params.team?.replace(/-/g, ' ') }}</h1>
    <h2 class="text-subtitle-1">{{ $route.params.division }}</h2>
    <v-btn color="primary" class="mt-4">Vote</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.querySelector('main')?.focus();
});
</script>
