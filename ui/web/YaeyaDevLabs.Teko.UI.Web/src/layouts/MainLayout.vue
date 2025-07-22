<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import AppBar from '@/components/AppBar/AppBar.vue'
import NavMenu from '@/components/NavMenu/NavMenu.vue'

const drawer = ref(true)
const isRail = ref(false)

const { smAndDown } = useDisplay()
const isMobile = computed(() => smAndDown.value)

const toggleDrawer = () => {
  if (isMobile.value) {
    drawer.value = !drawer.value // mobile → abre/fecha
  } else {
    isRail.value = !isRail.value // desktop → rail/full
  }
}
</script>

<template>
  <v-app>
    <AppBar @toggle-drawer="toggleDrawer" />

    <v-navigation-drawer
      v-model="drawer"
      :rail="!isMobile && isRail" 
      :temporary="isMobile"       
      app
      width="180"
      style="background: #f5f5f5;"
    >
      <NavMenu :is-mini="!isMobile && isRail" />
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
