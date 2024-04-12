<script lang="ts" setup></script>

<template>
  <ul class="link-bar">
    <li class="link-bar__item">
      <router-link class="link-bar__link" :to="{ name: 'logged-in' }">Start</router-link>
    </li>
    <li class="link-bar__item">
      <router-link class="link-bar__link" to="/">My sleep</router-link>
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