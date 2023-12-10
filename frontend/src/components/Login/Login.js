import React, { useState, useEffect } from 'react';
import LoginLogo from "./logo.png";
import "./login.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  


  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{

      //krijon post request ne backend per te marr te dhenat
      const response = await axios.post('http://localhost:8080/auth/login',{
        username,
        password,
      });

     
      //nese request eshte i sakte dergohet nje token
      if(response.data.jwt){
          localStorage.setItem('accessToken',response.data.jwt);
          const userJson = JSON.stringify(response.data.user)
          localStorage.setItem('user',userJson);
          // const userProfile = JSON.stringify(response.data.user.userProfile);
          // localStorage.setItem('uProfile',userProfile);
          console.log(response.data)
          console.log(response.data.user);

          if(response.data.user.authorities[0].authority === "ADMIN" ) {
            window.location.href = '/admin';
           // console.log(response.data)
           }else if(response.data.user.authorities[0].authority === "NUTRITIONIST"){
            window.location.href = '/nutricionist' ;
           }else if(response.data.user.authorities[0].authority === "DELIVERY"){
            window.location.href = '/delivery';
           }
           else if(response.data.user.authorities[0].authority === "USER"){
             window.location.href = '/main';
           }
      }else {
        alert('Login failed. Please check your credentials.');
      }

    }catch(error){
     setError("Logini deshtoi.Keni gabuar te dhenat.")
    }

    
    
    
    
    
  }

  useEffect(() => {
    document.body.style.backgroundColor="#F9F9F9";
    document.body.style.backgroundImage = `url("")`;
  }, []);

  return (
    <div>
      <div className='container'>
        <div className='img--container'></div>
        <div className='form--container'>
          <img src={LoginLogo} alt="logo" className='img--form' style={{width:"170px",height:"100px"}}/>
          <h3 className='div--login'>Log into MealMaster</h3>
          <div className='div--form'>
            <form  className='form' onSubmit={handleSubmit}>
              <input
                type="text"
                value={username}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type a password"
                required
              /><br />
              {error && <p className="error">{error}</p>} 
                <input type="submit" className='submit' /><br />
            
              
              
              <div className='login-button'>
                <Link to="/signup">Don't have an account?</Link>
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

export default Login;
