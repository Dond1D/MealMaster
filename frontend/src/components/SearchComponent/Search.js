import React from "react"
import "./Search.css"
import {AiOutlineSearch} from "react-icons/ai"

export default function Search(){
      const [searchInputTxt, setSearchInputTxt] = React.useState('');
    const [mealList, setMealList] = React.useState([]);
    const [notFound, setNotFound] = React.useState(false);
    const [showRecipe, setShowRecipe] = React.useState(false);
    const [selectedMeal, setSelectedMeal] = React.useState({});

    const handleInputChange = (e) => {
    setSearchInputTxt(e.target.value.trim());
    }

    const handleSearchClick = () => {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
    if (data.meals) {
    setMealList(data.meals);
    setNotFound(false);
    } else {
    setMealList([]);
    setNotFound(true);
    }
    });
    }

    const handleGetRecipeClick = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(response => response.json())
    .then(data => {
    setSelectedMeal(data.meals[0]);
    setShowRecipe(true);
    });
    }

    const handleCloseRecipeClick = () => {
    setShowRecipe(false);
    }
    return(
        
      <div className="container--search">
      <div className="meal-wrapper">
        <div className="meal-search">
          <h2 className="title-search">Find Meals For Your Ingredients</h2>
          <blockquote>
            Real food doesn't have ingredients, real food is ingredients.
            <br />
            <cite>- Jamie Oliver</cite>
          </blockquote>
          </div>
          <div className="App">
        <div className="meal-search-box">
        <input type="text" className="search-control" placeholder="Enter an ingredient" id="search-input" onChange={handleInputChange} />
        <button type="submit" className="search-btn btn" id="search-btn" onClick={handleSearchClick}>
        <div style={{marginTop:"5px",marginRight:"5px"}}><AiOutlineSearch />
          </div>
        
        </button>
        </div>
        </div>

<div className="meal-result">
    <h2 className="title-meal-result">Your Search Results:</h2>
    <div id="meal">
      {notFound ? <p>Sorry, we didn't find any meal!</p> :
        mealList.map(meal => (
          <div className="meal-item" key={meal.idMeal}>
            <div className="meal-img">
              <img src={meal.strMealThumb} alt="food" />
            </div>
            <div className="meal-name">
              <h3>{meal.strMeal}</h3>
              <a href="#" className="recipe-btn" onClick={() => handleGetRecipeClick(meal.idMeal)}>Get Recipe</a>
            </div>
          </div>
        ))
      }
    </div>
  </div>

  {showRecipe && (
    <div className="meal-details">
      <button type="button" className="btn recipe-close-btn" id="recipe-close-btn" onClick={handleCloseRecipeClick}>
        <i className="fas fa-times"></i>
      </button>
      <div className="meal-details-content">
        <h2 className="recipe-title">{selectedMeal.strMeal}</h2>
        <p className="recipe-category">{selectedMeal.strCategory}</p>
        <div className="recipe-instruct">
          <h3>Instructions:</h3>
          <p>{selectedMeal.strInstructions}</p>
        </div>
        <div className="recipe-meal-img">
          <img src={selectedMeal.strMealThumb} alt="" />
        </div>
        <div className="recipe-link">
          <a href={selectedMeal.strYoutube} target="_blank" rel="noreferrer">Watch Video</a>
        </div>
      </div>
    </div>
  )}
  </div>
</div>
    )
}
