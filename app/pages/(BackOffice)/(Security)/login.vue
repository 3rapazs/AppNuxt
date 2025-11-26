<script setup lang="ts">
import { reactive, onMounted, ref } from "vue";
import Swal from "~/utility/Swal";
import SwalModel from "~/model/shared/swalModel";
const { Login } = useUser();

definePageMeta({
  layout: "empty",
});

const model = reactive({
  username: "",
  password: "",
  isRemember: false,
});

const inputRef = ref<HTMLInputElement | null>(null);

async function ClickLogIn() {
  const data = { username: model.username, password: model.password };
  const res = await Login(data);
  const swal: Swal = new Swal();
  const swalModel: SwalModel = new SwalModel();
  swalModel.title = res.message;
  swalModel.position = "center";
  if (res.result) {
    swalModel.icon = "success";
    if (model.isRemember) {
      localStorage.setItem("userLogin", model.username);
      localStorage.setItem("isRememberUser", model.isRemember ? "1" : "0");
    } else {
      localStorage.removeItem("userLogin");
      localStorage.removeItem("isRememberUser");
    }
    window.location.href = "/";
  } else {
    swalModel.icon = "error";
    model.password = "";
  }
  swal.MessageBoxShow(swalModel);
}

onMounted(() => {
  model.isRemember =
    (localStorage.getItem("isRememberUser") ?? "0") === "1" ? true : false;

  if (model.isRemember) {
    model.username = localStorage.getItem("userLogin") ?? "";

    if (model.username) {
      inputRef.value?.focus();
    }
  }
});
</script>

<template>
  <div>
    <!-- component -->
    <div class="bg-sky-100 flex justify-center items-center h-screen">
      <!-- Left: Image -->
      <div class="w-1/2 h-screen hidden lg:block">
        <img
          src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
          alt="Placeholder Image"
          class="object-cover w-full h-full"
        />
      </div>
      <!-- Right: Login Form -->
      <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        <form action="#" method="POST">
          <!-- Username Input -->
          <div class="mb-4 bg-sky-100">
            <label for="username" class="block text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
              v-model="model.username"
            />
          </div>
          <!-- Password Input -->
          <div class="mb-4">
            <label for="password" class="block text-gray-800">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
              v-model="model.password"
              ref="inputRef"
              @keydown.enter="ClickLogIn"
            />
          </div>
          <!-- Remember Me Checkbox -->
          <div class="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              class="text-red-500"
              v-model="model.isRemember"
            />
            <label for="remember" class="text-green-900 ml-2"
              >Remember Me</label
            >
          </div>
          <!-- Forgot Password Link -->
          <div class="mb-6 text-blue-500">
            <!-- <a href="#" class="hover:underline">Forgot Password?</a> -->
          </div>
          <!-- Login Button -->
          <button
            type="button"
            class="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            @click="ClickLogIn"
          >
            Login
          </button>
        </form>
        <!-- Sign up  Link -->
        <div class="mt-6 text-green-500 text-center">
          <!-- <a href="#" class="hover:underline">Sign up Here</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
