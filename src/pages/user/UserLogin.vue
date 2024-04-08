<script lang="ts" setup>
import TheLoginForm from '@/modules/form/TheLoginForm.vue';
</script>

<template>
  <TheLoginForm />
  <p>
    Don't have an account yet?
    <router-link :to="{
      name: 'signup'
    }"> Sign up here</router-link>
  </p>
</template>