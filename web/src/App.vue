<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
</script>

<template>
  <navbar style="z-index: 100;" />
  <RouterView style="z-index: 1;"/>
</template>

<style scoped></style>
