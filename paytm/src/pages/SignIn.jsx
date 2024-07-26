import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from "../components/InputBox"
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate= useNavigate()
   const [data,setData]= useState({
    email:"",
    password:""

   })
   const onChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
   }

   const handleSubmit = async(e) => {
    e.preventDefault()
   const res = await axios.post("http://localhost:3000/api/user/login",data)
   const token =res.data.token
   localStorage.setItem("token",token)
   navigate("/dashboard")
   }
 

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
         <div className='flex flex-col justify-center'>
            <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                <Heading label = {"Sign In"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox name= "email" placeholder="abc@gmail.com" label ={"Email"} onChange={onChange} value = {data.email}/>
                <InputBox name ="password" placeholder="Password" label ={"Password"} onChange={onChange} value = {data.password}/>
                 <div className='pt-4'>
                     <Button onClick={handleSubmit} label = {"Sign In"}/>            
                 </div>
                 <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
            </div>
         </div>
    </div>
  )
}

export default SignIn