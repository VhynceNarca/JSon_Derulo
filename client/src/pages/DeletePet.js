import React, {useReducer, useState} from 'react'
import './AddPet.css';
import logo from '../logo.svg';

const formReducer = (state, event) => {

    if(event.reset) {
        return {
          name: '',
          breed: '',
          gender: '',
          age: '',
          petDesc: '',
          healthDesc: '',
          adoptFee: '',
        }
      }


    return {
        ...state,
        [event.name]: event.value
    }
}

function DeletePet() {
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


  return (
    <>
        <div className="container">
            <div className="center">
                <img src={logo} className="logo" alt=""/>
                <h1 className="title">Remove pet from List?</h1>
                <h2 className="subtitle">Doing so will remove pet for adoption</h2>
                
                <button type = "submit" id= "yesBtn" className = "yesBtn"> Yes </button>
                <button type = "submit" id= "noBtn" className = "noBtn"> No </button>
                    
                

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
                
            </div>
        </div>
    </>
  )
}

export default DeletePet