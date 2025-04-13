<template>
  <form class="form" @submit.prevent="submitRegister">
    <label class="label-input">
      <i class="far fa-user icon-modify"></i>
      <input v-model="name" type="text" placeholder="Name" required />
    </label>

    <label class="label-input">
      <i class="far fa-envelope icon-modify"></i>
      <input v-model="email" type="email" placeholder="Email" required />
    </label>

    <label class="label-input">
      <i class="fas fa-lock icon-modify"></i>
      <input v-model="password" type="password" placeholder="Password" required />
    </label>

    <button class="btn btn-second" type="submit">sign up</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

function submitRegister() {
  console.log('Register ➜', {
    name: name.value,
    email: email.value,
    password: password.value
  })
}
</script>
