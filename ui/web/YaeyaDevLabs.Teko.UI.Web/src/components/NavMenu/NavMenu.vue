<template>
  <v-list>
    <v-list-item>
  <v-list-item-content>
    <v-list-item-title class="text-h8 font-weight-medium">
      Teko Histórico Clínico
      <v-icon size="25" class="ml-2">mdi-timer-sand</v-icon>
    </v-list-item-title>
    <v-list-item-subtitle>Dev Labs</v-list-item-subtitle>
  </v-list-item-content>
</v-list-item>
    <v-divider />
    <v-list-item
      link
      title="Meus Dados"
      prepend-icon="mdi-account"/>
    <v-list-item 
      link title="Consultas"
      prepend-icon="mdi-calendar-check"/>
    <v-list-item
      link
      title="Exames"
      prepend-icon="mdi-flask"/>
    <v-list-item
      link
      title="Vacinas"
      prepend-icon="mdi-needle"/>
    <v-list-item
      link
      title="Tratamentos"
      prepend-icon="mdi-pill"/>
  </v-list>
</template>

<script setup lang="ts">
// Se quiser adicionar lógica depois, pode deixar vazio por enquanto
</script>
