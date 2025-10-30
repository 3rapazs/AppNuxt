<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUser } from "../../composables/useUser";
import userModel from "../../model/shared/user";
import swal from "../../utility/swal";
import swalModel from "../../model/shared/swalModel";
import config from "../../config/ConfigSys";
import IsLoading from "../../components/common/loading.vue";

const sidebarOpen = ref(false);
const dropdownOpen = ref(false);
const isLoading = ref(false);
const token = ref("");
const user = ref<userModel>(new userModel());
const { GetToken, GetUser, Logout } = useUser();

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

interface MenuLists {
  title: string;
  menuId: number;
  url: string;
  items: [{ name: string; menuId: string; url: string }];
}

const menuList = ref<MenuLists[]>([]);

let menuLists = [
  { title: "เมนู1", menuId: 1, url: "/1" },
  { title: "เมนู2", menuId: 2, url: "/2" },
  { title: "เมนู3", menuId: 3, url: "/3" },
  { title: "เมนู4", menuId: 4, url: "/4" },
  { title: "เมนู5", menuId: 5, url: "/5" },
];

const subMenuList = [
  { name: "เมนูย่อย1", menuId: 1, url: "/1" },
  { name: "เมนูย่อย2", menuId: 1, url: "/1" },
  { name: "เมนูย่อย3", menuId: 1, url: "/1" },
  { name: "เมนูย่อย1", menuId: 2, url: "/1" },
  { name: "เมนูย่อย2", menuId: 2, url: "/1" },
  { name: "เมนูย่อย3", menuId: 2, url: "/1" },
  { name: "เมนูย่อย4", menuId: 2, url: "/1" },
  { name: "เมนูย่อย5", menuId: 2, url: "/1" },
  { name: "เมนูย่อย6", menuId: 2, url: "/1" },
  { name: "เมนูย่อย1", menuId: 3, url: "/1" },
  { name: "เมนูย่อย2", menuId: 3, url: "/1" },
  { name: "เมนูย่อย1", menuId: 1, url: "/1" },
  { name: "เมนูย่อย1", menuId: 4, url: "/1" },
];

onMounted(async () => {
  isLoading.value = true;

  token.value = await GetToken();
  user.value = await GetUser();
  menuList.value = menuLists.map((u) => ({
    ...u,
    items: subMenuList.filter((o) => o.menuId === u.menuId),
  }));
  isLoading.value = false;
});

async function ClickLogOut() {
  const Swal: swal = new swal();
  const SwalModel: swalModel = new swalModel();

  SwalModel.text = "คุณต้องการออกจากระบบ ใช่หรือไม่ ?";

  const result = await Swal.MessageBoxConfirm(SwalModel);

  if (result) {
    const res = await Logout();
    if (res.result === true) {
      window.location.href = "/login";
    }
  }
}
</script>

<template>
  <div v-if="isLoading">
    <IsLoading></IsLoading>
  </div>
  <div>
    <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
      <div
        :class="sidebarOpen ? 'block' : 'hidden'"
        @click="sidebarOpen = false"
        class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
      ></div>

      <div
        :class="
          sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        "
        class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
      >
        <div class="flex items-center justify-center mt-8">
          <div class="flex items-center">
            <svg
              class="w-12 h-12"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                fill="#4C51BF"
                stroke="#4C51BF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                fill="white"
              ></path>
            </svg>

            <span class="mx-2 text-2xl font-semibold text-white">{{
              config.AppName
            }}</span>
          </div>
        </div>

        <nav class="mt-5">
          <ul class="menu w-full">
            <div v-if="user.roleId === '1'">
              <li>
                <a
                  class="flex items-center px-6 py-2 mt-1 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                  href="#"
                >
                  <i class="fa fa-cog" aria-hidden="true"></i>

                  <span class="mx-3">ผู้ดูแลระบบ</span>
                </a>
                <ul>
                  <a
                    class="flex items-center px-6 py-0 mt-0 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                    href="#"
                  >
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      ></path>
                    </svg>

                    <span class="mx-3">test</span>
                  </a>
                </ul>
              </li>
              <hr class="text-white mt-3" />
            </div>

            <li v-for="(menu, index) in menuList" :key="index">
              <a
                class="flex items-center px-6 py-2 mt-1 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                href="#"
              >
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>

                <span class="mx-3">{{ menu.title }}</span>
              </a>
              <ul>
                <li v-for="(subMenu, subIndex) in menu.items" :key="subIndex">
                  <a
                    class="flex items-center px-6 py-0 mt-0 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                    href="#"
                  >
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      ></path>
                    </svg>

                    <span class="mx-3">{{ subMenu.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex flex-col flex-1 overflow-hidden">
        <header
          class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600"
        >
          <div class="flex items-center">
            <button
              @click="sidebarOpen = true"
              class="text-gray-500 focus:outline-none lg:hidden"
            >
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H11"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>

            <div class="relative mx-4 lg:mx-0">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          <!-- {{ user.userId }} -->

          <div class="flex items-center">
            <div x-data="{ notificationOpen: false }" class="relative"></div>

            <div v-if="user.userId" class="dropdown dropdown-end">
              <div
                tabindex="0"
                role="button"
                class="btn btn-ghost btn-circle avatar"
              >
                <div class="w-10 rounded-full">
                  <!-- <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  /> -->
                  <i class="fa fa-user-circle text-4xl" aria-hidden="true"></i>
                </div>
              </div>
              <ul
                tabindex="-1"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <!-- <a class="justify-between"> -->
                  <a class="">
                    <!-- Profile -->
                    <i class="fa fa-user" aria-hidden="true"></i>[{{
                      user.userId
                    }}]
                    <!-- <span class="badge">New</span> -->
                  </a>
                </li>

                <!-- <li>
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  <a>Settings</a>
                </li> -->
                <li>
                  <button type="button" @click="ClickLogOut">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    <a>Logout</a>
                  </button>
                </li>
              </ul>
            </div>
            <div v-else>
              <div class="dropdown dropdown-end">
                <a href="/login">
                  <div
                    tabindex="0"
                    role="button"
                    class="btn btn-ghost btn-circle avatar"
                  >
                    <div class="w-10 rounded-full">
                      <!-- <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      /> -->
                      <i
                        class="fa fa-sign-in pt-1 text-3xl"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </a>
                <!-- <ul
                  tabindex="-1"
                  class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a class="justify-between">
                      ผู้ใช้ระบบ [{{ user.userId }}]
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li>
                    <button type="button" @click="ClickLogOut">
                      <a>Logout</a>
                    </button>
                  </li>
                </ul> -->
              </div>
            </div>
            <!-- <div x-data="{{ dropdownOpen: false }}" class="relative">
              <button
                @click="dropdownOpen = !dropdownOpen"
                class="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
              >
                <img
                  class="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                  alt="Your avatar"
                />
              </button>

              <div
                x-show="dropdownOpen"
                @click="dropdownOpen = false"
                class="fixed inset-0 z-10 w-full h-full"
                style="display: none"
              ></div>

              <div
                x-show="dropdownOpen"
                class="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl"
                style="display: none"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >Products</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >Logout</a
                >
              </div>
            </div> -->
          </div>
        </header>
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div class="container px-6 py-8 mx-auto mb-10">
            <slot></slot>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
