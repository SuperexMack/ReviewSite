import './App.css'
import Register from './Auth/Register'
import LandingPage from './Landing/Landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Search/Search';
import AddProduct from './AddProduct/Addproduct';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage></LandingPage>}></Route>
    <Route path='/Register' element={<Register></Register>}></Route>
    <Route path='/searchItem' element={<Search></Search>}></Route>
    <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
