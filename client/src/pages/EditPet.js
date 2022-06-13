import React, {useReducer,useState} from 'react'
import {useNavigate, useLocation } from "react-router-dom";
import { useFilePicker } from 'use-file-picker';
import ReactSelect from "react-select";
import './AddPet.css';
import logo from '../assets/logo.png';
import Axios from 'axios';
import PHOTOS from './PhotoSelect';


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
/*
 const photos = [
    { name:'image' ,value: 'ada.jpg', label: 'Ada', image: PHOTOS.dog1 },
    { name:'image' ,value:'ali.jpg', label: 'Ali', image: PHOTOS.dog2 },
    { name:'image' ,value: 'arkon.jpg', label: 'Arkon', image: PHOTOS.dog3 },
    { name:'image' ,value:'bantay.jpg', label: 'Bantay', image: PHOTOS.dog4 },
    { name:'image' ,value: 'bardot.jpg', label: 'Bardot', image: PHOTOS.dog5 },
    { name:'image' ,value:'big.jpg', label: 'Big', image: PHOTOS.dog6 },
    { name:'image' ,value: 'boomer.jpg', label: 'Boomer', image: PHOTOS.dog7 },
    { name:'image' ,value:'ero.jpg', label: 'Ero', image: PHOTOS.dog8 },
    { name:'image' ,value: 'jackie.jpg', label: 'Jackie', image: PHOTOS.dog9 },
    { name:'image' ,value:'marco.jpg', label: 'Marco', image: PHOTOS.dog11 },
    { name:'image' ,value: 'mazda.jpg', label: 'Mazda', image: PHOTOS.dog12 },
    { name:'image' ,value:'pacman.jpg', label: 'Pacman', image: PHOTOS.dog13 },
    { name:'image' ,value: 'patotoy.jpg', label: 'Patotoy', image: PHOTOS.dog14 },
    { name:'image' ,value:'rica.jpg', label: 'Rica', image: PHOTOS.dog15 },
    { name:'image' ,value: 'rico.jpg', label: 'Rico', image: PHOTOS.dog16 },
    { name:'image' ,value:'rosie.jpg', label: 'Rosie', image: PHOTOS.dog17 },
    { name:'image' ,value: 'white.jpg', label: 'White', image: PHOTOS.dog18 },
    { name:'image' ,value:'kabang.jpg', label: 'Kabang', image: PHOTOS.dog10 },
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
 }
*/

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
                    
                    <label>Pet Age n' Gender:</label> 

                    <select name="age" onChange={handleChange} value = {formData.age || 'Young'}>
                        <option value="Young">Young</option>
                        <option value="Adult">Adult</option>
                    </select>



                    <select name="gender" onChange={handleChange} value = {formData.gender || 'Male'}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
              
                    <label>Pet Description:</label> 

                    <textarea 
                        type ="text" 
                        className = "form-input"
                        name ="petDesc" 
                        placeholder="Description for the Pet"
                        onChange ={handleChange} 
                        value = {formData.petDesc || ''}
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

                    
                    
*/ 