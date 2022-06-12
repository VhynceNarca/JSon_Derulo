import React from 'react'
import './DeletePet.css';
import logo from '../assets/logo.png';
import {useNavigate, useLocation } from "react-router-dom";
import Axios from 'axios';


function DeletePet() {
  const location = useLocation()
  const data = location.state.data
  const navigate = useNavigate()

  const deletefromDb = () => {
    Axios.delete(`pets/delete/${data.id}`).then(() => {
        console.log("success");
        navigate('/home')
    });
 }

 const gohome = () => {

    navigate('/home')
}

  return (
    <>
        <div className="container">
            <div className="center">
                <img src={logo} className="logo" alt=""/>
                <h1 className="title">Remove pet from List?</h1>
                <h2 className="subtitle">Doing so will remove pet for adoption</h2>
                
                <div className="buttons">
                  <button  onClick={deletefromDb} className = "yesBtn"> Yes </button>
                  <button  onClick={gohome} className = "noBtn"> No </button>
                </div>   
                
            </div>
        </div>
    </>
  )
}

export default DeletePet