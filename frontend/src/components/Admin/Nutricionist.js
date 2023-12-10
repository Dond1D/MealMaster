import React from "react"
import axios from "axios"
import "./Nutritionist.css"

export default function Nutricionist(){
    const [meal, setMeal] = React.useState({
        name: '',
        calories: 0,
        protein: 0,
        fat: 0,
        description: '',
        fiber: 0,
        sugar: 0,
        carbohidrates:0,
        meatFree:false,
        diaryFree:false,
        eggFree:false,
        fishFree:false,
        soyFree:false,
        glutenFree:false,
        GroundNutFree:false,

      });
      const [image,setImage] = React.useState(null);
      const [ingredient,setIngredients] = React.useState([{
        name: "",
        quantity : "",
      }])
    
      function handleImage(e) {
        const image = e.target.files[0];
        setImage(image);
      }
    
      const handleChange = (e,index) => {
        const { name, value} = e.target;     

        if(name === "ingredientName" || name === "ingredientQuantity"){
         const newIngredients = [...ingredient];
         newIngredients[index] = {
          ...newIngredients[index],[name === "ingredientName" ? "name" : "quantity"] : value,
         }
              setIngredients(newIngredients);
        }
        else if(e.target.type == 'checkbox'){
          setMeal({ ...meal, [name]: e.target.checked });
        }else{
          setMeal({ ...meal, [name]: value });
        }
                
      }
      
      function addIngredient(){
        setIngredients([...ingredient,{name:"",quantity:""}]);
      };

      function removeIngredient(index){
          const newIngredients = [...ingredient];
          newIngredients.splice(index,1);
          setIngredients(newIngredients)
        
      }

     
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const ingredients = JSON.stringify(ingredient.map(({ name, quantity }) => ({ name, quantity })));
        const formData = new FormData();
        formData.append("meal", new Blob([JSON.stringify(meal)], { type: "application/json" }));
        formData.append("image",image);
        formData.append("ingredients", new Blob([ingredients], { type: "application/json" }));
    
        axios.post("http://localhost:8080/auth/ingredients", formData)
        .then(response => console.log("Response from Spring Boot:", response))
        .catch(error => {
          console.error("Error:", error);
          // Handle errors.
        });

        window.location.reload();

        console.log(meal)
      };
    
      return (
        <div>
          <header>
            <div style={{display:"flex",justifyContent:"center"}}>Meal Master Nutritionist</div>
          </header>
          <form onSubmit={handleSubmit} method="post" action="post" encType="multipart/form-data">
            <input type="text" className="nutritionist-input" name="name" placeholder="Enter your meal name" onChange={handleChange}  />
            <input type="text"  className="nutritionist-input" name="description" placeholder="Enter your meal description" onChange={handleChange}/>
            <input type="number" className="nutritionist-input" name="protein" placeholder="Enter your meals protein" onChange={handleChange}/>
            <input type="number" className="nutritionist-input" name="fat" placeholder="Enter your meal fat" onChange={handleChange}  />
            <input type="number" className="nutritionist-input" name="calories" placeholder="Enter your meal calories" onChange={handleChange}  />
            <input type="file" accept="image/*" placeholder="Enter your meal image" onChange={handleImage} />
            <label htmlFor="fiber">Fiber:</label>
            <input type="number"  className="nutritionist-input"name="fiber" placeholder="Enter fiber quantity" onChange={handleChange} />
            <label htmlFor="sugar">Sugar:</label>
            <input type="number"  className="nutritionist-input"name="sugar" placeholder="Enter sugar quantity" onChange={handleChange} />
            <label htmlFor="sugar">Carbohidrates:</label>
            <input type="number" className="nutritionist-input" name="sugar" placeholder="Enter carbohidrates quantity" onChange={handleChange} />
        <div className="div--checkbox">
          <label htmlFor="meatFree">Meat Free:</label>
          <div className="div--input">
          <input className="meatCheck" type="checkbox" name="meatFree" onChange={handleChange} /></div>
          <label htmlFor="diaryFree">Diary Free:</label>
          <div className="div--input">
          <input className="meatCheck" type="checkbox" name="dairytFree" onChange={handleChange} /></div>
          <label htmlFor="eggFree">Egg Free:</label>
          <div className="div--input">
          <input className="meatCheck" type="checkbox" name="eggFree" onChange={handleChange} /></div>
          <label htmlFor="fishFree">Fish Free:</label>
          <div className="div--input">
          <input  className="meatCheck" type="checkbox" name="fishFree" onChange={handleChange} /></div>
          <label htmlFor="soyFree">Soy Free:</label>
          <div className="div--input">
          <input className="meatCheck" type="checkbox" name="soyFree" onChange={handleChange} /></div>
          <label htmlFor="glutenFree">Gluten Free:</label>
          <div className="div--input">
          <input  className="meatCheck" type="checkbox" name="glutenFree" onChange={handleChange} /></div>
          <label htmlFor="groundNutFree">GroundNut Free:</label>
          <div className="div--input">
          <input  className="meatCheck"type="checkbox" name="groundNutFree" onChange={handleChange} /></div>
          </div>
         
          <div className="ingredients-container">
          {ingredient.map((item, index) => (
              <div key={index}>
              <label>Ingredient:</label>
              <input
                type="text" className="nutritionist-input"
                name="ingredientName"
                placeholder="Ingredient Name"
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="text" className="nutritionist-input"
                name="ingredientQuantity"
                placeholder="Quantity"
                onChange={(e) => handleChange(e, index)}
              />
              {index > 0 && (
                <button type="button" onClick={() => removeIngredient(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          {/*  */}
          <button type="button" onClick={addIngredient}>
            Add Ingredient
          </button>
        </div>
                <input type="submit" value="Insert"/>
          </form>
    
          <div>Hello from nutricionist</div>
        </div>
      );
    
}