<script lang="ts" setup>
import AppButton from '@/common/components/AppButton.vue';
import { onMounted, ref, computed } from 'vue';

const isMounted = ref(false)

const onClick = () => console.log('clicked');

onMounted(() => setTimeout(() => isMounted.value = true, 100))

const modifiedClass = computed(() => isMounted.value && 'action-buttons--visible')
</script>

<template>
  <div class="action-buttons" :class="modifiedClass">
    <AppButton class="action-buttons__btn" icon="material-symbols-light:add" @click="onClick()" />
  </div>
</template>

<style lang="scss" scoped>
.action-buttons {
  $root: &;

  position: fixed;
  bottom: 2rem;
  right: 2rem;

  &__btn {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transform: scale(0);
    transition: transform .25s ease;
  }

  &--visible {
    #{$root}__btn {
      transform: scale(1);
    }
  }
}
</style>