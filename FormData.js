import React from "react"
import Signup from "./Signup"
// import Logo from "./logo.png"
import Logo from "./loo-removebg-preview.png"
import "./FormData.css"
import Slider from '@material-ui/core/Slider';
import { Link } from "react-router-dom";

export default function Form(props) {

    // const [visibility,setVisibility] = React.useState(false);
    // const [calculate,setCalculate] = React.useState(false);


    // function handleCalculator(){
    //     setCalculate(!calculate)
    // }




    React.useEffect(() => {
        document.body.style.backgroundColor = "#F9F9F9";
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
                            <div className="profile">Physical profile</div>
                        </div>
                        <div>
                            <p style={{ display: "flex", justifyContent: "center", color: "gray" }}>Step 2</p>
                            <div className="choises">Food choises</div>
                        </div>
                    </div>
                    <div className="title-form">
                        <div className="tell">Tell us about yourself</div>
                        <p className="estimate">This info lets us estimate your nutrition requirements for each day</p>
                    </div>

                    <div className="form-first">
                        <form className="form-calc">
                            <div>
                                <label className="your-profile">Your Profile:</label>
                                <div className="radio-weight">
                                    <label>I want to:</label>
                                    <div class="radio-container">
                                        <input type="radio" id="lose-weight" name="goal" value="lose-weight" />
                                        <label for="lose-weight">Lose Weight</label>
                                        <div className="radio-checkmark"></div>
                                    </div>

                                    <div className="radio-container">
                                        {/* <div className="radio-checkmark"> */}
                                        <input type="radio" id="maintain" name="goal" value="maintain" />
                                        <label for="maintain">Maintain</label>
                                        {/* </div> */}
                                    </div>

                                    <div className="radio-container">
                                        <input type="radio" id="gain-weight" name="goal" value="gain-weight" />
                                        <label for="gain-weight">Gain Weight</label>
                                        <div className="radio-checkmark"></div>
                                    </div>


                                </div>

                                {/* <div className="div-radio">
                                    <label>
                                        I am:
                                    </label>
                                    <div className="input">
                                        <label className="male-radio"><input type="radio" />Male</label>
                                        <label><input type="radio" />Female</label>
                                    </div>
                                </div> */}
                                <div className="height">
                                    <label htmlFor="height-input">
                                        Height:
                                    </label>
                                    <div className="div-height">
                                            <input type="number" className="input-height" placeholder=" Type your height"/>
                                        <label htmlFor="height-input" style={{marginLeft:"10px",marginTop:"5px"}}>Cm</label>
                                    </div>
                                </div>
                                <div className="weight">
                                    <label for="weight-input">  
                                        Weight:
                                    </label>
                                    <div className="div-height">
                                              <input type="number" className="input-height" placeholder="Type your weight"/>

                                        <label for="weight-input" style={{marginLeft:"10px",marginTop:"5px"}}>Kgs</label>
                                    </div>
                                </div>
                                <div className="age">
                                    <label for="age-input">
                                        Age
                                    </label>
                                    <div>
                                        <Slider style={{ width: "400px" }}
                                            size="small"
                                            defaultValue={50}
                                            aria-label="Small"
                                            valueLabelDisplay="auto"
                                        />
                                        <label for="age-input">years</label>
                                    </div>
                                </div>
                                <div className="activity">
                                    <label for="age-input">
                                        Activity level:
                                    </label>
                                    <div>
                                        <select name="activity-input" style={{width:"400px", padding:"10px",marginBottom:"10px"}} width="400px">
                                            <option value="1.2">Sedentary</option>
                                            <option value="1.375">Lightly Active</option>
                                            <option value="1.55">Moderately Active</option>
                                            <option value="1.725">Very Active</option>
                                            <option value="1.9">Extremely Active</option>
                                        </select>
                                    </div>
                                </div>


                                <Link to="/final"><input type="submit" className="formdata-submit" value="Next" /></Link>



                            </div>
                        </form>
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