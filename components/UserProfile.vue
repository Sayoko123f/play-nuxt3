<template>
  <div class="">
    <h2>這裡是受保護的路由</h2>
    <div class="" v-if="userStore.user">
      <div class="text-amber-400">{{ userStore.user.email }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>
