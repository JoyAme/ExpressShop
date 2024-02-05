import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


import NavbarMenu from "./Components/Navbar/Nav/NavbarMenu";
import Signin from "./Pages/Sign/Signin";
import CartShop from "./Pages/ShoppingCart/CartShop";

import HomePage from "./Home/HomePage";
import { GlobalStyle } from "./Styles/GlobalComp";
import Modals from "./asset/Modal/Modals";
import { useState } from "react";
import { Data } from "./asset/Data";



function App({}) {
const [cart,setCart]=useState([])

  const addCart=(data)=>{

    
    setCart([...cart,{ ...data, quantity :1}])
        
        
    }

  return (
    <div className="App1">
      <GlobalStyle/>
     <BrowserRouter>
     <NavbarMenu count={cart.length}/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/cart' element={<CartShop data={Data} cart={cart}/>}/>
      <Route path='/modal/:id' element={<Modals addCart={addCart}/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
