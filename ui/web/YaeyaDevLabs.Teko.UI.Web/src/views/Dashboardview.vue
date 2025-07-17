<script setup lang="ts">
import GreetingCard from '@/components/Dashboard/GreetingCard.vue'
import NextConsultationCard from '@/components/Dashboard/NextConsultationCard.vue'
import VaccinesCard from '@/components/Dashboard/VaccinesCard.vue'
import ExamsCard from '@/components/Dashboard/ExamsCard.vue'
import MonitoringCard from '@/components/Dashboard/MonitoringCard.vue'
</script>

<template>
  <v-container fluid>
    <GreetingCard />
    <v-row>
      <v-col cols="12" md="6">
        <NextConsultationCard />
      </v-col>
      <v-col cols="12" md="6">
        <VaccinesCard />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <ExamsCard />
      </v-col>
      <v-col cols="12" md="6">
        <MonitoringCard />
      </v-col>
    </v-row>
  </v-container>
</template>
