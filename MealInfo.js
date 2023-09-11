import React, { useState } from 'react';
import "./MealInfo.css"


const MealInfo = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    // <div className="meal-info" onMouseEnter={toggleInfo} onMouseLeave={toggleInfo}>
    //   <div className="meal-image">
    //     <img src={props.image} alt={props.name} style={{width:"400px",height:"400px"}}/>
    //   </div>
    //   
    //    
    //    
    //     {showInfo && <div className="flip-card-back">{props.info}</div>}
    //   </div>
    // </div>
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={props.image} alt="Avatar" style={{width:"300px",height:"300px"}} />
      <div className="meal-details">
        <h2 className="meal-name">{props.name}</h2>
        <h3 className="nutritionist-name">by {props.nutritionist}</h3>
        <div className="meal-rating">{props.rating}</div>
        </div>
      
    </div>
    <div className="flip-card-back">
      <div>{props.info}</div>
    </div>
  </div>
</div>
  );
};

export default MealInfo;
