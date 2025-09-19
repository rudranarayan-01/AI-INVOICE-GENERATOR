import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import LandingPage from './pages/LandingPage/LAndingPage'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import AllInvoices from './pages/Invoices/AllInvoices'
import CreateInvoices from './pages/Invoices/CreateInvoices'
import InvoiceDetails from './pages/Invoices/InvoiceDetails'
import ProfilePage from './pages/Profile/ProfilePage'
import ProtectedRoute from './components/auth/ProtectedRoute'


const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            {/* Public Routes  */}
            <Route path='/' element={<LandingPage/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login />} />

            {/* Protected Routes  */}
            <Route path='/' element={<ProtectedRoute/>} />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='invoices' element={<AllInvoices/>} />
            <Route path='invoices/new' element={<CreateInvoices/>} />
            <Route path='invoices/:id' element={<InvoiceDetails/>} />
            <Route path='profile' element={<ProfilePage/>} />

            {/* Catch all routes  */}
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </Router>
        <Toaster toastOptions={{className:"" ,style:{fontSize:"13px",}, position: 'top-center'}} /> 
    </div>
  )
}

export default App