import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import FormData from "./Signup/FormData";
import User from "./Main/User";
import FinalForm from "./Signup/FinalForm";
import Contact from "./Home/Contact";
import Search from "./SearchComponent/Search";
import Weekly from "./Weeakly/Weeakly";
import About from "./About/About";
import Cart from "./context/Cart";
import ProductItem from "./context/ProductItem";
import HomeAdmin from "./Admin/HomeAdmin";
import Nutricionist from "./Admin/Nutricionist";
import Delivery from "./Admin/Delivery";
import axios from "axios"

export default  function App(){
  const [cartItems, setCartItems] = useState([]);
  const [items,setItems] =React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:8080/auth/getProducts")
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching meal:", error);
      });
      
  }, []);

 
  
 
  const sendCartDataToBackend = (street,phone,total) => {
    const data = {
      address: street,
      telephone: phone,
      cartItems: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total:total
    };
  
    axios.post("http://localhost:8080/auth/items", data)
      .then(response => console.log(response.data))
      .catch(error => console.error("Error sending cart data:", error));
  }
  

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: +(ProductExist.quantity + 1).toFixed(2) } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...ProductExist, quantity: +(ProductExist.quantity - 1).toFixed(2)} : item));
    }
  };
  const handleCartClearence = () => {
    setCartItems([]);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="main" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="search" element={<Search />} />
        <Route path="user" element={<User />} />
        <Route path="contact" element={<Contact />} />
        <Route path="weekly" element={<Weekly />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<FormData />} />
        <Route path="final" element={<FinalForm />} />
        <Route path="nutricionist" element={<Nutricionist />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="admin" element={<HomeAdmin />} />
        <Route path="shopping" element={<ProductItem handleAddProduct={handleAddProduct} cartItems={cartItems} items={items} />} />
        <Route path="cart" element={<Cart
        sendCartDataToBackend={sendCartDataToBackend}
          handleRemoveProduct={handleRemoveProduct}
          handleAddProduct={handleAddProduct}
          cartItems={cartItems}
          handleCartClearence={handleCartClearence} />} />
        <Route path="route" element={<Route />} />
        <Route path="products" element={<ProductItem />} />
      </Routes>
    </BrowserRouter>
  );
};
