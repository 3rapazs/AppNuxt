<script setup lang="ts">
import Drawers from "../components/layouts/Drawers.vue";
import Footer from "../components/layouts/Footer.vue";
</script>

<template>
  <html>
    <head> </head>
    <Drawers><slot></slot> </Drawers>
    <Footer></Footer>
  </html>
</template>

<style scoped></style>
