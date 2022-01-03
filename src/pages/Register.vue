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
        v-model="v$.form.firstName.$model"
        :inputErrorClass="v$.form.firstName.$error"
      />
      <!-- Last name -->
      <BaseInput 
        inputType="text"
        inputId="lastname"
        labelContent="Last Name"
        formControl="login-input"
        v-model="v$.form.lastName.$model"
        :inputErrorClass="v$.form.lastName.$error"
      />
      <!-- email -->
      <BaseInput 
        inputType="email"
        inputId="email"
        labelContent="Email"
        formControl="login-input"
        v-model="v$.form.email.$model"
        :inputErrorClass="v$.form.email.$error"
      />
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
      <!-- Confirm Password -->
      <BaseInput 
        inputType="password"
        inputId="password-confirm"
        labelContent="Confirm Password"
        formControl="login-input"
        v-model="v$.form.passwordConfirm.$model"
        :inputErrorClass="v$.form.passwordConfirm.$error"
      />
      <!-- Login btn -->
      <BaseBtn
        buttonClass="standard-button"
        btnContent="Register"
        @btnClicked="handleRegister"
      />
      <!-- Reg status messages -->
      <div class="submit-status"
        :class="{ 'submit-success' : submitStatus === 'success', 'submit-error' : submitStatus === 'error' }"
      >
        <p v-if="submitStatus === 'success'">{{ submitMsg }}</p>
        <p v-if="submitStatus === 'error'">{{ submitMsg }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '../components/forms/BaseInput.vue'
import BaseBtn from '../components/buttons/BaseBtn.vue'
import { registerUser } from '../services/api'
import useVuelidate from '@vuelidate/core'
import { required, sameAs } from '@vuelidate/validators'
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
      title: 'Enter your registration details',
      form: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        passwordConfirm: '' 
      },
      submitStatus: '',
      submitMsg: ''
    }
  },
  mounted () {
    console.log(this.v$)
  },
  updated () {
    console.log(this.v$)
  },
  methods: {
    async handleRegister () {
      // Check form is valid
      this.v$.$touch()
      if (!this.v$.$invalid) {
        try {
          const res = await registerUser(this.form)
          if (res && res.data) {
            console.log(res)
            this.submitStatus = 'success'
            this.submitMsg = 'You have been registered and will now be redirected to the login page'
            setTimeout(() => {
              this.$router.push('/')
            }, 3000)
          } else {
            console.log(res)
            this.submitStatus = 'error'
            this.submitMsg = 'There was an error registering you, please try again later'
          }
        } catch (err) {
          this.submitStatus = 'error'
          this.submitMsg = 'There was an error registering you, please try again later'
        }
      } else {
        this.submitStatus = 'error'
        this.submitMsg = 'Please ensure all fields are complete and passwords match'
      }
    }
  },
  validations () {
    return {
      form: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        email: {
          required
        },
        username: {
          required
        },
        password: {
          required
        },
        passwordConfirm: {
          sameAsPassword: sameAs(this.form.password)
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