<script setup lang="ts">
import AppButton from '@/common/components/AppButton.vue';
</script>

<template>
  <div class="start-view base-layout">
    <main class="start-view__content base-layout__content">
      <h1 class="base-layout__headline start-view__headline">
        Daily Sleep
        <span class="base-layout__sub-headline">Tracker</span>
      </h1>

      <AppButton class="start-view__action-btn" @click="$router.push({ name: 'login' })">Track your sleep today!
      </AppButton>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.start-view {
  display: flex;

  &__content {
    margin: auto;
    width: 100%;
    max-width: 600px;
  }

  &__headline {
    text-align: center;
  }

  &__action-btn {
    width: 100%;
    height: 60px;
    border-radius: 15px;
    background-color: $light;
    color: $dark;
    margin: 4rem 0 0;
  }
}
</style>