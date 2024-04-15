<script lang="ts" setup>
import { useGoogleStore } from "@/stores/google";
import { useUserStore } from "@/stores/user";
import { watch } from "vue"
import { useRoute, useRouter } from "vue-router";
import { googleOneTap } from "vue3-google-login"

const route = useRoute()
const router = useRouter()
const googleStore = useGoogleStore()
const userStore = useUserStore()

const initializeGoogleOneTap = async () => {
  await googleStore.initialize()

  googleOneTap({
    clientId: googleStore.response.clientId
  })
    .then(async (response) => {
      await userStore.getUser(response.credential)
      router.replace({ name: 'logged-in' })
    })
    .catch((error) => {
      console.log("Handle the error", error)
    })
}

watch(() => route.fullPath,
  () => setTimeout(() => initializeGoogleOneTap(), 150),
  { immediate: true }
)
</script>

<template>
  <div class="user-view base-layout">
    <main class="user-view__content base-layout__content">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.user-view {
  display: flex;

  &__content {
    margin: auto;
    width: 100%;
    max-width: 600px;
  }
}
</style>