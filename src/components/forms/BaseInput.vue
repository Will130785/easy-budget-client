<template>
  <div class="form-group">
    <input :class="formControl" 
      :id="inputId" 
      :type="inputType"
      @input="updateInput"
    />
    <label :for="inputId">{{ labelContent }}</label>
  </div>
</template>

<script>
export default {
  props: {
    inputId: String,
    inputType: String,
    labelContent: String,
    formControl: String
  },
  methods: {
    updateInput (e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>
/* Global input styles */
input {
  border: 1px solid #909090;
}
input:focus, input:active {
  border: none;
  outline: none;
}
.form-group {
  margin: 2rem 0;
}
/* Specific input styles */
.login-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  border-radius: .8rem;
  margin-bottom: 1rem;
  transition: all .3s ease;
  color: #0076b6;
}
.login-input:hover {
  border: .1rem solid #0076b6;
  background-color: #0076b650;
}
.login-input:active {
  border: .2rem solid #0076b6;
  background-color: #0076b650;
  padding: 1.4rem
}
.login-input:focus {
  border: .2rem solid #0076b6;
  padding: 1.4rem;
  background-color: #0076b62f;
}
</style>