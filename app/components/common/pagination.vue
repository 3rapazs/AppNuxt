<template>
  <div class="flex justify-center items-center gap-2 mt-4">
    <button
      class="px-3 py-1 border rounded"
      :disabled="currentPage === 1"
      @click="prevPage"
    >
      Prev
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      class="px-3 py-1 border rounded"
      :class="page === currentPage ? 'bg-blue-500 text-white' : ''"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <button
      class="px-3 py-1 border rounded"
      :disabled="currentPage === totalPages"
      @click="nextPage"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, default: 10 },
  currentPage: { type: Number, default: 1 },
});

const emit = defineEmits(["update:currentPage"]);

const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage)
);

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    emit("update:currentPage", page);
  }
}

function nextPage() {
  goToPage(props.currentPage + 1);
}

function prevPage() {
  goToPage(props.currentPage - 1);
}
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
