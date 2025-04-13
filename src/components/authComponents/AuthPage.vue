<template>
  <div class="container" :class="authClass">
    <!-- Primeira tela -->
    <div class="content first-content">
      <div class="first-column">
        <h2 class="title title-primary">welcome back!</h2>
        <p class="description description-primary">To keep connected with us</p>
        <p class="description description-primary">please login with your personal info</p>
        <button class="btn btn-primary" @click="goToSignIn">sign in</button>
      </div>

      <div class="second-column">
        <h2 class="title title-second">create account</h2>
        <div class="social-media">
          <ul class="list-social-media">
            <li class="item-social-media" v-for="icon in icons" :key="icon">
              <i :class="icon"></i>
            </li>
          </ul>
        </div>
        <p class="description description-second">or use your email for registration:</p>
        <RegisterForm />
      </div>
    </div>

    <!-- Segunda tela -->
    <div class="content second-content">
      <div class="first-column">
        <h2 class="title title-primary">hello, friend!</h2>
        <p class="description description-primary">Enter your personal details</p>
        <p class="description description-primary">and start journey with us</p>
        <button class="btn btn-primary" @click="goToSignUp">sign up</button>
      </div>

      <div class="second-column">
        <h2 class="title title-second">sign in to developer</h2>
        <div class="social-media">
          <ul class="list-social-media">
            <li class="item-social-media" v-for="icon in icons" :key="icon + '-2'">
              <i :class="icon"></i>
            </li>
          </ul>
        </div>
        <p class="description description-second">or use your email account:</p>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'

const authClass = ref('') // '', 'sign-in-js', 'sign-up-js'

function goToSignIn() {
  authClass.value = 'sign-in-js'
}

function goToSignUp() {
  authClass.value = 'sign-up-js'
}

const icons = [
  'fab fa-facebook-f',
  'fab fa-google-plus-g',
  'fab fa-linkedin-in'
]
</script>

<style scoped src="./style.css"></style>    
<!-- Essa linha diz ao Vue para aplicar o CSS do style.css apenas nesse componente (scoped). -->
