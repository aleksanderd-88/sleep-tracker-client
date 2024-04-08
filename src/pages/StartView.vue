<script setup lang="ts">
import AppButton from '@/common/components/AppButton.vue';
</script>

<template>
  <div class="start-view base-layout">
    <main class="start-view__content base-layout__content">
      <h1 class="start-view__heading">Daily Sleep <span>Tracker</span></h1>
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
    color: $dark;
    margin: 4rem 0 0;
  }
}
</style>