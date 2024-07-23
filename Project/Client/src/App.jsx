import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import Home from './components/Home'
import AdminHome from './admin/AdminHome'
import {Toaster} from 'react-hot-toast'
import Login from './components/Login'
import Error from './components/Error'
function App() {
  return (
    <>
      <div><Toaster/></div>
      <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home/>} />        
        <Route path='/admin' element={<AdminHome/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
