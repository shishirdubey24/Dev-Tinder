
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Body from './components/Body'
import Profile from './components/Profile'
import Browse from './components/Browse'
import { Provider } from 'react-redux'
import Store from './utils/Store'
 
function App() {
 
  return (
  <>
   <Provider store={Store}>  
    <BrowserRouter  basename='/'>
     <Routes>

     <Route path='/' element={<Body/>} >

     <Route path='/login' element={<Login/>} />
     <Route path='/Profile' element={<Profile/>} />
     <Route path='/Browse' element={<Browse/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
    </Provider>
      </>
  )
}

export default App
