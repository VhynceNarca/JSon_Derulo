import React, {useReducer, useState} from 'react';
import { useFilePicker } from "use-file-picker";
import ReactSelect from "react-select";
import './Pet.css';
import logo from '../assets/logo.png';
import Axios from 'axios';
import PHOTOS from './PhotoSelect';

const formReducer = (state, event) => {

    if(event.reset) {
        return {
          name: '',
          breed: '',
          image: '',
          petDesc: '',
        }
      }


    return {
        ...state,
        [event.name]: event.value
    }
}

function AddCat() {
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
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        await Axios.post(
          "pets/register",
          {
            name: formData.name,
            category: "Cat",
            image: `/assets/PETS/${filesContent[0].name}`,
            breed: formData.breed,
            description: formData.description,
          },
          config
        ).then((res) => {
          console.log("Creating cat: " + res.data);
          console.log("success");
        });
      };

 function selectChange(value){
    console.log(value)
    formData.image = value.value
    //console.log(formData.image)
 }

/*
 const photos = [
    { name:'image' ,value: 'buchoy.jpg', label: 'buchoy', image: PHOTOS.cat1 },
    { name:'image' ,value:'catmon.jpg', label: 'catmon', image: PHOTOS.cat2 },
    { name:'image' ,value: 'ginger.jpg', label: 'ginger', image: PHOTOS.cat3 },
    { name:'image' ,value:'kat.jpg', label: 'kat', image: PHOTOS.cat4 },
    { name:'image' ,value: 'meming.jpg', label: 'meming', image: PHOTOS.cat5 },
    { name:'image' ,value:'muning.jpg', label: 'muning', image: PHOTOS.cat6 },
    { name:'image' ,value: 'puti.png', label: 'puti', image: PHOTOS.cat7 },
    { name:'image' ,value:'sam.png', label: 'sam', image: PHOTOS.cat8 },
    { name:'image' ,value: 'snow white.jpg', label: 'snow white', image: PHOTOS.cat9 },
    { name:'image' ,value:'snowbell.jpg', label: 'snowbell', image: PHOTOS.cat10 },

  ];

 const selectStyle ={
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'red' : 'blue',
        padding: 10,

    }),
 }*/
 const buttonStyle = {
    padding: '0.3em 0.5em',
    margin: '10px 0 0 0',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: '#FFCA7E',
    fontSize: '15px',
    border: '0',
    cursor: 'pointer',
    width: '150px',
    display:'flex', 
    justifyContent:'space-between',
    alignItems:'center',
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
                        value = {formData.name || ''}
                    />

                    <label>Photo of Pet:</label> 
                    
                    <button style={buttonStyle} onClick={() => openFileSelector()}>Select Photo</button>             

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
                    
                    <button type = "submit" id= "submitBtn" className = "submitBtn"> Put Up for Adoption</button>
                    
                </form>

                </div>
            </div>
        </div>
    </>
  )
}

export default AddCat