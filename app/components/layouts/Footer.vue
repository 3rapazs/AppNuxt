<template>
  <footer
    class="fixed bottom-0 left-0 w-full bg-white border-t shadow-md sm:hidden"
  >
    <div class="flex justify-around items-center py-2">
      <NuxtLink to="/">
        <button
          class="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8h5a2 2 0 012 2v7a2 2 0 01-2 2h-5m-4 0H5a2 2 0 01-2-2v-7a2 2 0 012-2h5"
            />
          </svg>
          <span class="text-xs">Home</span>
        </button>
      </NuxtLink>
      <button
        class="flex flex-col items-center text-gray-600 hover:text-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span class="text-xs">Add</span>
      </button>

      <button
        class="flex flex-col items-center text-gray-600 hover:text-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 15c2.489 0 4.79.61 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span class="text-xs">Profile</span>
      </button>
    </div>
  </footer>
  <!-- ------------------ -->
  <footer
    class="fixed bottom-0 left-0 w-full hidden lg:block sm:block bg-gray-800 text-gray-200 py-2 mt-10"
  >
    <div class="container mx-auto px-4 text-center">
      <p class="text-sm">{{ config.Footer }}</p>
      <div class="flex space-x-4">
        <!-- <a href="#" class="hover:text-white">About</a>
        <a href="#" class="hover:text-white">Contact</a>
        <a href="#" class="hover:text-white">Privacy</a> -->
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import config from "../../config/ConfigSys";
</script>
