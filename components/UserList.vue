<template>
  <div class="">
    <h2>使用者列表</h2>
    <div class="" v-if="users">
      <div class="p-4" v-for="user in users">
        <div class="">{{ user }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  data: users,
  pending,
  error: fetchError,
  refresh,
} = await useAsyncData("users.get", () => $fetch("/api/users"));
</script>
