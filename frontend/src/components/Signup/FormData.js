import React from "react"
import Logo from "./loo-removebg-preview.png"
import "./FormData.css"
import axios from "axios"


export default function Form(props) {

    const [secondForm,setSecondForm] = React.useState({
        username:localStorage.getItem('user'),
        weightgoal:"",
        height:"",
        weight:"",
        age:"",
        activity:""
    })
   
    function handleChange(event){
        const {name,value} = event.target
        setSecondForm(prevState => {
            return {...prevState,[name]:value}
        })
    }

    const handleForm =(e) =>{
        e.preventDefault();

        if(secondForm.height === " " || secondForm.weight === " "){
            alert('fill the data');
        }

        axios.post("http://localhost:8080/auth/profile",secondForm)
        .then((response) => {
            console.log(response.data);
              window.location.href = "/final"
        })
        .catch((error)=>console.error(error))
    }

    console.log(secondForm.weightgoal)

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
                        <form className="form-calc" onSubmit={handleForm}>
                            <div>
                                <label className="your-profile">Your Profile:</label>
                                <div className="radio-weight" style={{ display: "flex", width: "600px" }}>
                                <label className="iWantTo">I want to:</label>
                                <div className="radio-container">
                                    <input
                                    type="radio"
                                    id="lose-weight"
                                    name="weightgoal"
                                    value="lose-weight"
                                    onChange={handleChange}
                                    />
                                    <label htmlFor="lose-weight">Lose Weight</label>
                                </div>
                                <div className="radio-container">
                                    <input
                                    type="radio"
                                    id="maintain"
                                    name="weightgoal"
                                    value="maintain"
                                    onChange={handleChange}
                                    />
                                    <label htmlFor="maintain">Maintain</label>
                                </div>
                                <div className="radio-container">
                                    <input
                                    type="radio"
                                    id="gain-weight"
                                    name="weightgoal"
                                    value="gain-weight"
                                    onChange={handleChange}
                                    />
                                    <label htmlFor="gain-weight">Gain Weight</label>
                                </div>
                                </div>
                               
                                <div className="height">
                                    <label htmlFor="height-input">Height:</label>
                                    <div className="div-height">
                                            <input type="number" name="height" className="input-height" value={secondForm.height} onChange={handleChange} placeholder=" Type your height"/>
                                        <label htmlFor="height-input" style={{marginLeft:"10px",marginTop:"5px"}}>Cm</label>
                                    </div>
                                </div>
                                <div className="weight">
                                    <label htmlFor="weight-input">  
                                        Weight:
                                    </label>
                                    <div className="div-height">
                                              <input type="number" name="weight" className="input-height" value={secondForm.weight} onChange={handleChange}   placeholder="Type your weight"/>
                                        <label htmlFor="weight-input" style={{marginLeft:"10px",marginTop:"5px"}}>Kgs</label>
                                    </div>
                                </div>
                                <div className="age">
                                    <label htmlFor="age-input">Age</label>
                                    <div>
                                         <input type="number" name="age" className="input-height" value={secondForm.age} onChange={handleChange} placeholder="Type your age"/>
                                        <label htmlFor="age-input">years</label>
                                    </div>
                                </div>
                                <div className="activity">
                                    <label htmlFor="activity-input">Activity level:</label>
                                    <div>
                                        <select name="activity"
                                         style={{width:"400px", padding:"10px",marginBottom:"10px"}} 
                                         value={secondForm.activity} 
                                          onChange={handleChange} width="400px">
                                            <option value="1.2" >Sedentary</option>
                                            <option value="1.375" >Lightly Active</option>
                                            <option value="1.55" >Moderately Active</option>
                                            <option value="1.725" >Very Active</option>
                                            <option value="1.9" >Extremely Active</option>
                                        </select>
                                    </div>
                                </div>
                                <input type="submit" className="formdata-submit" value="Next" />
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