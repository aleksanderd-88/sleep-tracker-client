<script lang="ts" setup></script>

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