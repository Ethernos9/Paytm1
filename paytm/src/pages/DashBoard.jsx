import React, { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import Users from "../components/Users"
import axios from 'axios'

const DashBoard = () => {

  
  const [value, setValue] = useState(0)
  const [user,setUser]= useState("")

  const getBalance = async()=>{
    const token = localStorage.getItem("token")
    const res = await axios.get("http://localhost:3000/api/v1/balance",{
      headers:{
        token:token
      }
    }
      
    )
    setValue(res.data.balance)

  }

  const getUser = async ()=>{
    const token = localStorage.getItem("token")
   const res =  await axios.get("http://localhost:3000/api/user/get",{
      headers:{
         token :token
      }
     })
     const currUser= res.data.user.firstname[0].toUpperCase()
     
     setUser(currUser)
     
     
    

  }
  console.log("value is :",value)

  useEffect(()=>{
   getBalance()
   getUser()
  },[])

  return (
    <div>
      <AppBar user= {user}/>
      <div className='m-8'>
           <Balance value = {value}/>
           <Users/>
      </div>
    </div>
  )
}

export default DashBoard