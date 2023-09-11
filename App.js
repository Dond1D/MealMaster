import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import FormData from "./Signup/FormData";
import NewProduct from "./Signup/NewProduct";
import User from "./Main/User";
import FinalForm from "./Signup/FinalForm";
import Contact from "./Home/Contact";
import Search from "./SearchComponent/Search";
import CalorieCalc from "./Signup/CalorieCalc";
import Weekly from "./Weeakly/Weeakly";
import About from "./About/About";
import Shopping from "./context/Shopping";
import Cart from "./context/Cart";
import data from "./context/productsData"
import ProductItem from "./context/ProductItem";
import HomeAdmin from "./Admin/HomeAdmin";


const App = () => {
  const [cartItems,setCartItems] = useState([]);
  const { items } = data;

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist,quantity:ProductExist.quantity + 1}:item));
    }else{
      setCartItems([...cartItems,{...product,quantity:1 }])
    }
  }
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }else{
      setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist,quantity:ProductExist.quantity-1}:item))
    }
  }  
  const handleCartClearence = () => {
    setCartItems([]);
  }
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="main" element={<Main />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="calc" element={<CalorieCalc />} /> */}
        <Route path="signup" element={<Signup />} />
        <Route path="search" element={<Search />} />
        <Route path="user" element={<User />} />
        <Route path="contact" element={<Contact />} />
        <Route path="weekly" element={<Weekly />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<FormData />} />
        <Route path="final" element={<FinalForm />} />
        <Route path="new" element={<NewProduct />} />
        <Route path="admin" element={<HomeAdmin />} />
        <Route path="shopping" element={<Shopping handleAddProduct={handleAddProduct}  cartItems={cartItems} items={items}/>} />
        <Route path="cart" element={<Cart  
        handleRemoveProduct={handleRemoveProduct}
        handleAddProduct={handleAddProduct} 
        cartItems={cartItems}
        handleCartClearence={handleCartClearence}
        />} />
        <Route path="route" element={<Route />} />
        <Route path="products" element={<ProductItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

