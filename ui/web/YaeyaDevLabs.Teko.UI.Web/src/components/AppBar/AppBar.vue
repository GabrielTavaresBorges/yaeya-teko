<script setup lang="ts">
// Aqui você pode adicionar lógica futura, como abrir modais ou menus
</script>

<style scoped>
/* Estilos extras, se quiser personalizar o espaçamento ou comportamento */
</style>

<template>
  <v-app-bar flat color="#2C1C30" :elevation="2">
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')" />

    <!-- Título -->
    <v-toolbar-title class="text-white">YΛΞYΛ</v-toolbar-title>
    <v-spacer />

    <!-- Ícone de Pesquisa -->
    <v-btn icon>
      <v-icon class="text-white">mdi-magnify</v-icon>
    </v-btn>

    <!-- Ícone de notificação -->
    <v-btn icon>
      <v-icon class="text-white">mdi-bell</v-icon>
    </v-btn>

    <!-- Ícone de configurações -->
    <v-btn icon>
      <v-icon class="text-white">mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>
</template>