<template>
  <form class="form" @submit.prevent="submitLogin">
    <label class="label-input">
      <i class="far fa-envelope icon-modify"></i>
      <input v-model="email" type="email" placeholder="Email" required />
    </label>

    <label class="label-input">
      <i class="fas fa-lock icon-modify"></i>
      <input v-model="password" type="password" placeholder="Password" required />
    </label>

    <a class="password" href="#">forgot your password?</a>

    <button class="btn btn-second" type="submit">sign in</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function submitLogin() {
  console.log('Login ➜', {
    email: email.value,
    password: password.value
  })
}
</script>
