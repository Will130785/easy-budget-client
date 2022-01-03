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
        v-model="v$.form.username.$model"
        :inputErrorClass="v$.form.username.$error"
      />
      <!-- Password -->
      <BaseInput 
        inputType="password"
        inputId="password"
        labelContent="Password"
        formControl="login-input"
        v-model="v$.form.password.$model"
        :inputErrorClass="v$.form.password.$error"
      />
      <!-- Login btn -->
      <BaseBtn
        buttonClass="standard-button"
        btnContent="Login"
        @btnClicked="handleLogin"
      />
      <!-- Login status messages -->
      <div class="submit-status"
        :class="{ 'submit-success' : submitStatus === 'success', 'submit-error' : submitStatus === 'error' }"
      >
        <p v-if="submitStatus === 'success'">{{ submitMsg }}</p>
        <p v-if="submitStatus === 'error'">{{ submitMsg }}</p>
      </div>
      <!-- Register link -->
      <div class="reg-link">
        <router-link to="/register">Or click here to register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '../components/forms/BaseInput.vue'
import BaseBtn from '../components/buttons/BaseBtn.vue'
import { mapActions } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  setup () {
    return { v$: useVuelidate() }
  },
  components: {
    BaseInput,
    BaseBtn
  },
  data () {
    return {
      title: 'Enter your login details',
      form: {
        username: '',
        password: ''
      },
      submitStatus: '',
      submitMsg: ''
    }
  },
  methods: {
    ...mapActions(['loginAction']),
    async handleLogin () {
      // Check all fields are complete
      this.v$.$touch()
      if (!this.v$.$invalid) {
        try {
          const res = await this.loginAction(this.form)
          if (res) {
            console.log('***', res)
            this.submitStatus = 'success'
            this.submitMsg = 'You have been logged in and will now be redirected to your dashboard'
            setTimeout(() => {
              this.$router.push('/dashboard')
            }, 3000)
          } else {
            this.submitStatus = 'error'
            this.submitMsg = 'There was an error logging you in, please try again later'
          }
        } catch (err) {
          console.log(err)
          this.submitStatus = 'error'
          this.submitMsg = 'There was an error logging you in, please try again later'
        }
      } else {
        this.submitStatus = 'error'
        this.submitMsg = 'Please ensure all fields are complete'
      }
    }
  },
  validations () {
    return {
      form: {
        username: {
          required
        },
        password: {
          required
        }
      }
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
.reg-link {
  margin-top: 3rem;
}
.reg-link a {
  color: #0076b6;
}
.submit-success, .submit-error {
  margin-top: 3rem;
  padding: 1rem;
  color: white;
}
.submit-success {
  background-color: rgb(134, 240, 101);
}
.submit-error {
  background-color: rgb(240, 77, 77);
}
</style>