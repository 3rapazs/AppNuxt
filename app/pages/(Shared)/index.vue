<script setup lang="ts">
import axios from "axios";
import { reactive, ref, onMounted } from "vue";
// definePageMeta({
//   middleware: "auth",
// });
// const me = await $fetch("/api/me").catch(() => null);

onMounted(async () => {
  window.location.href = "/home";
});
</script>

<template></template>

<style scoped></style>
