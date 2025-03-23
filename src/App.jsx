
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Body from './components/Body'
import Profile from './components/Profile'
 
function App() {
 
  return (
  <>
    <BrowserRouter  basename='/'>
     <Routes>

     <Route path='/' element={<Body/>} >

     <Route path='/login' element={<Login/>} />
     <Route path='/Profile' element={<Profile/>} />
      </Route>
     </Routes>
    </BrowserRouter>
    
      </>
  )
}

export default App
