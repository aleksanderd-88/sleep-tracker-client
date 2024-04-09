<script lang="ts" setup></script>

<template>
  <nav class="app-bar">
    <main class="app-bar__content">
      <router-link to="/" class="app-bar__home-navigation-btn" title="Go back to home">
        Daily Sleep
        <span>Tracker</span>
      </router-link>
    </main>
  </nav>
</template>

<style lang="scss" scoped>
.app-bar {
  width: 100%;
  background-color: $dark;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  box-shadow: 0 8px 5px -4px rgba(#000, .2);

  &__content {
    height: 60px;
    display: flex;
    padding: 0 1rem;
  }

  &__home-navigation-btn {
    color: $light;
    line-height: 1.4;
    align-self: center;
    text-decoration: none;
    padding: 5px;
    font-size: .8rem;

    span {
      &:first-child {
        display: block;
        letter-spacing: .25em;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
}
</style>