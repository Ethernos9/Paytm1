import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import SignUp from "./pages/SignUp.jsx"
import SignIn from "./pages/SignIn.jsx"
import DashBoard from "./pages/DashBoard.jsx"
import SendMoney from "./pages/SendMoney.jsx"
import { useState ,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Home from "./pages/Home.jsx"
function App() {

  return (
    <div>
      
       <BrowserRouter>
         <Routes>
           <Route path = "/" element = {<Home/>}/>
           <Route path ="/signup" element= {<SignUp/>}/>  
           <Route path ="/signin" element= {<SignIn/>}/>  
           <Route path ="/dashboard"element= {<DashBoard/>}/>  
           <Route path ="/send"element= {<SendMoney/>}/>  
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
