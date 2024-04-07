<script setup lang="ts">
import AppButton from '@/common/components/AppButton.vue';
</script>

<template>
  <div class="start-view base-layout">
    <main class="start-view__content base-layouts__content">
      <h1 class="start-view__heading">Daily Sleep <span>Tracker</span></h1>
      <AppButton class="start-view__action-btn">Track your sleep today!</AppButton>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .start-view {
    display: flex;

    &__content {
      margin: auto;
    }

    &__heading {
      text-align: center;
      font-weight: 700;
      font-size: clamp(3rem, 8vw, 7rem);

      span {
        display: block;
      }
    }

    &__action-btn {
      width: 100%;
      height: 60px;
      border-radius: 15px;
      background-color: $light;
      font-size: 1.25rem;
      font-weight: 500;
      color: $dark;
      margin: 4rem 0 0;
    }
  }
</style>