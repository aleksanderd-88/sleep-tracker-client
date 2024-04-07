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
  }
</style>