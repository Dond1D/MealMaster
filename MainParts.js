import React from "react";
import "./MainParts.css";
import { FaCalculator } from 'react-icons/fa';
// import Slider from '@material-ui/core/Slider';


export default function MainParts(){
    const style ={
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"  stroke="%23AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22px" height="22px"><path d="M22 22l-6-6"/><circle cx="10" cy="10" r="8"/></svg>')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '15px center',
        paddingLeft: '55px',
    }
    const [visibility,setVisibility] = React.useState(false);
    const [calculate,setCalculate] = React.useState(false);
    function handleClick(event){
        event.preventDefault();
        setVisibility(!visibility);
        
    }
    function handleCalculator(){
        setCalculate(!calculate)
    }
    
    return (
        <div className="full-height">
            <form className="search-form">
                <input type="search" placeholder="Search for meals" style={style} className="search-bar"/>
            </form>
            <div className="main-calc">
                <div onClick={handleCalculator} style={{cursor:"pointer"}}>Ready to give it a shot? Let us know your diet.
                <FaCalculator />
                </div>
              
                {calculate && <div className="content-calc">
                <form className="form-calc">
                    <div>
                        <div className="goal-radio">  
                        <label for="goal" >Calculate your calorie intake:</label><br/>
                        <label>I want to:</label><br/>
                        <label for="goal">
                            <input type="radio" name="goal" value="L" checked/>
                            Lose Weight
                        </label>
                        <label for="goal">
                            <input type="radio" name="goal"  value="M" checked/>
                            Maintain
                        </label>
                        <label for="goal">
                            <input type="radio" name="goal" value="G" checked/>
                            Gain Weight
                        </label>
                        </div>
                        <div className="gender-radio">
                            <label for="gender">I am:</label><br />
                            <label for="gender"><input type="radio" name="gender" value="M" />
                            Male</label>
                            <label for="gender"><input type="radio" name="gender" value="F" />
                            Female</label>
                        </div>
                        <div className="height">
                            <label for="height-input">
                                Height
                            </label>
                            <div>
                                {/* <Slider 
                                style={{width:"400px"}}
                                size="medium" 
                                defaultValue={120} 
                                aria-label="Default" 
                                valueLabelDisplay="500"/> */}
                                <input type="number" />
                                <label for="height-input">Cm</label>
                            </div>
                        </div>
                        <div className="weight">
                            <label for="weight-input">
                                Weight
                            </label>
                            <div>
                            {/* <Slider  style={{width:"400px"}}
                            size="small"
                            defaultValue={50}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            /> */}
                            
                                <label for="weight-input">Kgs</label>
                            </div>
                        </div>
                        <div className="age">
                            <label for="age-input">
                                Age
                            </label>
                            <div>
                            {/* <Slider  style={{width:"400px"}}
                            size="small"
                            defaultValue={50}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            /> */}
                                <label for="age-input">years</label>
                            </div>
                        </div>
                        <div className="activity">
                            <label for="age-input">
                                Activity level:
                            </label>
                            <div>
                               <select name="activity-input" width="400px">
                                 <option value="1.2">Sedentary</option>
                                 <option value="1.375">Lightly Active</option>
                                 <option value="1.55">Moderately Active</option>
                                 <option value="1.725">Very Active</option>
                                 <option value="1.9">Extremely Active</option>
                               </select>
                            </div>
                        </div>
                        <input type="submit" value="Calculate" onClick={handleClick}/>
                        {visibility && <div>
                        <table>
                            <thead>
                             <th>Suggested Calories</th>
                             <th>Carbs</th>
                             <th>Proteins</th>
                             <th>Fat</th> 
                            </thead>
                            <tr>
                                <td>2500</td>
                                <td>14-150gr</td>
                                <td>200-350gr</td>
                                <td>40-120gr</td>
                            </tr>
                        </table>
                        <input type="submit"  value="Generate"/>
                        </div>}
                        
                    </div>
                </form>
                </div>}
            </div>
        </div>
    );
}