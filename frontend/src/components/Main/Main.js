import { useRef } from "react";
import React from "react"
// import { FaBars, FaTimes } from "react-i+cons/fa";
import "./Main.css";
import Logo from "../image/logo1-removebg-preview.png";
import Person from "../image/user.png";

import MealInfo from "./MealInfo";
import axios from "axios"
import { Link } from "react-router-dom";



function Main() {
	const [meal,setMeal] = React.useState([]);
	const navRef = useRef();
	// const [changeStyle,setChangeStyle] = React.useState("./image/back.webp");
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const getUser = JSON.parse(localStorage.getItem("user"));

	const username = getUser.username;

	

	React.useEffect(() => {
		const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/auth/mealsSpecified", {
                    params: {
                        username: username
                    }
                });
                setMeal(response.data);
            } catch (error) {
                console.error("Error fetching meal:", error);
            }
        };

        fetchData();
    }, [username]);


	 console.log("meal after fetch",meal)

	return (
		<div>
		
		<header>
			<img src={Logo} alt="logo" className="logo" style={{width:"250px",height:"100px"}}/>
			<nav ref={navRef} style={{marginRight:"10px",marginLeft:"120px"}}>
				<Link to="/#">Home</Link>
				<Link to="/search">Search</Link>
				<Link to="/shopping">Shopping</Link>
				<Link to="/weekly">Weekly Planner</Link>
				<Link to="/about">About me</Link>
				<div className="div-person">
				<Link to="/user">
					<img src={Person} alt="person" style={{ float: "right",marginLeft:"150px" }} className="person" />
				</Link>
				</div>
				<button className="nav-btn nav-close-btn" onClick={showNavbar} >
					{/* <FaTimes /> */}
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				{/* <FaBars /> */}
			</button>
		</header>
		{/* <MainParts /> */}
		<div className="row">
			{ meal.length == 0  ? <div>Loading...</div> :meal.map((item)=>
				<MealInfo key={item.id} name={item.name} info={item.description} nutritionist={item.nutritionist} image={item.image.content}/>)}
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

		
	);
	
}

export default Main;

