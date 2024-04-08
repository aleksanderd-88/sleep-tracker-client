<script lang="ts" setup>
import TheSignupForm from '@/modules/form/TheSignupForm.vue';
</script>

<template>
  <TheSignupForm />
  <p>
    Already have an account?
    <router-link :to="{
      name: 'login'
    }"> Login here</router-link>
  </p>
</template>