import React from 'react'
import './Pet.css';
import {useNavigate, useLocation } from "react-router-dom";
import Axios from 'axios';


function DeletePet() {
  const location = useLocation()
  const data = location.state.data
  const navigate = useNavigate()

  const deletefromDb = () => {
    Axios.delete(`pets/delete/${data.id}`).then(() => {
        console.log("success");
        navigate(-1)
    });
 }

 const goBack = () => {
    navigate(-1)
}

  return (
    <>
        <div className="container-delete">
            <div className="center">  
                <h2 className="subtitle">Are you sure you want to remove a pet from adoption List?</h2>
                
                <div className="buttons">
                  <button  onClick={deletefromDb} className = "yesBtn"> Yes </button>
                  <button  onClick={goBack} className = "noBtn"> No </button>
                </div>   
                
            </div>
        </div>
    </>
  )
}

export default DeletePet