<script setup lang="ts">
defineProps<{ isMini: boolean }>()
</script>

<template>
  <div class="d-flex flex-column fill-height">
    <v-list nav dense class="flex-grow-1">
      <v-list-item>
        <v-list-item-content v-if="!isMini" class="justify-center text-center">
          <v-list-item-title class="text-h8 font-weight-medium">
            Home
            <v-icon size="25" class="ml-2">mdi-heart-pulse</v-icon>
          </v-list-item-title>
        </v-list-item-content>
        <v-tooltip v-else bottom>
          <template #activator="{ props }">
            <v-icon v-bind="props" size="20" color="red" class="mx-auto">
              mdi-heart-pulse
            </v-icon>
          </template>
          <span>Home</span>
        </v-tooltip>
      </v-list-item>

      <v-divider />

      <!-- Meus Dados -->
      <v-list-item link v-if="!isMini">
        <template #prepend>
          <v-icon>mdi-account</v-icon>
        </template>
        <v-list-item-title v-if="!isMini">Meus Dados</v-list-item-title>
      </v-list-item>
      <v-tooltip v-else bottom>
        <template #activator="{ props }">
          <v-list-item link v-bind="props" class="justify-center">
            <v-icon>mdi-account</v-icon>
          </v-list-item>
        </template>
        <span>Meus Dados</span>
      </v-tooltip>

      <!-- Consultas -->
      <v-list-item link v-if="!isMini">
        <template #prepend>
          <v-icon>mdi-calendar-check</v-icon>
        </template>
        <v-list-item-title v-if="!isMini">Consultas</v-list-item-title>
      </v-list-item>
      <v-tooltip v-else bottom>
        <template #activator="{ props }">
          <v-list-item link v-bind="props" class="justify-center">
            <v-icon>mdi-calendar-check</v-icon>
          </v-list-item>
        </template>
        <span>Consultas</span>
      </v-tooltip>

      <!-- Exames -->
      <v-list-item link v-if="!isMini">
        <template #prepend>
          <v-icon>mdi-flask</v-icon>
        </template>
        <v-list-item-title v-if="!isMini">Exames</v-list-item-title>
      </v-list-item>
      <v-tooltip v-else bottom>
        <template #activator="{ props }">
          <v-list-item link v-bind="props" class="justify-center">
            <v-icon>mdi-flask</v-icon>
          </v-list-item>
        </template>
        <span>Exames</span>
      </v-tooltip>

      <!-- Vacinas -->
      <v-list-item link v-if="!isMini">
        <template #prepend>
          <v-icon>mdi-needle</v-icon>
        </template>
        <v-list-item-title v-if="!isMini">Vacinas</v-list-item-title>
      </v-list-item>
      <v-tooltip v-else bottom>
        <template #activator="{ props }">
          <v-list-item link v-bind="props" class="justify-center">
            <v-icon>mdi-needle</v-icon>
          </v-list-item>
        </template>
        <span>Vacinas</span>
      </v-tooltip>

      <!-- Tratamentos -->
      <v-list-item link v-if="!isMini">
        <template #prepend>
          <v-icon>mdi-pill</v-icon>
        </template>
        <v-list-item-title v-if="!isMini">Tratamentos</v-list-item-title>
      </v-list-item>
      <v-tooltip v-else bottom>
        <template #activator="{ props }">
          <v-list-item link v-bind="props" class="justify-center">
            <v-icon>mdi-pill</v-icon>
          </v-list-item>
        </template>
        <span>Tratamentos</span>
      </v-tooltip>
    </v-list>

    <!-- Rodapé fixo -->
    <div class="text-caption text-center px-4 pb-2" style="opacity: 0.6;">
      <template v-if="!isMini">
        <div>2025 — YΛΞYΛ</div>
        <div>Developer Labs, LLC</div>
      </template>
      <template v-else>
        <v-icon size="30" color="grey">mdi-timer-sand</v-icon>
      </template>
    </div>
  </div>
</template>
