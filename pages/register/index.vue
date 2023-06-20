<template>
  <div
    class="shadow-lg rounded max-w-md text-center mx-auto flex flex-col gap-4 p-4"
  >
    <div class="text-xl font-bold">註冊</div>
    <div class="">
      <label class="mr-3" for="email">信箱</label>
      <input
        v-model="data.email"
        id="email"
        class="form-input rounded"
        type="text"
      />
    </div>
    <div class="">
      <label class="mr-3" for="password">密碼</label>
      <input
        v-model="data.password"
        id="password"
        class="form-input rounded"
        type="password"
      />
    </div>
    <div class="">
      <label class="mr-3" for="username">暱稱</label>
      <input
        v-model="data.username"
        id="username"
        class="form-input rounded"
        type="text"
      />
    </div>
    <div class="flex justify-center gap-4">
      <button
        class="font-bold rounded hover:bg-amber-400 px-6 py-2 bg-amber-500 text-white"
        @click="onSubmitClick"
      >
        註冊
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const data = reactive({
  email: "",
  password: "",
  username: "",
});

async function onSubmitClick() {
  if (!data.password || !data.username || !data.email) {
    return;
  }
  const res = $fetch("/api/users", {
    method: "POST",
    body: {
      email: data.email,
      password: data.password,
      username: data.username,
    },
  });
  console.log(await res);
}
</script>
