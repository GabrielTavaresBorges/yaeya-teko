<script setup lang="ts">
import { ref } from 'vue'
import AppBar from '@/components/AppBar/AppBar.vue'
import NavMenu from '@/components/NavMenu/NavMenu.vue';

const drawer = ref(true)
const isMini = ref(true)
</script>

<template>
  <v-app>
    <AppBar @toggle-drawer="isMini = !isMini" />

    <!-- Menu lateral com NavMenu como conteúdo -->
    <v-navigation-drawer
      style="background: #f5f5f5;"
    >
      <NavMenu />
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
