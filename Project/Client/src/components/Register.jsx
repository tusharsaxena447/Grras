import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:5000/api/reg',value)
    .then(res => toast.success(res.data.message))
    navigate('/login')
  }
  const [value,setValue] = useState({email:"",password:""})
  return (
    <>
    <div className="container flex justify-center items-center">
    <form className="form" onSubmit={handleSubmit}>
      <div className="title">
        Welcome,<br />
        <span>sign up to continue</span>
      </div>
      <input type="email" placeholder="Email" name="email" className="input" value={value.email} onChange={(e)=>{setValue({...value, email:e.target.value})}}/>
      <input type="password" placeholder="Password" name="password" className="input" value={value.password} onChange={(e)=>{setValue({...value, password:e.target.value})}} />
      <div className="login-with">
        <h1>Already have an account?</h1><Link className='font-bold underline' to="/login">Login</Link>       
        
      </div>
      <button className="button-confirm">Let&apos;s go →</button>
    </form>
    </div>
    </>
  )
}