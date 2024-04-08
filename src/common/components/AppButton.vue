<script lang="ts" setup>
import type { ButtonHTMLAttributes, PropType } from 'vue';

  defineProps({
    type: {
      type: String as PropType<ButtonHTMLAttributes['type']>,
      default: 'button'
    }
  })
</script>

<template>
  <button :type="type" class="app-btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .app-btn {
    cursor: pointer;
    outline: none;
    border: none;
    font-size: clamp(1rem, 2vw, 1.25rem);
    font-weight: 500;
  }
</style>