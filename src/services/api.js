import axios from 'axios'

const registerUser = async data => {
  try {
    const res = await axios.post(`http://localhost:4000/register`, data)
    if (res && res.data) {
      console.log(res)
    } else {
      console.log('There was an error with the request')
    }
  } catch (err) {
    console.log(err)
  }
}

export {
  registerUser
}