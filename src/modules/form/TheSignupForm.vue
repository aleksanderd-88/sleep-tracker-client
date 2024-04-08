<script lang="ts" setup>
import AppButton from '@/common/components/AppButton.vue';
import { reactive } from 'vue';
import { type Input } from '@/modules/form/types'

const input = reactive({
  email: '',
  password: '',
  firstName: '',
  lastName: ''
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
      <input type="text" data-test="first-name-input" v-model="input.firstName" placeholder="Enter your first name" />
      <input type="text" data-test="last-name-input" v-model="input.lastName" placeholder="Enter your last name" />
      <input type="text" data-test="email-input" v-model="input.email" placeholder="Enter your e-mail" />
      <input type="password" data-test="password-input" v-model="input.password" placeholder="Choose a secure password" />
      <AppButton type="submit">Sign up</AppButton>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>