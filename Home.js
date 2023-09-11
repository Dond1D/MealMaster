import React from "react";
import { useRef,useState } from "react";
import "./Home.css"
import Woman from "./images/woman.jpg"
import Visualisation from "./images/about-visualization-discover-icons.png"
import WomanVisualisation  from "./images/about-visualization-discover-smallface.png"
import Logo from "../image/logo1-removebg-preview.png"
import { FaBars, FaTimes } from "react-icons/fa";
import Coconut from "./images/preview.png"
import Chart from "./images/about-data-chart.png"
import Cc from "./images/about-data-coconut.png"
import Join from "./images/about-join.jpg"
import JoinSmall from "./images/about-join-small-1.jpg"
import { FaMapMarkerAlt,FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import  { Link }  from "react-router-dom";



function MyComponent() {
  return (
    <div>
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
    </div>
  );
}



export default function Home(props){
    const navRef = useRef();
	// const [backgroundImage, setBackgroundImage] = useState("../image/back.webp");

    React.useEffect(()=>{
        document.body.style.backgroundColor = "white";
        document.body.style.backgroundImage =`url("")`;
    })
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    
    React.useEffect(() => {
        document.body.style.backgroundImage = `url(${props.backgroundImage})`;
        return() => {
            document.body.style.backgroundImage = "";
        }
        }, [props.backgroundImage]);
    
    return (
    <div>
        
        <header>
			<img src={Logo} alt="logo" className="logo" style={{width:"150px",height:"100px",marginTop:"20px"}}/>
			<nav className="home-nav" ref={navRef}>
			        {/* <Link to="Main" style={{marginLeft:"80px"}}>Main</Link> */}
					<Link to="about">About</Link>
                    <Link to="shopping">Shopping</Link>
                    <Link to="contact">Contact</Link>

				{/* <div className="div-person">
                    <Link to="/user"><img src={Person} alt="person" style={{ float: "right" }} className="person" />
                    </Link>
					
				</div> */}
				<button className="nav-btn nav-close-btn" onClick={showNavbar} >
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
            <div className="home-login">
                <Link to="Login"><button className="login-button-home">Login</button></Link>
                <Link to="signup"><div style={{color:"white",textDecoration:"none"}}>Or sign up instead</div></Link>
            </div>
            
		</header>
        <div className="container--home">
            <h6 className="about-meal">ABOUT MEAL PLANNING APP</h6>  
        <h1 className="mission"> Our mission is to be the smartest and most helpful food platform in existence</h1>
        <p className="fullfilling">We're fulfilling this mission by improving life in the kitchen for millions of home cooks around the world.
        </p>
        <div className="stats">
            <div className="rating-app"><span style={{color:"#006BFE",fontSize:"40px"}}><b>4.5+</b></span><br/>App Rating</div>
            <div className="recipes"><span style={{color:"#006BFE",fontSize:"40px"}}><b></b>2M+</span><br/>Recipes</div>
        </div>
       
        <section>
            <div className="">
                <div className="container-1">
                    <div className="images">
                    <img src={Woman} width="200px" height="200px" className="woman"/>
                <img src={Visualisation} className="visualisation"/>
                <img src={WomanVisualisation} className="WomanVisualisation"/>
                <p className="title">We help people discover what to eat based on personal preferences and data</p>
                <p className="content">Our system of personalized discovery learns you better to serve you better, so the question "what's for dinner?" is answered before it's even asked.</p>
                </div>
                </div>
            </div>
        </section>
        <section>
            <div className="part-2">
                 <div className="second-part-text">
                    <div className="big-data">We are building big data for food</div>
                    <div className="big-data-text">Meal Masters's proprietary Food Genome and patent-pending Food Intelligence technology allow us to understand recipes at a deeper level, and recommend recipes to our users based on their diets, allergies, tastes, and more.</div>
               </div>
                <div className="second-part">
                    <img src={Cc}  className="coconut" />
                    <img src={Coconut} className="bowl"/>
                    <img src={Chart} className="chart" />
                </div>
              
            </div>
        </section>
        <section className="the-last">
            <div className="third-part">
            <div className="third-part-image">
                <img src={Join} className="join" />
                <img src={JoinSmall} className="joinSmall" />
            </div>
            <div className="third-part-text">
                <div className="create">Join and create the future of food</div>
                <div className="create-text">We have appetizing aspirations to build the connected kitchen of the future and need more great people to get there.</div>
            </div>
                </div>
        </section> 
        <footer className="home-footer">
            <div className="location-footer">
                <FaMapMarkerAlt />
            <div className="location-div">J5W3+V69, Prishtina 10000</div>
           </div>
           <div className="icons">
            <div className="facebook-footer"><FaFacebook/></div>
            <div className="twitter-footer"> <FaTwitter /></div>
           
            <FaInstagram />
           </div>
        </footer>
        </div>
    </div>
    );
}