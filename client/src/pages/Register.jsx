import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password: "",
  })

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault()

    try {
      await axios.post("/auth/register", inputs)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='Username' onChange={handleChange} name='username' />
        <input required type="email" placeholder='Email' onChange={handleChange} name='email' />
        <input required type="password" placeholder='Password' onChange={handleChange} name='password' />
        <button type="submit" onChange={handleSubmit} >Register</button>
        <p>This is an error!</p>
        <span>Do you have an account ? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register