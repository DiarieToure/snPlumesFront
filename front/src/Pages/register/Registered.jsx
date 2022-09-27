import React from 'react'
import { useState } from 'react'
import Login from '../login/login'
// import Register from './Register'



const Registered=()=>{
    const [formSubmited,setFormSubmited]=useState(false)
    const registerSubmit=()=>{
        setFormSubmited(true);
    }

  return (
    <div>{!formSubmited ?  <Register registerSubmit={registerSubmit}/> :<Login/> }</div>
   
  )
}
export default Registered;