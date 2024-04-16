<script lang="ts" setup>
import { useGoogleStore } from '@/stores/google';
import { computed } from 'vue';
import {  GoogleLogin } from 'vue3-google-login';
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const router = useRouter()

const callback = async (response: { code: string }) => {
  await userStore.googleOauth2Login(response.code)
  router.replace({ name: 'logged-in' })
}

const clientId = computed(() => useGoogleStore().response.clientId as string)
</script>

<template>
  <GoogleLogin v-if="clientId" :client-id="clientId" :callback="callback">
    <button type="button">Login Using Google</button>
  </GoogleLogin>
</template>