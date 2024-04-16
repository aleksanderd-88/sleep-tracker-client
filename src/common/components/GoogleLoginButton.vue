<script lang="ts" setup>
import { useGoogleStore } from '@/stores/google';
import { computed } from 'vue';
import {  GoogleLogin } from 'vue3-google-login';
import { useRouter } from 'vue-router';
import AppButton from './AppButton.vue';

const googleStore = useGoogleStore()
const router = useRouter()

const callback = async (response: { code: string }) => {
  await googleStore.googleOauth2Login(response.code)
  router.replace({ name: 'logged-in' })
}

const clientId = computed(() => useGoogleStore().response.clientId as string)
</script>

<template>
  <GoogleLogin class="google-login-btn" v-if="clientId" :client-id="clientId" :callback="callback">
    <AppButton icon="flat-color-icons:google" transparent theme-light>
      Login using google
    </AppButton>
  </GoogleLogin>
</template>

<style lang="scss" scoped>
  .google-login-btn {
    display: flex;
    align-items: center;
  }
</style>