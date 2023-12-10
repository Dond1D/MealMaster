import React, { useState } from 'react';
import "./MealInfo.css"


const MealInfo = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={`data:image/png;base64,${props.image}`} alt="Avatar" style={{width:"300px",height:"300px"}} />
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
