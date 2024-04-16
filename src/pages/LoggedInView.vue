<script lang="ts" setup>
import AppActionButtons from '@/modules/actions/AppActionButtons.vue';
import TheLinkBar from '@/modules/bar/TheLinkBar.vue';
import AppUserDetails from '@/common/components/AppUserDetails.vue'

</script>

<template>
  <div class="logged-in base-layout">
    
    <main class="base-layout__content">
      <header class="logged-in__header">
        <AppUserDetails />
        <TheLinkBar />
      </header>

      <RouterView />
    </main>

    <AppActionButtons />
  </div>
</template>

<style lang="scss" scoped>
  .logged-in {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
</style>