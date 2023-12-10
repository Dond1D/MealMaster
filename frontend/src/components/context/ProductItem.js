import React from "react"
import "./Products.css"
import { FiShoppingCart } from 'react-icons/fi';
import {Link } from "react-router-dom";

const ProductsItem = ({items,handleAddProduct,cartItems}) => {
 
 
    return (
     <div >
        <header className="header">
          <div>
            <h1>
              <Link to="#" className="logo--header">
                MealMaster Shop
              </Link>
            </h1>
          </div>
          <div className="header-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/main">Main</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/cart" >
                    <FiShoppingCart />
                    <span className="cart-length">{cartItems.length === 0 ? "" : cartItems.length}</span></Link>
              </li>
            </ul>
          </div>
        </header>
  
        <div className="products">
          {items.map((item) => (
            <div className="card-product" key={item.id}>
              <div>
                <img
                  className="product-image"
                  src={`data:image/png;base64,${item.image.content}`} style={{width:"240px;",height:"280px"}}
                  alt={item.productName}
                />
              </div>
              <div>
                <h3 className="product-name">{item.name}</h3>
              </div>
              <div>
                <div className="product-price">{item.price}€</div>
              </div>
              <div>
                <button className="product-add-button" onClick={() => handleAddProduct(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        </div>
    );
}
export default ProductsItem;