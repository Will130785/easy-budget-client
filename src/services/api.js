import axios from 'axios'

const registerUser = async data => {
  try {
    const res = await axios.post(`http://localhost:4000/register`, data)
    if (res && res.data) {
      return res
    } else {
      return null
    }
  } catch (err) {
    return null
  }
}

export {
  registerUser
}