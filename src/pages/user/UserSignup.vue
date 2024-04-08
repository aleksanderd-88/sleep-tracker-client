<script lang="ts" setup>
import TheSignupForm from '@/modules/form/TheSignupForm.vue';
import type { Input } from '@/modules/form/types';
import { useFormStore } from '@/modules/form/stores';

const formStore = useFormStore()

const signupUser = (data: Input) => {
  formStore.signupUser(data);
}
</script>

<template>
  <TheSignupForm @on-submit="signupUser($event)" />
</template>