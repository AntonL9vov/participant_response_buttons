<template>
  <component :is="layout">
    <!-- <template #header>
      <Header />
    </template>

    <template #navigation>
      <Navigation />
    </template> -->

    <template #default>
      <router-view />
    </template>

    <!-- <template #footer>
      <Footer />
    </template> -->
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { DefaultLayout } from "@/shared/ui/layouts/default-layout";

const route = useRoute();

const layout = computed(() => route.meta?.layout || DefaultLayout);
</script>
