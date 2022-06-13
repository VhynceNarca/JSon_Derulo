import React, { useEffect, useReducer, useState } from "react";
import { useFilePicker } from "use-file-picker";
import "./Pet.css";
import logo from "../assets/logo.png";
import Axios from "axios";

function AddDog() {
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
        category: "Dog",
        image: `/assets/PETS/${filesContent[0].name}`,
        breed: formData.breed,
        description: formData.description,
      },
      config
    ).then((res) => {
      console.log("Creating dog: " + res.data);
      console.log("success");
    });
  };

  function selectChange(value) {
  const selectStyle = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "red" : "blue",
      padding: 10,
    }),
  };
}

  const buttonStyle = {
    padding: '0.3em 0.5em',
    margin: '10px 0 0 0',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: '#FFCA7E',
    fontSize: '15px',
    border: '0',
    cursor: 'pointer',
    width: '120px',
    display:'flex', 
    justifyContent:'space-between',
    alignItems:'center',
  }

  return (
    <>
      <div className="container-pet">
        <div className="center">
          <img src={logo} className="logo-pet" alt="" />
          <h1 className="title">Paw Society</h1>
          <h2 className="subtitle">Adoption Form</h2>
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <label className="labels">Name of Pet:</label>

              <input
                type="text"
                className="form-input"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />

              <label>Photo of Pet:</label>

              <button style={buttonStyle} onClick={() => openFileSelector()}>Select Photo</button>

              <label>Breed of Pet:</label>

              <input
                type="text"
                className="form-input"
                name="breed"
                placeholder="Breed"
                value={formData.breed}
                onChange={handleChange}
              />

              <label>Pet Description:</label>

              <textarea
                type="text"
                className="form-input"
                name="description"
                placeholder="Description for the Pet"
                value={formData.description}
                onChange={handleChange}
              />

              <button type="submit" id="submitBtn" className="submitBtn">
                {" "}
                Put Up for Adoption
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddDog