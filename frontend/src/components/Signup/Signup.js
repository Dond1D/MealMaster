import React, { useRef } from 'react';
import logo from "./logo.png";
import "./signup.css";
import axios, { formToJSON } from "axios"
import { Link } from "react-router-dom";

export default function Signup(){

  const [formData,setFormData] = React.useState({
    name:"",
    surname:"",
    username:"",
    password:"",
    gender:"",
  })
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.name.length < 2) {
      alert('Please enter a valid name.');
      return;
    }
    if (formData.surname.length < 2) {
      alert('Please enter a valid surname.');
      return;
    }
    if (
      !formData.username.includes('@') ||
      formData.username.length < 5 ||
      !formData.username.includes('.com')
    ) {
      alert('Please enter a valid email address.');
      return;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        'Please enter a password with at least 8 characters, including at least one letter and one number.'
      );
      return;
    }
    if (formData.gender !== 'Male' && formData.gender !== 'Female') {
      alert('Please select a gender.');
      return;
    }

    axios
      .post('http://localhost:8080/auth/register', formData)
      .then((res) => {
        localStorage.setItem('user', res.data.username);
        console.log(res.data);
        window.location.href = '/form'
      })
      .catch((error) => {
        console.log(error);
      });

    }
  
    React.useEffect(()=>{
        document.body.style.backgroundImage = `url("")`;
        document.body.style.backgroundColor ="white";
    })

    const handleChange = (event) => {
      const { name, value } = event.target;
        setFormData((prevState) => {
          return { ...prevState, [name]: value };
        });
    };
    
    return(
    <div>
        <div className='container'>
            <div className='img--container'>
            <img src={logo} alt="logo" className='img--form' style={{width:"100px",height:"70px"}}/>
            </div>
        <div className='form--container'>
            <div className='div--login'>Create a new account</div>
                <h5 className='quick'>It's quick and easy</h5>
            <div className='div--form'>
                <form onSubmit={handleSubmit} method="post" className='form'>
                    <div className="name">
                    <input type="text" placeholder="First name"  name="name" value={formData.name} onChange={handleChange}/>
                    <input type="text" placeholder="Last name" name="surname"  value={formData.surname} onChange={handleChange}/>
                    </div>
                    <input type="email" name="username"  value={formData.username} onChange={handleChange}
                    className='email' placeholder="Enter your email" />
                    <br />
                    <input type="password" name="password" style={{marginTop:"-10px"}} value={formData.password} onChange={handleChange}
                    className='password' placeholder="Type a password"/><br />
                   
            <div style={{display:"flex",marginRight:"0px",marginTop:"10px"}}>
             <label htmlFor="gender" style={{marginBottom:"0px"}}>Male</label>
             <input type="radio" id="Male"name="gender" value="Male" onChange={handleChange} className='gender' />
             <br />
             <label htmlFor="gender"  style={{marginLeft:"40px",marginBottom:"0px"}}>Female</label>
             <input type="radio" id="Female" name="gender" value="Female" onChange={handleChange} className='gender' />
             <br />
             </div>
    <br />
                    <p className="warning"> 
                    By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. 
                    You may receive SMS Notifications from us and can opt out any time.
                    </p>
                        <input type="submit" className='submit' value="Submit" />
                    <div className='signup-button' style={{height:"0px"}}>
                    <Link to="/Login">Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>         
    </div>
        <footer className="footer">
            <ul className="footer-links">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Data Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Create ad</a></li>
                <li><a href="#">Create Page</a></li>
                <li><a href="#">information Center</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Cookies</a></li>
            </ul>
</footer>    
    </div>
        
     
    )
}

