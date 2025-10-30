<script setup lang="ts">
import axios from "axios";
import { reactive, ref, onMounted } from "vue";
import loading from "../../components/common/loading.vue";
const isLoading = ref(false);
// definePageMeta({
//   middleware: "auth",
// });
// const me = await $fetch("/api/me").catch(() => null);

onMounted(async () => {
  // window.location.href = "/product";
  isLoading.value = true;

  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading">
    <loading></loading>
  </div>
</template>

<style scoped></style>
