<template>
  <v-layout :class="[styles.layout, 'rounded', 'rounded-md']" ref="app">
    <slot name="header" />

    <slot name="navigation" />

    <v-main class="d-flex align-center justify-center" fill-height>
      <slot />
    </v-main>

    <slot name="footer" />
  </v-layout>
</template>

<script setup lang="ts">
import styles from "./styles.module.css";
</script>
