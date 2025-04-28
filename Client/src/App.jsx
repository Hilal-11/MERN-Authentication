import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import EmailVarify from './pages/EmailVarify'
import Home from './pages/Home'

function App() {
  return (
    <div>   
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/Login' element={<Login></Login>}/>
        <Route path='/EmailVarify' element={<EmailVarify></EmailVarify>}/>
        <Route path='/ResetPassword' element={<ResetPassword></ResetPassword>}/>
      </Routes>
      
    </div>
  )
}

export default App