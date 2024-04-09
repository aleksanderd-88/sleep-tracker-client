<script lang="ts" setup>
import { watch } from "vue"
import { useRoute } from "vue-router";
import { googleOneTap } from "vue3-google-login"

const route = useRoute()

const initializeGoogleOneTap = () => {
  googleOneTap()
    .then((response) => {
      console.log("Handle the response", response)
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