import React, {useReducer, useState} from 'react'
import './AddPet.css';
import logo from '../assets/logo.png';
import Axios from 'axios';

const formReducer = (state, event) => {

    if(event.reset) {
        return {
          name: '',
          breed: '',
          //gender: '',
          //age: '',
          petDesc: '',
          //healthDesc: '',
          //adoptFee: '',
        }
      }


    return {
        ...state,
        [event.name]: event.value
    }
}

function AddCat() {
 const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
 });  
 const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
     setFormData({
        reset: true
      })
   }, 3000)
 }

 const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
}

 const addtoDB = () => {
    Axios.post('pets/register',{
        name: formData.name,
        category: "Cat",
        image: "",
        breed: formData.breed,
        description: formData.petDesc
    }).then(() => {
        console.log("success");
    });
 }


  return (
    <>
        <div className="container">
            <div className="center">
                <img src={logo} className="logo" alt=""/>
                <h1 className="title">Paw Society</h1>
                <h2 className="subtitle">Adoption Form</h2>
                <div className = "form-box">        
                <form onSubmit={handleSubmit}>
                    
                    

                    <label className="labels" >Name of Pet:</label>

                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="name" 
                        placeholder="Name"
                        onChange ={handleChange} 
                        value = {formData.name || ''}
                    />

                    <label>Breed of Pet:</label> 

                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="breed" 
                        placeholder="Breed"
                        onChange ={handleChange} 
                        value = {formData.breed || ''}
                    />                      
              
                    <label>Pet Description:</label> 

                    <textarea 
                        type ="text" 
                        className = "form-input"
                        name ="petDesc" 
                        placeholder="Description for the Pet"
                        onChange ={handleChange} 
                        value = {formData.petDesc || ''}
                    />                      
                    
                    <button onClick={addtoDB} type = "submit" id= "submitBtn" className = "submitBtn"> Put Up for Adoption</button>
                    
                </form>

                </div>
            </div>
        </div>
    </>
  )
}

export default AddCat

/*

{submitting &&
                    <div>
                        You are submitting the following:
                        <ul>
                            {Object.entries(formData).map(([name, value]) => (
                                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                            ))}
                        </ul>
                    </div>
                }
<label>Pet Age n' Gender:</label> 

                    <select name="age" onChange={handleChange} value = {formData.age || 'Young'}>
                        <option value="Young">Young</option>
                        <option value="Adult">Adult</option>
                    </select>



                    <select name="gender" onChange={handleChange} value = {formData.gender || 'Male'}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <label>Pet Fee:</label>

                    <input 
                        type ="number" 
                        min = "0"
                        className = "form-input"
                        name ="adoptFee" 
                        placeholder="$50"
                        onChange ={handleChange} 
                        value = {formData.adoptFee|| ''}
                    />

                                        <label>Pet Health:</label> 

                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="healthDesc" 
                        placeholder="Vaccinations up to date, spayed / neutered."
                        onChange ={handleChange} 
                        value = {formData.healthDesc|| ''}
                    /> 
*/