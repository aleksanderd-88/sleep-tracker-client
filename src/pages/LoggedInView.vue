<script lang="ts" setup>
import AppActionButtons from '@/modules/actions/AppActionButtons.vue';
import TheLinkBar from '@/modules/bar/TheLinkBar.vue';
import { useUserStore } from '@/stores/user';
import get from 'lodash/get'

const userStore = useUserStore()
</script>

<template>
  <div class="base-layout">
    <main class="base-layout__content">
      <TheLinkBar />

      <h1 class="base-layout__headline base-layout__headline--size-small">
        Welcome back,
        <span class="base-layout__sub-headline base-layout__sub-headline--size-small">
          {{ get(userStore, 'currentUser.name', 'John Doe') }}
        </span>
      </h1>
    </main>

    <AppActionButtons />
  </div>
</template>

<style lang="scss" scoped></style>