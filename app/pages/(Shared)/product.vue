<script setup lang="ts">
import axios from "axios";
import { reactive, ref, onMounted, computed } from "vue";
import productModel from "../../model/master/productModel";
import Cards from "../../components/common/cards.vue";

const entity: productModel = new productModel();

const listProduct = ref<productModel[]>([]);

entity.ProductName = "testtt";
entity.Price = 5000;
onMounted(async () => {
  // const data = {};
  // const res = await axios.post("http://localhost:3000/api/getToken", data);
  //await $fetch("/api/getToken").catch(() => null);
  // alert(res.data.name);

  let product: productModel;
  for (let i = 0; i < 40; i++) {
    product = new productModel();
    product.ProductId = i + 1;
    product.ProductName = (i + 1).toString();
    product.Price = 5000;
    product.ImageUrl =
      "http://v1.igetweb.com/www/phracenter/catalog/p_1027684.jpg";
    listProduct.value.push(product);
  }
});
</script>
<!-- mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 -->
<!-- grid gap-2 place-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 -->
<template>
  <div
    className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div v-for="entity in listProduct" :key="entity.ProductName">
      <Cards :productModel="entity"></Cards>
    </div>
  </div>
</template>

<style scoped></style>
