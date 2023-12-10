import React from "react"
import Jeta from "./jeta.jpg"
import Vale from "./valja.jpg"
import Hava from "./hava.jpg"
import Donjeti from "./dondi.jpg"
import  { Link }  from "react-router-dom";
import "./About.css"

export default function About(){
    return(
        <div>


        
    <div className="about-section">
    <h1>About Us Page</h1>
    <p>Cka bejme ne si MealMaster?</p>
    <p>MealMaster ju ndihmon të kurseni kohë, para dhe mund si dhe siguron që të hani ushqim të shëndetshëm dhe të balancuar.</p>
    </div>

    <h2 style={{textAlign:"center",margin:"20px"}}>Our Team</h2>
    <div className="row">
    <div className="column-about" >
        <div className="card">
        <img src={Donjeti} alt="Donjeti" width={"300px"}  height={"270px"}/>
        <div className="container-about">
            <h2>Donjet Dana</h2>
            <p className="title-about">Ceo Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>dd57619@ubt-uni.net </p>
            <p><button className="button-about" >
                <Link to="/contact"style={{textDecoration:"none", color:"white"}} >Contact</Link></button></p>

        </div>
        </div>
    </div>
   

    <div className="column-about">
        <div className="card">
        <img src={Jeta} alt="Jeta" width={"300px"}  height={"270px"}/>
        <div className="container-about">
            <h2>Mirjeta Prenaj</h2>
            <p className="title-about">Nutriciste</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>mp58486@ubt-uni.net</p>
            <p><button className="button-about" ><Link to="/contact"style={{textDecoration:"none", color:"white"}} >Contact</Link></button></p>
           
        </div>
        </div>
    </div>

    <div className="column-about">
        <div className="card">
        <img src={Hava} alt="Hava" width={"300px"}  height={"270px"}/>
        <div className="container-about">
            <h2>Hava Ahmeti</h2>
            <p className="title-about">Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>ha56029@ubt-uni.net</p>
            <p><button className="button-about" ><Link to="/contact"style={{textDecoration:"none", color:"white"}} >Contact</Link></button></p>
        </div>
        </div>
    </div>
    <div className="column-about">
        <div className="card">
        <img src={Vale} alt="Valja" width={"300px"}  height={"270px"}/>
        <div className="container-about">
            <h2>Kosovare Bushati</h2>
            <p className="title-about">CEO & Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>kb60078@ubt-uni.net</p>
            <p><button className="button-about" ><Link to="/contact"style={{textDecoration:"none", color:"white"}} >Contact</Link></button></p>

        </div>
        </div>
    </div>
  
		
    {/* <div className="column-about">
        <div className="card">
        <img src={Jeta} alt="Jeta" style={{width:"100%"}}/>
        <div className="container-about">
            <h2>Mike Ross</h2>
            <p className="title-about">Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>mike@example.com</p>
            <p><button className="button-about">Contact</button></p>
        </div>
        </div>
    </div>
    <div className="column-about">
        <div className="card">
        <img src={Jeta} alt="Jeta" style={{width:"100%"}}/>
        <div className="container-about">
            <h2>Mike Ross</h2>
            <p className="title-about">Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>mike@example.com</p>
            <p><button className="button-about">Contact</button></p>
        </div>
        </div>
    </div> */}
    {/* <div className="column-about">
        <div className="card">
        <img src={Jeta} alt="Jeta" style={{width:"100%"}}/>
        <div className="container-about">
            <h2>Mike Ross</h2>
            <p className="title-about">Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>mike@example.com</p>
            <p><button className="button-about">Contact</button></p>
        </div>
        </div>
    </div> */}
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
