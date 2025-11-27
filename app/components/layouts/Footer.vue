<template>
  <footer
    class="fixed bottom-0 left-0 w-full bg-white border-t shadow-md sm:hidden"
  >
    <div class="flex justify-around items-center py-2">
      <NuxtLink to="/product">
        <button
          class="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
          <span class="text-xs">Menu</span>
        </button>
      </NuxtLink>
      <NuxtLink to="/">
        <button
          class="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <i class="fa fa-home" aria-hidden="true"></i>
          <span class="text-xs">Home</span>
        </button>
      </NuxtLink>
      <button
        class="flex flex-col items-center text-gray-600 hover:text-blue-500"
        @click="GoBack"
      >
        <i class="fa fa-caret-left" aria-hidden="true"></i>
        <span class="text-xs">Back</span>
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
const router = useRouter();
function GoBack() {
  router.back();
}
</script>
