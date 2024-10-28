<template>
  <v-app>
    <NFLNavigation />
    <v-main tabindex="-1">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NFLNavigation from './components/NFLNavigation.vue';
</script>

<style scoped>
main:focus {
  outline: none;
}
</style>
