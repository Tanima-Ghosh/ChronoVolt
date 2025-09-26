
// import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import Home from "./Pages/Home/Home"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import Nav from "./components/Nav/Nav"
import Shop from "./Pages/Shop/Shop";
// import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About/About";







function App() {


  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Shop" element={<Shop/>}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer/>
      <ToastContainer position="bottom-right" autoClose={2000} />
      
    </>
  )
}

export default App
