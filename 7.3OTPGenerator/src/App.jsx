import Otp from './Otp'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Otp />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
