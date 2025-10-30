<script setup lang="ts">
import axios from "axios";
import { reactive, ref, onMounted, computed } from "vue";
import Cards from "../../components/common/cards.vue";
import Pagination from "../../components/common/pagination.vue";

const users = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
}));

const currentPage = ref(1);
const itemsPerPage = 5;

const pagedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return users.slice(start, start + itemsPerPage);
});

onMounted(async () => {
  // const data = {};
  // const res = await axios.post("http://localhost:3000/api/getToken", data);
  //await $fetch("/api/getToken").catch(() => null);
  // alert(res.data.name);
});
</script>

<template>
  <div
    className="grid gap-2 place-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2"
  >
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
  </div>

  <Pagination
    :total-items="50"
    :items-per-page="itemsPerPage"
    v-model:current-page="currentPage"
  />
</template>

<style scoped></style>
