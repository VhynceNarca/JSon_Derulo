import React, {useState} from 'react'
import {useNavigate, useLocation } from "react-router-dom";
import { useFilePicker } from 'use-file-picker';
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

    const [formData, setFormData] = useState({
        name: "",
        category: "", //`../assets/${filesContent[0].name}`,
        breed: "",
        description: "",
      });
    
      const [openFileSelector, { filesContent, loading, errors, plainFiles }] =
        useFilePicker({
          multiple: false,
          readAs: "DataURL", // availible formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
          accept: [".jpg", ".png"],
        });
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const token = localStorage.getItem("token");
    
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
    
      const bodyParameters = {
        key: "value",
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        Axios.put(`pets/edit/${data.id}`,{
            name: formData.name,
            category: data.category,
            image: `/assets/PETS/${filesContent[0].name}`,
            breed: formData.breed,
            description: formData.petDesc
        }).then(() => {
            console.log("success");
            //navigate('/home');
        });
      };

 function selectChange(value){
    //console.log(value.value)
    formData.image = value.value
    //console.log(formData.image)
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

                <label>Photo of Pet:</label> 
                    
                <button onClick={() => openFileSelector()}>Select Photo</button>


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
                                      
                    
                    <button className = "submitBtn"> Accept Changes</button>
                    
                </form>

            
                </div>
            </div>
        </div>
    </>
  )
}

export default EditPet