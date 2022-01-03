import axios from 'axios'
import { loginUser } from '../services/api'
import router from '../router/index'
const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: ''
}

const getters = {
  isLoggedIn: state => !!state.token
}

const actions = {
  async loginAction ({ commit }, data) {
    // Start login process
    commit('loginRequestMutation')
    try {
      const res = await loginUser(data)
      if (res.data.success) {
        const token = res.data.token
        const user = res.data.user
        // Store token and user in local storage
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        // Set axios defaults
        axios.defaults.headers.common.Authorization = token
        const userData = {
          token,
          user
        }
        commit('loginSuccessMutation', userData)
        return res
      } else {
        console.log('Error login in user')
      }
    } catch (err) {
      console.log(err)
    }
  },
  logoutAction ({ commit }) {
    commit('logoutRequestMutation')
    // Clear local storage
    localStorage.clear()
    // Update state
    commit('logoutSuccessMutation')
    // Redirect user to login screen
    router.push('/')
  }
}

const mutations = {
  loginRequestMutation (state) {
    state.status = 'Loggin user in'
  },
  loginSuccessMutation (state, payload) {
    state.token = payload.token
    state.user = payload.user
    state.status = 'Successfully logged in'
  },
  logoutRequestMutation (state) {
    state.status = 'Logging user out'
  },
  logoutSuccessMutation (state) {
    state.token = '',
    state.user = {},
    state.status = 'Successfully logged user out'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}