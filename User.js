import React from "react"
import "./User.css"
import { Link } from "react-router-dom"

export default function User(){
    const [height,setHeight] = React.useState('');
    const [weight,setWeight] = React.useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <>
        <form className="form-personal" onSubmit={handleSubmit}>
            <h2 className="h-form">Personal Information</h2>
            <label className="name-label" htmlFor="name">Name:</label>
            <input className="name-input" type="text" id="name" name="name" value="John" disabled/>
            <label className="surname-label" htmlFor="surname">Surname:</label>
            <input className="surname-input" type="text" id="surname" name="surname" value="Smith" disabled/>
            <label className="birthday-label" htmlFor="birthday">Birthday:</label>
            <input className="birthday-input" type="date" id="birthday" name="birthday" value="1990-01-01" disabled/>
            <label className="gender-label" htmlFor="gender">Gender:</label>
            <select className="gender-select" id="gender" name="gender" disabled>
                <option value="male" selected>Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <label className="height-label" htmlFor="height"  value={height} onChange={(e) => setHeight(e.target.value)}>Height (inches):</label>
            <input className="height-input" type="number" id="height" name="height" value="70" min="0" max="120" disabled/>
            <label className="weight-label" htmlFor="weight" value={weight} onChange={(e) => setWeight(e.target.value)}>Weight (lbs):</label>
            <input className="weight-input" type="number" id="weight" name="weight" value="150" min="0" max="1000" disabled/>
            <input className="submit-button" type="submit" value="Save Changes"/>
            <Link to="/"><button className="logout-button">Log out </button></Link>
            </form>
            
            </>
    )
}
