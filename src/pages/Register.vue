<template>
  <div class="login">
    <div class="login-card">
      <p>{{ title }}</p>
      <!-- First name -->
      <BaseInput 
        inputType="text"
        inputId="firstname"
        labelContent="First Name"
        formControl="login-input"
        v-model="form.firstName"
      />
      <!-- Last name -->
      <BaseInput 
        inputType="text"
        inputId="lastname"
        labelContent="Last Name"
        formControl="login-input"
        v-model="form.lastName"
      />
      <!-- email -->
      <BaseInput 
        inputType="email"
        inputId="email"
        labelContent="Email"
        formControl="login-input"
        v-model="form.email"
      />
      <!-- Username -->
      <BaseInput 
        inputType="text"
        inputId="username"
        labelContent="Username"
        formControl="login-input"
        v-model="form.username"
      />
      <!-- Password -->
      <BaseInput 
        inputType="password"
        inputId="password"
        labelContent="Password"
        formControl="login-input"
        v-model="form.password"
      />
      <!-- Confirm Password -->
      <BaseInput 
        inputType="password"
        inputId="password-confirm"
        labelContent="Confirm Password"
        formControl="login-input"
        v-model="form.passwordConfirm"
      />
      <!-- Login btn -->
      <BaseBtn
        buttonClass="standard-button"
        btnContent="Register"
        @btnClicked="handleRegister"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from '../components/forms/BaseInput.vue'
import BaseBtn from '../components/buttons/BaseBtn.vue'
import { registerUser } from '../services/api'
export default {
  components: {
    BaseInput,
    BaseBtn
  },
  data () {
    return {
      title: 'Enter your registration details',
      form: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        passwordConfirm: '' 
      }
    }
  },
  methods: {
    async handleRegister () {
      const res = await registerUser(this.form)
      console.log(res)
    },
    handleInput (input, data) {
      console.log(this.form[input])
      this.form[input] = data
    }
  }
}
</script>

<style scoped>
.login {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-card {
  width: 40%;
  padding: 2rem;
  box-shadow: 5px 5px 15px 5px #000000;
}
</style>