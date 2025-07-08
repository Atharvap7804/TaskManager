import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  


  const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
      setEmail('')
      setPassword('')
  }
  
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')




  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form action=""
        onSubmit={(e)=>{
          submitHandler(e)
         
        }}
        className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required className='w-80 border-2 border-emerald-600 rounded-full py-3 px-5 text-l text-white outline-none bg-transparent' type="email" name=""  placeholder='Enter your email'
          />
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className='w-80 border-2 border-emerald-600 rounded-full py-3 px-5 text-l text-white outline-none bg-transparent mt-4' type="password" name=""  placeholder='Enter your password'/>
          <button className='w-80 border-red-600 rounded-full py-2 px-10 text-xl flex items-center justify-center text-white outline-none bg-emerald-600 mt-5'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login