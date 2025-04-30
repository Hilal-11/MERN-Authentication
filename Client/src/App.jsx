import React from 'react'
import { Routes , Route } from 'react-router-dom'
// import Home from '/Pages/Home'
// import Login from '/Pages/Login'
// import ResetPassword from '/Pages/ResetPassword'
// import EmailVarify from '/Pages/EmailVarify'
// import Home from './Pages/Home'
// import Login from './Pages/Login'
// import ResetPassword from './Pages/ResetPassword'
// import EmailVarify from './Pages/EmailVarify'
import Home from './Pages/Home'
import Login from './Pages/Login'
import EmailVarify from './Pages/EmailVarify'
import ResetPassword from './Pages/ResetPassoword'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className=' bg-gradient-to-r from-slate-900 to-slate-950 lg:h-screen h-[100%]'>   
     <div className='lg:max-w-[80%] w-[100%] mx-auto px-10 text-white'>
      <ToastContainer />
      <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/login' element={<Login></Login>}/>
          <Route path='/emailVarify' element={<EmailVarify></EmailVarify>}/>
          <Route path='/resetPassword' element={<ResetPassword></ResetPassword>}/>
      </Routes>
     </div>
    </div>
  )
}

export default App