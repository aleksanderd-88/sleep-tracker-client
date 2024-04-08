<script lang="ts" setup>
import AppButton from '@/common/components/AppButton.vue';
import { reactive } from 'vue';
import { type Input } from '@/modules/form/types';

const input = reactive({
  email: '',
  password: ''
})

const emit = defineEmits<{
  (e: 'on-submit', input: Input): void
}>()

const onSubmit = () => {
  if (Object.values(input).some(field => !field))
    return

  emit('on-submit', input)
}
</script>

<template>
  <div>
    <form data-test="login-form" @submit.prevent="onSubmit()">
      <input type="text" data-test="email-input" v-model="input.email" placeholder="Your email" />
      <input type="password" data-test="password-input" v-model="input.password" placeholder="Your password" />
      <AppButton type="submit">Log in</AppButton>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>