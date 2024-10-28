<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="!isExpanded"
    :width="expandedWidth"
    :rail-width="railWidth"
    permanent
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @keydown.esc="handleEscape"
  >
    <div class="d-flex navigation-container" @blur="handleMouseLeave">
      <v-list @focus="handleMouseEnter" class="divisions-list">
        <v-list-item
          v-for="division in divisions"
          :key="division.name"
          :active="selectedDivision === division.name"
          @click="selectedDivision = division.name"
          class="division-item"
        >
          <template v-slot:prepend>
            <v-icon :icon="division.icon" class="mr-2" />
          </template>
          <v-list-item-title v-show="isExpanded">{{
            division.name
          }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider :vertical="isLandscape" :horizontal="!isLandscape"></v-divider>

      <v-list v-if="isExpanded" class="teams-list">
        <v-list-item
          v-for="team in activeTeams"
          :key="team.name"
          :to="{
            name: 'team',
            params: {
              division: selectedDivision,
              team: team.name.toLowerCase().replace(/ /g, '-'),
            },
          }"
          :active="
            $route.params.team === team.name.toLowerCase().replace(/ /g, '-')
          "
          @click="handleTeamClick"
        >
          <template v-slot:prepend>
            <v-icon>{{ team.icon }}</v-icon>
          </template>

          <v-list-item-title>{{ team.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { conferences } from '../data/nfl';

const divisions = conferences[0].concat(conferences[1]);
const route = useRoute();

const drawer = ref(true);
const isExpanded = ref(false);
const expandedWidth = computed(() => (isLandscape.value ? 500 : 256));
const railWidth = ref(56);
const selectedDivision = ref(divisions[0].name);
const isLandscape = ref(window.innerWidth > window.innerHeight);

const activeTeams = computed(() => {
  return divisions.find((d) => d.name === selectedDivision.value)?.teams || [];
});

const handleMouseEnter = () => {
  isExpanded.value = true;
};

const handleMouseLeave = () => {
  isExpanded.value = false;
  console.log('left the nav');
  syncWithRoute();
};

const handleEscape = () => {
  isExpanded.value = false;
  syncWithRoute();
};

const handleTeamClick = () => {
  isExpanded.value = false;
};

// Global keyboard event handler
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    handleEscape();
  }
};

const syncWithRoute = () => {
  if (route.params.division) {
    selectedDivision.value = route.params.division as string;
  }
};

// Watch for route changes to sync selection
watch(
  () => route.params.division,
  (newDivision) => {
    if (newDivision) {
      selectedDivision.value = newDivision as string;
    }
  }
);

// Handle responsive layout
const updateOrientation = () => {
  isLandscape.value = window.innerWidth > window.innerHeight;
};

onMounted(() => {
  window.addEventListener('resize', updateOrientation);
  window.addEventListener('keydown', handleKeyDown);
  updateOrientation();
  syncWithRoute();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateOrientation);
  window.removeEventListener('keydown', handleKeyDown);
});

watch(isLandscape, (newValue) => {
  if (newValue && isExpanded.value) {
    expandedWidth.value = 500;
  } else {
    expandedWidth.value = 256;
  }
});
</script>

<style scoped>
.navigation-container {
  flex-direction: column;
}

@media (orientation: landscape) {
  .navigation-container {
    flex-direction: row;
  }

  .divisions-list {
    min-width: 200px;
  }

  .teams-list {
    min-width: 200px;
  }
}

.v-navigation-drawer {
  transition: width 0.2s ease-out;
}

.v-list-item {
  cursor: pointer;
}

/* Ensure focus styles are visible */
.v-list-item:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: -2px;
}
</style>
