import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import LandingPage from './pages/LandingPage/LAndingPage'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'


const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login />} />

            {/* Catch all routes  */}
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </Router>
        <Toaster toastOptions={{className:"" ,style:{fontSize:"13px",}, position: 'top-center'}} /> 
    </div>
  )
}

export default App