import { useState } from 'react'
 
import './App.css'
import Timer from '../pages/timer'
import Loginform from '../components/LoginForm'
import Login from '../pages/Login'

import CreateProfile from '../components/CreateProfile'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { createContext } from 'react'
import { FinalUserContextProvider } from '../Context/FinalUserContext'
import { Toaster } from 'react-hot-toast'
import Pomopage from '../components/Pomopage'
 
import axios from 'axios'
 
axios.defaults.baseURL = 'http://localhost:8813'
axios.defaults.withCredentials = true
function App() {
  return(
<BrowserRouter>
<FinalUserContextProvider>
<Toaster position = 'bottom-right' toastOptions={{duration:2000}}/>
<Routes>

<Route path = '/' element = {<Login />}/>
<Route path = "/CreateProfile" element = {<CreateProfile/>}/>
<Route path = "/Pomopage" element = {<Pomopage/>}/>
<Route path = "/Timer" element  = {<Timer />}/>
 </Routes>

</FinalUserContextProvider>
</BrowserRouter>
)
}


export default App
