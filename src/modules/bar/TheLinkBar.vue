<script lang="ts" setup>
import { ref } from 'vue';

  const links = ref<{
    name: string
    label: string
  }[]>([
    { name: 'logged-in', label: 'Start' },
    { name: 'my-sleep', label: 'My sleep' },
  ])
</script>

<template>
  <ul class="link-bar">
    <li class="link-bar__item" v-for="link in links" :key="link.label">
      <router-link class="link-bar__link" :to="{ name: link.name }">{{ link.label }}</router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.link-bar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
  gap: 1.5rem;

  &__link {
    background: lighten($dark, 15%);
    padding: 8px 30px;
    border-radius: 20px;
    color: $light;
    text-decoration: none;
    flex: 1;

    &.router-link-exact-active {
      outline: 1px solid $light;
    }
  }

  @media(min-width: 1024px) {

    &__link {
      transition: background-color .25s ease;

      &:hover {
        background-color: lighten($dark, 10%);
      }
    }
  }
}
</style>