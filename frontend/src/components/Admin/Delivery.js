import React from "react";
import axios from "axios";
import "./Delivery.css"



export default function Delivery() {
    
    const [data,setData] = React.useState([]);
    React.useEffect(()=> {
        axios.get("http://localhost:8080/auth/getOrder")
        .then(response => {
            setData(response.data)
            
        })
        .catch(error => {
            console.error("Error fetching meal:", error);
        });
    },[])

    function handleDeleteButton(id){
        axios.delete(`${"http://localhost:8080/auth"}/${id}`)
  .then(response => {
    console.log('Delete Successful:', response.data);
    window.location.reload();
  })
  .catch(error => {
    console.error('Error deleting resource:', error);
  });

    }

 
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Telephone</th>
                        <th>Item Name</th>
                        <th>Totali</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.address}</td>
                            <td>{item.telephone}</td>
                            <td>
                                <ul>
                                {/* Render your cart items here */}    
                                    {item.cartItems.map((cartItem, index) => (
                                        <div  className="cartItem-div" key={index}>
                                        <li  className="cartItem-name">{cartItem.name}</li>
                                        <li className="cartItem-price">{cartItem.price}</li>
                                        <li className="cartItem-quantity"  >{cartItem.quantity}</li>
                                        </div>
                                    ))}
                                    </ul>
                            </td>
                            <td>{item.total}</td>
                            <td><button className="delete-button-item" onClick={() => {handleDeleteButton(item.id)}}>Delete </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
 )
}