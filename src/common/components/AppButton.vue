<script lang="ts" setup>
import { computed, type ButtonHTMLAttributes, type PropType } from 'vue';
import { Icon } from '@iconify/vue/dist/iconify.js';

const props = defineProps({
  type: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button'
  },
  icon: {
    type: String,
    default: null
  },
  iconPositionRight: {
    type: Boolean,
    default: false
  },
  transparent: {
    type: Boolean,
    default: false
  },
  themeLight: {
    type: Boolean,
    default: false
  }
})

const modifiedClass = computed(() => {
  let className = ''
  if (props.iconPositionRight)
    className += ' app-btn--icon-position-right'
  if (props.transparent)
    className += ' app-btn--transparent'
  if (props.themeLight)
    className += ' app-btn--theme-light'

  return className
})
</script>

<template>
  <button :type="type" class="app-btn" :class="modifiedClass">
    <Icon class="app-btn__icon" :icon="icon" v-if="icon" />
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &__icon {
    font-size: 1.5rem;
  }

  &--icon-position-right {
    flex-direction: row-reverse;
  }

  &--transparent {
    background-color: transparent;
  }

  &--theme-light {
    color: $light;
  }
}
</style>