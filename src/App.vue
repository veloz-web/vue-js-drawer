<script setup lang="ts">
import { ref, computed } from 'vue'

interface Team {
  name: string
  icon: string
}

interface Division {
  name: string
  icon: string
  teams: Team[]
}

const drawer = ref(true)
const expandedWidth = ref(256)
const railWidth = ref(56)
const selectedDivision = ref<string | null>(null)

const divisions: Division[] = [
  {
    name: 'AFC North',
    icon: 'mdi-shield-crown',
    teams: [
      { name: 'Baltimore Ravens', icon: 'mdi-bird' },
      { name: 'Cincinnati Bengals', icon: 'mdi-cat' },
      { name: 'Cleveland Browns', icon: 'mdi-dog-side' },
      { name: 'Pittsburgh Steelers', icon: 'mdi-shield' }
    ]
  },
  {
    name: 'AFC South',
    icon: 'mdi-shield-star',
    teams: [
      { name: 'Houston Texans', icon: 'mdi-star' },
      { name: 'Indianapolis Colts', icon: 'mdi-horse' },
      { name: 'Jacksonville Jaguars', icon: 'mdi-cat' },
      { name: 'Tennessee Titans', icon: 'mdi-sword' }
    ]
  },
  {
    name: 'AFC East',
    icon: 'mdi-shield-sun',
    teams: [
      { name: 'Buffalo Bills', icon: 'mdi-buffalo' },
      { name: 'Miami Dolphins', icon: 'mdi-dolphin' },
      { name: 'New England Patriots', icon: 'mdi-flag' },
      { name: 'New York Jets', icon: 'mdi-airplane' }
    ]
  },
  {
    name: 'AFC West',
    icon: 'mdi-shield-moon',
    teams: [
      { name: 'Denver Broncos', icon: 'mdi-horse-variant' },
      { name: 'Kansas City Chiefs', icon: 'mdi-axe' },
      { name: 'Las Vegas Raiders', icon: 'mdi-sword-cross' },
      { name: 'Los Angeles Chargers', icon: 'mdi-lightning-bolt' }
    ]
  }
]

const isExpanded = ref(false)
const activeTeams = computed(() => {
  if (!selectedDivision.value && divisions.length > 0) {
    return divisions[0].teams
  }
  return divisions.find(d => d.name === selectedDivision.value)?.teams || []
})

const handleDivisionClick = (divisionName: string) => {
  selectedDivision.value = divisionName
}

const handleMouseEnter = () => {
  isExpanded.value = true
}

const handleMouseLeave = () => {
  isExpanded.value = false
}

const handleTeamClick = (team: Team) => {
  console.log(`Selected team: ${team.name}`)
}
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :rail="!isExpanded"
      :width="expandedWidth"
      :rail-width="railWidth"
      permanent
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <v-list>
        <v-list-item
          v-for="division in divisions"
          :key="division.name"
          :value="division.name"
          :active="selectedDivision === division.name"
          @click="handleDivisionClick(division.name)"
        >
          <template v-slot:prepend>
            <v-icon>{{ division.icon }}</v-icon>
          </template>
          
          <v-list-item-title>{{ division.name }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list v-if="isExpanded">
        <v-list-item
          v-for="team in activeTeams"
          :key="team.name"
          :value="team.name"
          @click="handleTeamClick(team)"
        >
          <template v-slot:prepend>
            <v-icon>{{ team.icon }}</v-icon>
          </template>
          
          <v-list-item-title>{{ team.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <h1>NFL Teams Explorer</h1>
        <p v-if="selectedDivision">
          Currently viewing teams in {{ selectedDivision }}
        </p>
        <p v-else>
          Select a division to view its teams
        </p>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-navigation-drawer {
  transition: width 0.2s ease-out;
}

.v-list-item {
  cursor: pointer;
}

.v-list-item:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
}
</style>