<template>
  <div
    class="shadow-lg rounded max-w-md text-center mx-auto flex flex-col gap-4 p-4"
  >
    <div class="text-xl font-bold">登入</div>
    <div class="">
      <label class="mr-3" for="username">帳號</label>
      <input id="username" class="form-input rounded" type="text" />
    </div>
    <div class="">
      <label class="mr-3" for="password">密碼</label>
      <input id="password" class="form-input rounded" type="password" />
    </div>
    <div class="flex justify-center gap-4">
      <NuxtLink
        to="register"
        class="font-bold rounded hover:bg-stone-300 px-6 py-2 bg-stone-200"
      >
        註冊
      </NuxtLink>
      <button
        class="font-bold rounded hover:bg-amber-400 px-6 py-2 bg-amber-500 text-white"
      >
        登入
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const data = reactive({});

function onLoginClick() {}
</script>
