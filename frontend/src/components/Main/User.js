import React from "react"
import "./User.css"
import axios from "axios";

export default function User(){
    const [userData, setUserData] = React.useState({
        name: "",
        surname: "",
        username:"",
        userProfile:{
            height:"",
            weight:"",
        }
       
      });
   
    React.useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser !== null) {
          const userObj = JSON.parse(storedUser);
          setUserData(userObj);
        }
        else{
            setUserData({})
        }
      }, []);

      

    const handleLogout = () => {

        setTimeout(()=> {
            if(localStorage.getItem('accessToken') || localStorage.getItem('user')){
                localStorage.removeItem('accessToken');
                localStorage.removeItem('user');
            }
        },1000)
        
         window.location.href = "/";
    }

    const handleHeight = (e) =>{
        e.preventDefault();

        setUserData((prevData)=> ({
             ...prevData,
            userProfile:{
                ...prevData.userProfile,
                height: e.target.value
            }
        }))
    }
    const handleWeight = (e) =>{
        e.preventDefault();

        setUserData((prevData)=> ({
             ...prevData,
            userProfile:{
                ...prevData.userProfile,
                weight: e.target.value
            }
        }))
    }

    function handleSubmit(event){
       event.preventDefault() 
      const changedHeight = JSON.parse(localStorage.getItem("user")).userProfile.height;
      const changedWeight = JSON.parse(localStorage.getItem("user")).userProfile.weight;
      const parseUsername = JSON.parse(localStorage.getItem("user")).username
      const data = {
        username :parseUsername,
        height : userData.userProfile.height,
        weight : userData.userProfile.weight
      }

        if( userData.userProfile.height !== changedHeight || userData.userProfile.weight !== changedWeight){
            axios.put(`http://localhost:8080/auth/profile/${parseUsername}`,data)
            .then(response => console.log(response))
            .catch(error=> console.error(error));
        }
    }
    return(
        <>
        <form className="form-personal" onSubmit={handleSubmit}>
            <h2 className="h-form">Personal Information</h2>
            <label className="name-label" htmlFor="name">Name:</label>
            <input className="name-input" type="text" id="name" name="name"  value={userData.name}  disabled/>
            <label className="surname-label" htmlFor="surname">Surname:</label>
            <input className="surname-input" type="text" id="surname" name="surname" value={userData.surname}  disabled/>
            <label className="gender-label" htmlFor="gender">Gender:</label>
            <select className="gender-select" id="gender" name="gender" value={userData.gender}  disabled>
                <option value="Male" >Male</option>
                <option value="Female">Female</option>
                <option value="other">Other</option>
            </select>
            <label className="height-label" htmlFor="height">Height (inches):</label>
            <input className="height-input" type="number" id="height" name="height" value={userData.userProfile.height} onChange={handleHeight} min="50" max="300"/>
            <label className="weight-label" htmlFor="weight">Weight (lbs):</label>
            <input className="weight-input" type="number" id="weight" name="weight" value={userData.userProfile.weight} onChange={handleWeight} min="0" max="400" />
            <input className="submit-button" type="submit" value="Save Changes"/>
            <button className="logout-button" onClick={handleLogout}>Log out </button>
            </form>
            
            </>
    )
}
