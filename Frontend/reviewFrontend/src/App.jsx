import './App.css'
import Register from './Auth/Register'
import LandingPage from './Landing/Landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Search/Search';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage></LandingPage>}></Route>
    <Route path='/Register' element={<Register></Register>}></Route>
    <Route path='/searchItem' element={<Search></Search>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
