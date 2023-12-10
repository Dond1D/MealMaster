import React from "react";
import "./mainco.css"
import { Link } from "react-router-dom";
import axios from "axios";

export default function Contact(){

  const [name,setName] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [message,setMessage] = React.useState('');

  function handleSubmit(){
     axios.post('http://localhost:8080/auth/contact',{
      name:name,
    email:email,
    message:message
     })
    .then((response) => {
      console.log(response.data);
       window.location.href ="/";
    })
    .catch((error) => console.log(error))
  }

    React.useEffect(()=>{
        document.body.style.backgroundColor = "#c8e8e9";
        document.body.style.backgroundImage =`url("")`;
    })
    return(
        <div className="contact-body">
           
        <div className="container-contact">
    <div className="content-contact">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Rr.Sejdi Kryeziu</div>
          <div className="text-two">Pejton</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+38343885011</div>
          <div className="text-two">+38344982924</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">mealMasterer@gmail.com</div>
          <div className="text-two">info.mealMaster@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my page, you can send me message from here. It's my pleasure to help you.</p>
      <form  onSubmit={handleSubmit} method="post">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-box message-box">
          <textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <div className="button">
            <input type="submit" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
    )
}