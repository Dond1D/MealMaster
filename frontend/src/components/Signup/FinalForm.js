import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "./loo-removebg-preview.png"
import "./FormData.css"
import Anything from "./d.png"
import Meat from "./paleo.png"
import Vegetarian from "./vegetarian.png"
import Vegan from "./veg.png"

export default function FinalForm() {
    const [selectedDiet, setSelectedDiet] = React.useState('');
    const [clicked, setClicked] = React.useState({
        'Gluten': false,
        'Groundnut': false,
        'Egg': false,
        'Fish': false,
        'Dairy': false,
        'Soy': false
    });
    const [selectedAllergies,setSelectedAllergies] = React.useState([]);

    function dietClick(event) {
        const dietValue = event.target.innerText;
        setSelectedDiet(dietValue);
    }

    const handleClick = (e) => {
        const { innerText } = e.target;
        setClicked((prevState) => ({
            ...prevState,
            [innerText]: !prevState[innerText],
        }));

        // Update selectedAllergies based on clicked buttons
        setSelectedAllergies((prevAllergies) => {
            if (prevAllergies[innerText]) {
                // If the allergy was previously selected, remove it
                return prevAllergies.filter((allergy) => allergy !== innerText);
            } else {
                // If the allergy was not previously selected, add it
                return [...prevAllergies, innerText];
            }
        });
    };


    console.log(selectedDiet,clicked);

    const username = localStorage.getItem('user');

    console.log(username)


    function getDietStyle(diet) {
        return selectedDiet === diet ? { backgroundColor: '#007bff', color: "white"} : {};
    }

    function submitForm(e) {
        e.preventDefault();
        
        const selectedAllergiesArray = Array.isArray(selectedAllergies)
        ? selectedAllergies
        : [selectedAllergies];
        setSelectedAllergies(selectedAllergiesArray);

        console.log({
            username: username,
            selectedDiet: selectedDiet,
            selectedAllergies: selectedAllergiesArray
        });
        
    
        if (username) {
            axios.post("http://localhost:8080/auth/diet", {
                username: username,
                selectedDiet: selectedDiet,
                selectedAllergies: selectedAllergies // Ensure it's always an array
            })
            .then((response) => {
                console.log(response.data);
                 window.location.href = '/main'
            })
            .catch((error) => console.log(error));
        } else {
            console.error("Username is null.");
        }
    }




    React.useEffect(() => {
        document.body.style.backgroundColor = "white";
        document.body.style.backgroundImage = `url("")`;
    })
    return (
        <div>
            <main>
                <section>
                    <div className="logo-section">
                        <img src={Logo} style={{ width: "200px", height: "200px" }} />
                    </div>
                    <div className="steps">
                        <div className="first-part">
                            <p className="step-1">Step 1</p>
                            <div className="choises">Physical profile</div>
                        </div>
                        <div>
                            <p style={{ display: "flex", justifyContent: "center", color: "gray" }}>Step 2</p>
                            <div className="profile">Food choises</div>
                        </div>
                    </div>
                    <div className="title-form">
                        
                        <div className="tell">What do you like to eat?</div>
                        <p className="choose">Choose a pre-set diet, or exclude the foods you don't like or are allergic to.</p>
                        <br />
                        <p style={{ display: "flex", justifyContent: "center", margin: "-20px" }}>You can edit this later.</p>
                    </div>
                    <div className="primary-diet">
                        What's your primary diet?
                    </div>
                    
                    <div className="div-diet">
                       
                        <div className="anything" onClick={dietClick} style={getDietStyle('Anything')}>
                            <img src={Anything} alt="anything" style={{ width: "90px", height: "60px" }} className="anything-img" />
                            <div className="diet-div-anything">Anything</div>
                        </div>
                        <div className="meat" onClick={dietClick} style={getDietStyle('Meat')}>
                            <img src={Meat} alt="meat" style={{ width: "100px", height: "70px" }} className="meat-img" />
                            <div className="diet-div-meat">Meat</div>
                        </div>
                        <div className="vegetarian" onClick={dietClick} style={getDietStyle('Vegetarian')}>
                            <img src={Vegetarian} alt="vegetarian" style={{ width: "100px", height: "70px" }} className="vegetarian-img" />
                            <div className="diet-div">Vegetarian</div>
                        </div>
                        <div className="vegan" onClick={dietClick} style={getDietStyle('Vegan')}>
                            <img src={Vegan} alt="vegan" style={{ width: "100px", height: "70px" }} className="vegan-img" />
                            <div className="diet-div">Vegan</div>
                        </div>

                    </div>
                    <div className="alergies-text">
                        Do you have any allergies?
                    </div>
                    <div className="div-allergies" >
                        <div>
                            <button className={clicked.Gluten ? 'clicked' : 'alergies-button'}
                                onClick={handleClick}>Gluten</button>
                            <button className={clicked.Groundnut ? 'clicked' : 'alergies-button'}
                                onClick={handleClick}>Groundnut</button>
                            <button className={clicked.Egg ? 'clicked' : 'alergies-button'}
                                onClick={handleClick}>Egg</button>
                            <button className={clicked.Fish ? 'clicked' : 'alergies-button'}
                                onClick={handleClick}>Fish</button>
                            <button className={clicked.Dairy ? 'clicked' : 'alergies-button'}
                                onClick={handleClick}>Dairy</button>
                            <button className={clicked.Soy ? 'clicked' : 'alergies-button'}
                                onClick={handleClick}>Soy</button>
                        </div>
                    </div>

                    <div className="next-div">
                    <Link to="/form" ><button className="button-back">Back</button></Link>
                       <button className="button-next" value="Next" onClick={submitForm}>Next</button>
                        
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
                </section>
            </main>
        </div>
    )
}