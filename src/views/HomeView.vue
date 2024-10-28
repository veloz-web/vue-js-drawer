<template>
  <v-container fluid class="pa-0">
    <router-view></router-view>
    <v-container v-if="!$route.params.team" fluid>
      <h1>NFL Teams Explorer</h1>
      <p>Select a team to view details</p>
    </v-container>
  </v-container>
</template>