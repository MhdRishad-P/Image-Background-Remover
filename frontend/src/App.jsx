import React from 'react'
import Menubar from './components/Menubar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'



const App = () => {
  return (
    <div >
      <Menubar/>
      <Toaster/>
       <Routes>
           <Route path='/' element={<Home/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
