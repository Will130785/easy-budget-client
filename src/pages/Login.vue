<template>
  <div class="login">
    <div class="login-card">
      <p>{{ title }}</p>
      <!-- Username -->
      <BaseInput 
        inputType="text"
        inputId="username"
        labelContent="Username"
        formControl="login-input"
      />
      <!-- Password -->
      <BaseInput 
        inputType="password"
        inputId="password"
        labelContent="Password"
        formControl="login-input"
      />
      <!-- Login btn -->
      <BaseBtn
        buttonClass="standard-button"
        btnContent="Login"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from '../components/forms/BaseInput.vue'
import BaseBtn from '../components/buttons/BaseBtn.vue'
export default {
  components: {
    BaseInput,
    BaseBtn
  },
  data () {
    return {
      title: 'Enter your login details'
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