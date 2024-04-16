<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import get from 'lodash/get'
import { computed } from 'vue';

const userStore = useUserStore()

const userInitials = computed(() => `${ userStore.currentUser?.given_name[0].toUpperCase() }${ userStore.currentUser?.family_name[0].toUpperCase() }`)
</script>

<template>
  <div class="user-details">
    <h1 class="user-details__initials">{{ userInitials }}</h1>
    
    <section>
      <h2 class="user-details__name">{{ get(userStore, 'currentUser.name', 'John Doe') }}</h2>
      <h3 class="user-details__email">{{ get(userStore, 'currentUser.email', 'john.doe@example.com') }}</h3>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.user-details {
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &__initials {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid $light;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-size: clamp(1rem, 2vw, 1.75rem);
  }

  &__email {
    font-size: clamp(.7rem, 2vw, .9rem);
  }
}
</style>