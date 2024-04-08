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
  <form class="form" data-test="login-form" @submit.prevent="onSubmit()">
    <h1>Log in to continue</h1>
    <input class="form__text-field" type="text" data-test="email-input" v-model="input.email" placeholder="Your email" />
    <input class="form__text-field" type="password" data-test="password-input" v-model="input.password" placeholder="Your password" />

    <AppButton class="form__submit-btn" type="submit">Log in</AppButton>

    <p>
      Don't have an account yet?
      <router-link :to="{
        name: 'signup'
      }"> Sign up here</router-link>
    </p>
  </form>
</template>

<style lang="scss" scoped></style>