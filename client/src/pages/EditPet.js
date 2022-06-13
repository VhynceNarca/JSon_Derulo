import React, {useReducer} from 'react'
import {useNavigate, useLocation } from "react-router-dom";
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
        image: `../assets/PETS/${formData.image}`,
        breed: formData.breed,
        description: formData.petDesc
    }).then(() => {
        console.log("success");
        navigate('/home')
    });
 }

 function selectChange(value){
    //console.log(value.value)
    formData.image = value.value
    //console.log(formData.image)
 }

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
                    

                    <div className="photo-select">
                        <ReactSelect                    
                            style={selectStyle}                                               
                            placeholder = "Photo of Pet"
                            onChange={selectChange}                                                
                            options={photos}
                            isSearchable = {false}
                            formatOptionLabel={photo => (
                            <div className="photo-option">
                                <img className="selectIMGS" src={photo.image} alt="Pet"/>
                                
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
