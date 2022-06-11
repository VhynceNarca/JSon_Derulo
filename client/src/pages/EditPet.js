import React, {useReducer} from 'react'
import {useNavigate, useLocation } from "react-router-dom";
import './Pet.css';
import logo from '../assets/logo.png';
import Axios from 'axios';


const formReducer = (state, event) => {

    if(event.reset) {
        return {
          name: '',
          breed: '',
          petDesc: '',
        }
      }


    return {
        ...state,
        [event.name]: event.value
    }
}

function EditPet() {
    const location = useLocation()
    const data = location.state.data
    const navigate = useNavigate()

 const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
 });  
 //const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   //setSubmitting(true);

   setTimeout(() => {
     //setSubmitting(false);
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


 const editDB = () => {
    Axios.put(`pets/edit/${data.id}`,{
        name: formData.name,
        category: data.category,
        image: data.image,
        breed: formData.breed,
        description: formData.petDesc
    }).then(() => {
        console.log("success");
        navigate(-1)
    });
 }

  return (
    <>
        <div className="container-pet">
            <div className="center">
                <img src={logo} className="logo-pet" alt=""/>
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
                    value = {formData.name || data.name }
                />

                <label>Breed of Pet:</label> 

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="breed" 
                    placeholder="Breed"
                    onChange ={handleChange} 
                    value = {formData.breed || data.breed}
                />                      

                <label>Pet Description:</label> 
            
                <textarea 
                    type ="text" 
                    className = "form-input"
                    name ="petDesc" 
                    placeholder="Description for the Pet"
                    onChange ={handleChange} 
                    value = {formData.petDesc || data.description}
                />

                    <button onClick={editDB} className = "submitBtn"> Accept Changes</button>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditPet