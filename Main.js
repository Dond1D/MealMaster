import { useRef } from "react";
import React from "react"
import { FaBars, FaTimes } from "react-icons/fa";
import "./Main.css";
import Logo from "../image/logo1-removebg-preview.png";
import Person from "../image/user.png";
import MainParts from "./MainParts.js";
import MealInfo from "./MealInfo";
import Background from "../image/lasagne.jpg";
import Background1 from "../image/avo.jpg";
import Background2 from"../image/fastfood.jpg";
import Background3 from"../image/fish.jpg";
import Background4 from"../image/Chicken-Parmesan-square-FS-38.jpg";
import Background5 from"../image/bee.jpg";
import Background6 from"../image/ce.webp";
import Background7 from"../image/bro.jpg";
import Background8 from"../image/Honey-Garlic-Glazed-Salmon-2.jpg";
import Background9 from"../image/midhje.jpg";
import Background10 from"../image/shri.webp";
import Background11 from"../image/spe.webp";
import Background12 from"../image/susi.jpg";
import Background13 from"../image/spab.jpg";
import Background14 from"../image/sup.jpeg";
import Background15 from"../image/sea.jpg";
import Background16 from"../image/riso.jpg";
import Background17 from"../image/pu.jpeg";
import Background18 from"../image/ke.jpg";
import Background19 from"../image/pa.jpg";
import Background20 from"../image/do.jpg";
import Background21 from"../image/kalla.jpg";
import Background22 from"../image/ske.jpg";
import Background23 from"../image/veg.jpg";
import Background24 from"../image/chi.jpg";
import Background25 from"../image/pi.webp";
import Background26 from"../image/ep.jpg";
import Background27 from"../image/spi.jpg";
import Background28 from"../image/lattice.jpg";
 import Background29 from"../image/lemon-chicken-144144-1.jpg";
import Background30 from"../image/roll.jpg";
import Background31 from"../image/mexican-eggs-with-potato-hash-14587-1.jpg";
import { Link } from "react-router-dom";



function Main() {
	const navRef = useRef();
	// const [changeStyle,setChangeStyle] = React.useState("./image/back.webp");
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	// React.useEffect(()=>{
	// 	document.body.style.backgroundImage=`url(${changeStyle})`
	// },[changeStyle])

	
	
	

	return (
		<>
		
		<header>
			<img src={Logo} alt="logo" className="logo" style={{width:"250px",height:"100px",marginTop:"20px"}}/>
			<nav ref={navRef} style={{marginRight:"10px",marginLeft:"120px"}}>
				{/* <Link to="/Home">Home</Link> */}
				<Link to="/#">My work</Link>
				<Link to="/search">Search Meal</Link>
				<Link to="/shopping">Shopping</Link>
				<Link to="/weekly">Weekly Planner</Link>
				<Link to="/about">About me</Link>
				{/* <Link to="/login">Login</Link> */}

				<div className="div-person">
				<Link to="/user">
					<img src={Person} alt="person" style={{ float: "right",marginLeft:"150px",marginTop:"20px" }} className="person" />
				</Link>
				</div>
				<button className="nav-btn nav-close-btn" onClick={showNavbar} >
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		{/* <MainParts /> */}
		<div class="row">
		<MealInfo name="Lazanje" image={Background} nutritionist="Kosovare Bushati" rating="5.0"
		info="Karkaleca në zgarë janë një pjatë shumë e thjeshtë, e shijshme dhe e shpejtë.
		 Me këtë recetë, të pjekësh karkalecat është me të 
		 vërtetë shumë e thjeshtë dhe rezultati final është fantastik." />
		<MealInfo name="Avokado Roll" image={Background1} nutritionist="Kosovare Bushati" rating="5.0"
		info="Për recetën peshk në furrë me perime, kemi zgjedhur peshk merluc. Një peshk i shijshëm dhe me shumë vlera ushqimore. Sipas një studimi të kryer, peshku merluc ka veti të shëroje plagët kronike." />
		<MealInfo name="Hamburger" image={Background2} nutritionist="Kosovare Bushati" rating="5.0"
		info="Këto makarona janë një pjatë e shëndetshme për fëmijët dhe jo vetëm. Janë një pjatë e shpejtë për tu gatuar. Mjaftojnë pak përbërës dhe në pak minuta do të kemi një pjatë të shijshme." /> 
		<MealInfo name="Peshk ne zgare" image={Background3} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Chicken Parmesean" image={Background4} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Panxhar i pjekur" image={Background5} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Sallate Cezeriane" image={Background6} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Brokoli ne Tave" image={Background7} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Honey-Garlic Glazed Salmon" image={Background8} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Midhje Deti" image={Background9} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Karkaleca me hudher" image={Background10} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Speca te mbushur" image={Background11} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Sushi" image={Background12} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Shpageta Boloneze" image={Background13} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Supe me perime" image={Background14} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Ushqime Deti" image={Background15} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Rizoto Pule" image={Background16} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Kungull Djeges" image={Background17} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Kerpudha me spinaq" image={Background18} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Patate te thara" image={Background19} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Domate te Marinuara" image={Background20} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Kallamari" image={Background21} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Skenderbeg Pule" image={Background22} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Vegjetariane" image={Background23} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Gjoks Pule i mariuar" image={Background24} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Pica Peperoni" image={Background25} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Domantina me soje" image={Background26} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Spinaq" image={Background27} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Lazanja me kungull te njome" image={Background28} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Lemon Chicken" image={Background29} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Rainbow Roll" image={Background30} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
		<MealInfo name="Veze Meksikane" image={Background31} nutritionist="Kosovare Bushati" rating="5.0"
		info="eshte shume pperfekte nuk ka fjale per te" />
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
		</>

		
	);
	
}

export default Main;

