

import React, { useRef } from 'react';
import logo from "./logo.png";
import "./signup.css";
import axios from "axios"
// import FormData from "../Sign/FormData"
// import Login from "./Login.js"
import { Link } from "react-router-dom";


export default function Signup(){
    const [name,setName] = React.useState('');
    const [surname,setSurName] = React.useState('');
    const [nameError, setNameError] = React.useState('');
    const [surnameError, setSurNameError] = React.useState('');
    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [birthdate, setBirthday] = React.useState('');
    const [birthdayError, setBirthdayError] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [genderError, setGenderError] =React.useState('');

   

    const handleBirthdayChange = (e) => {
        const inputDate = e.target.value;
        setBirthday(inputDate);
        console.log(inputDate)
    
        // Perform validation
        const currentDate = new Date();
        const selectedDate = new Date(inputDate);
    
        if (inputDate.trim() === '') {
            setBirthdayError('Birthday is required.');
          } else if (selectedDate > currentDate) {
            setBirthdayError('Invalid date. Please select a date in the past.');
          } else {
            setBirthdayError('');
          }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        

       

    if (!username.includes('@') || username.length < 5 || !username.includes('.com')) {
        setEmailError('Please enter a valid email address.');
        return;
      }else{
        setEmailError('');
      }
      if ( name.length < 2 ) {
        setNameError('Please enter a valid name.');
        return;
      }
      if ( surname.length < 2 ) {
        setNameError('Please enter a valid surname.');
        return;
      }
      if (gender === '') {
        setGenderError('Please select a gender.');
        return;
      }
     
  
      // Validate password
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
        setPasswordError('Please enter a password with at least 8 characters, including at least one letter and one number.');
        // return;
      }else{
        setPasswordError('');
      }
    
  
      // If both email and password are valid, submit the form
      setEmailError('');
      setNameError('');
      setPasswordError('');
      setSurNameError('');

      // window.location.href = '/form'
      
      // const user = {
      //   name: nameS,
      // surname: surnameS,
      // username: emailS,
      // password: passwordS,
      // birthdate: birthdayS,
      // gender: genderS
      // }
      
      axios.post("http://localhost:8080/auth/register",{
        name:name,
        surname:surname,
        username: username,
        password: password,
        birthdate: birthdate,
        gender: gender
      })
      .then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
     
    }
    React.useEffect(()=>{
        document.body.style.backgroundImage = `url("")`;
        document.body.style.backgroundColor ="white";
    })
    
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
                    <input type="text" placeholder="First name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                   
                    <input type="text" placeholder="Last name" id="surname" value={surname} onChange={(e) => setSurName(e.target.value)}/>
                    
                    </div>
                    <input type="email"  value={username} onChange={(e) => setUsername(e.target.value)}
                    className='email' placeholder="Enter your email" />
                    <br />
                    {emailError && <p className="error" style={{fontSize:"12px",color:"red"}}>{emailError}</p>}
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className='password' placeholder="Type a password"/><br />
                    {passwordError && <p className="error" style={{fontSize:"12px",color:"red"}}>{passwordError}</p>}
                    <p className='birthday'>Birthday </p>
                    <input type="number" className="birthday" value={birthdate} onChange={handleBirthdayChange} />
                    {birthdayError && <p className="error" style={{fontSize:"12px",color:"red"}}>{birthdayError}</p>}
                 
                    <p className='gender' style={{marginLeft:"6px"}}>Gender</p>
            <div className="some-class">
                    <label htmlFor="Male">Male</label><br/>
                    <input type="radio" name="gender" className='male' value="Male" onChange={(e) => setGender(e.target.value)}></input>
                    <label htmlFor="Female">Female</label><br/>
                    <input type="radio"  name="gender" value="Female" onChange={(e) => setGender(e.target.value)}></input>

                    
                    
                
            </div>
            {nameError && <p className="name-error" style={{fontSize:"12px",color:"red"}} >{nameError}</p>}
            {surnameError && <p className="name-error" style={{fontSize:"12px",color:"red"}}>{surnameError}</p>}
            {genderError && <p className="error" style={{fontSize:"12px",color:"red"}}>{genderError}</p>}
    <br />
    
                    <p className="warning"> 
                    By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. 
                    You may receive SMS Notifications from us and can opt out any time.
                    </p>
                    
                    {/* <input type="submit" /><br /> */}
                    <div className='submit'>
                        <input type="submit" className='submit-signup' value="Submit" style={{textDecoration:"none"}} />
                    </div>
                    
                    
                    <div className='signup-button'>
                    {/* <button onClick={() => props.onFormChange('login')} >Already have an account?</button> */}
                    <Link to="/Login"><button className='already'>Already have an account?</button></Link>
                    
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
