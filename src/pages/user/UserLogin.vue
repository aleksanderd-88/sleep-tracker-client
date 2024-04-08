<script lang="ts" setup>
import TheLoginForm from '@/modules/form/TheLoginForm.vue';
import type { Input } from '@/modules/form/types';
import { useFormStore } from '@/modules/form/stores';

const formStore = useFormStore()

const loginUser = (data: Input) => {
  formStore.loginUser(data);
}
</script>

<template>
  <TheLoginForm @on-submit="loginUser($event)" />
</template>