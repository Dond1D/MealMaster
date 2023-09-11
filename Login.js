import React, { useState, useEffect } from 'react';
import LoginLogo from "./logo.png";
import "./login.css";
import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const [validate, setValidate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Validate email
    // if (!emailS.includes('@') || emailS.length < 5 || !emailS.includes('.com')) {
    //   setEmailError('Please enter a valid email address.');
    //   return;
    // }

    // Validate password
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // if (!passwordRegex.test(passwordS)) {
    //   setPasswordError('Please enter a password with at least 8 characters, including at least one letter and one number.');
    //   // return;
    // }else{
    //   setPasswordError('');
    // }

    // If both email and password are valid, submit the form
    setEmailError('');
    setPasswordError('');
 

    axios.post("http://localhost:8080/user/",{
      username: username,
      password: password,
    })
    .then(response => {
      if(response.data.message === "Login Failed"){
          alert("Login Failed")
      }else if(response.data.message === "Login Successfull"){
        if (response.data.roles.includes("ADMIN")) {
          window.location.href = '/admin';
        } else {
          window.location.href = '/home';
        }
      }else{
         alert("Incorrect Email and Password not match");
      }
    }).catch(error => {
      alert("Login Failed.Again");
    })
    // submit the form here
    //  history.push('/main');
    
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
              {emailError && <p className="error">{emailError}</p>}
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type a password"
                required
              /><br />
              {passwordError && <p className="error">{passwordError}</p>}
              {/* <Link to="/main"> */}
                <input type="submit" className='submit' /><br />
              {/* </Link> */}
              
              
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
