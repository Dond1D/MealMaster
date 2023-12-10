import React from "react"
import "./Cart.css"

 const Cart = ({ sendCartDataToBackend,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearence}) => {
  const [showPrompt, setShowPrompt] = React.useState(false);
 
  if (!cartItems || cartItems.length === undefined) {
    return <div className="cart-items-empty">No items are added</div>;
  }
  const total = cartItems.reduce((price,item)=> price + item.quantity*item.price,0).toFixed(2);

 
  

  function handleCashOut(){
    setShowPrompt(prevState=>!prevState);
  }


  function  handleData(){
    setShowPrompt(false);


    setTimeout(()=> {
      const address = prompt("Please enter your address");     
      const telephone = prompt("Please enter your telephone");

      if (address === null || telephone === null) {
        return; 
      }
      sendCartDataToBackend(address,telephone,total);
      handleCartClearence();
      Promise.resolve().then(() => {
        if (showPrompt) {
          alert('You have successfully ordered the products');
        }
      });
    },100)  
  }

    return(
      <div className="cart-items">
        <h2 className="cart-items-header">Cart Item</h2>
        <div className="clear-cart">
          {cartItems.length >=1 && (
            <button className="clear-cart-button" onClick={handleCartClearence}>Clear Cart</button>
          )}
        </div>
        

        {cartItems.length === 0 && (
          <div className="cart-items-empty">No items are added</div>
        )}
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-items-list">
              <img src={`data:image/png;base64,${item.image.content}`} alt="content"   className="cart-items-image" />
           
            <div className="cart-items-name">{item.name}</div> 
            <div className="cart-items-function">
              <button className="cart-items-add" onClick={()=>handleAddProduct(item)}>+</button>
              <button className="cart-items-remove" onClick={()=>handleRemoveProduct(item)}>-</button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * {item.price}€
            </div>
            </div>
          ))}
          <div className="cart-items-total-price-name" >
              Total price
              <div className="cart-items-total-price">{total}</div>
              <br/>
          </div>
          <div className="cashOut-div">
            {total > 0 &&  <button className="cashOut" onClick={handleCashOut}>Cash out</button> } 
            {showPrompt && (
        <div className="prompt-modal">
          <h2>Warning!</h2>
          <p>Do you want to proceed?</p>
          <button style={{backgroundColor:"#208C19  ",borderBlockColor:"#2BB622"}} onClick={handleData}>Yes</button>
          <button style={{backgroundColor:" rgb(255, 0, 0)",borderBlockColor:"rgb(243, 0, 0)"}} onClick={handleCashOut}>Cancel</button>
        </div>
      )}
          </div>
          
        </div>
        </div>
    )
}
export default Cart;
