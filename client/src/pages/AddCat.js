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
 const [formData, setFormData] = useReducer(formReducer, {
    name: '',
    category: '',
    image: '',                 //`../assets/${filesContent[0].name}`,
    breed: '',
    description: ''
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

const [
    openFileSelector,
    { filesContent, loading, errors, plainFiles }
  ] = useFilePicker({
    multiple: false,
    readAs: "DataURL", // availible formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
    // accept: '.ics,.pdf',
    accept: [".jpg", ".png"],
    //limitFilesConfig: { min: 2, max: 3 }
    // minFileSize: 1, // in megabytes
    // maxFileSize: 1,
    // maxImageHeight: 1024, // in pixels
    // minImageHeight: 1024,
    // maxImageWidth: 768,
    // minImageWidth: 768
    // readFilesContent: false, // ignores file content
  });




 const addtoDB = () => {
    console.log(formData.image);
    //console.log(filesContent[0].content);
    //openFileSelector();
    Axios.post('pets/register',{
        name: formData.name,
        category: "Cat",
        image: `../assets/PETS/${formData.image}`,                 //`../assets/${filesContent[0].name}`,
        breed: formData.breed,
        description: formData.petDesc
    }).then(() => {
        console.log("success");
    });
 }

 function selectChange(value){
    //console.log(value.value)
    formData.image = value.value
    //console.log(formData.image)
 }


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
                    

                    <div className="photo-select">
                        <ReactSelect
                            styles = {selectStyle}
                            placeholder = "Photo of Cat"                                                                           
                            onChange={selectChange}                                                
                            options={photos}
                            isSearchable = {false}
                            formatOptionLabel={photo => (
                            <div className="photo-option">
                                <img className="selectIMGS" src={photo.image} alt="Cat"/>                                                             
                            </div>
                            )}
                            
                        />
                    </div>
            
      

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