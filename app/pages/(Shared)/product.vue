<script setup lang="ts">
import axios from "axios";
import { reactive, ref, onMounted, computed } from "vue";
import productModel from "../../model/master/productModel";
import Cards from "../../components/common/cards.vue";

const entity: productModel = new productModel();
entity.ProductName = "testtt";
entity.Price = 5000;
onMounted(async () => {
  // const data = {};
  // const res = await axios.post("http://localhost:3000/api/getToken", data);
  //await $fetch("/api/getToken").catch(() => null);
  // alert(res.data.name);
});
</script>
<!-- mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 -->
<!-- grid gap-2 place-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 -->
<template>
  <div
    className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"
  >
    <Cards :productModel="entity"></Cards>
    <Cards :productModel="entity"></Cards>
    <Cards :productModel="entity"></Cards>
    <Cards :productModel="entity"></Cards>
    <Cards :productModel="entity"></Cards>
    <Cards :productModel="entity"></Cards>
    <Cards :productModel="entity"></Cards>
    <Cards :productModel="entity"></Cards>
    <Cards :productModel="entity"></Cards>
    <Cards :productModel="entity"></Cards>
    <Cards :productModel="entity"></Cards>
    <Cards :productModel="entity"></Cards>
  </div>
</template>

<style scoped></style>
