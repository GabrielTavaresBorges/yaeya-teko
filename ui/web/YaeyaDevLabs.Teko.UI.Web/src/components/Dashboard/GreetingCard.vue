<script setup lang="ts">
import img1 from '@/assets/Dashboard/Cards/images/img1.jpg';
</script>

<template>
  <v-card elevation="2" class="pa-4 mb-4 d-flex align-center" color="white">
    <v-img
      :src="img1"
      max-width="250"
      height="100"
      class="mr-4"
      eager
      contain
    />
    <div>
      <v-card-title class="text-h6 font-weight-medium">Bom dia, Gabriel!</v-card-title>
      <v-card-text>Como está a saúde da sua filha Maria hoje?</v-card-text>
    </div>
  </v-card>
</template>
