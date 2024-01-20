import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
// jaha py bhi data lena ya dena hai usecontext ka use karo
// but phele provider set karna padega
  return (
   <UserContextProvider>
    {/* jo bhi component yaha py hoga usko directly acess millega  */}

   <h1>App </h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App
