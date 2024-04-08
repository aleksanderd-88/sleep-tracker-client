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
  <form class="form" data-test="login-form" @submit.prevent="onSubmit()">
    <h1>Sign up to continue</h1>
    <div class="form__row form__row--flex">
      <input type="text" class="form__text-field" data-test="first-name-input" v-model="input.firstName"
        placeholder="Enter your first name" />
      <input type="text" class="form__text-field" data-test="last-name-input" v-model="input.lastName"
        placeholder="Enter your last name" />
    </div>

    <input type="text" class="form__text-field" data-test="email-input" v-model="input.email"
      placeholder="Enter your e-mail" />
    <input type="password" class="form__text-field" data-test="password-input" v-model="input.password"
      placeholder="Choose a secure password" />

    <AppButton class="form__submit-btn" type="submit">Sign up</AppButton>

    <p>
      Already have an account?
      <router-link :to="{
        name: 'login'
      }"> Login here</router-link>
    </p>
  </form>
</template>

<style lang="scss" scoped></style>