import React, { useEffect, useReducer, useState } from "react";
import { useFilePicker } from "use-file-picker";
import ReactSelect from "react-select";
import "./AddPet.css";
import logo from "../assets/logo.png";
import Axios from "axios";
import PHOTOS from "./PhotoSelect";

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
        image: `/PETS/${filesContent[0].name}`,
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
    //console.log(value.value)
    //setImage(value.value);
    //console.log(formData.image)
  }

  //   const photos = [
  //     { name: "image", value: "ada.jpg", label: "Ada", image: PHOTOS.dog1 },
  //     { name: "image", value: "ali.jpg", label: "Ali", image: PHOTOS.dog2 },
  //     { name: "image", value: "arkon.jpg", label: "Arkon", image: PHOTOS.dog3 },
  //     { name: "image", value: "bantay.jpg", label: "Bantay", image: PHOTOS.dog4 },
  //     { name: "image", value: "bardot.jpg", label: "Bardot", image: PHOTOS.dog5 },
  //     { name: "image", value: "big.jpg", label: "Big", image: PHOTOS.dog6 },
  //     { name: "image", value: "boomer.jpg", label: "Boomer", image: PHOTOS.dog7 },
  //     { name: "image", value: "ero.jpg", label: "Ero", image: PHOTOS.dog8 },
  //     { name: "image", value: "jackie.jpg", label: "Jackie", image: PHOTOS.dog9 },
  //     { name: "image", value: "marco.jpg", label: "Marco", image: PHOTOS.dog11 },
  //     { name: "image", value: "mazda.jpg", label: "Mazda", image: PHOTOS.dog12 },
  //     {
  //       name: "image",
  //       value: "pacman.jpg",
  //       label: "Pacman",
  //       image: PHOTOS.dog13,
  //     },
  //     {
  //       name: "image",
  //       value: "patotoy.jpg",
  //       label: "Patotoy",
  //       image: PHOTOS.dog14,
  //     },
  //     { name: "image", value: "rica.jpg", label: "Rica", image: PHOTOS.dog15 },
  //     { name: "image", value: "rico.jpg", label: "Rico", image: PHOTOS.dog16 },
  //     { name: "image", value: "rosie.jpg", label: "Rosie", image: PHOTOS.dog17 },
  //     { name: "image", value: "white.jpg", label: "White", image: PHOTOS.dog18 },
  //     {
  //       name: "image",
  //       value: "kabang.jpg",
  //       label: "Kabang",
  //       image: PHOTOS.dog10,
  //     },
  //   ];

  const selectStyle = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "red" : "blue",
      padding: 10,
    }),
  };

  return (
    <>
      <div className="container">
        <div className="center">
          <img src={logo} className="logo" alt="" />
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

              <button onClick={() => openFileSelector()}>Select Photo</button>

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

export default AddDog;

/*

                    <div className="photo-select">
                        <ReactSelect
                            style={selectStyle}                                               
                            placeholder = "Photo of Dog"
                            onChange={selectChange}                                                
                            options={photos}
                            isSearchable = {false}
                            formatOptionLabel={photo => (
                            <div className="photo-option">
                                <img className="selectIMGS" src={photo.image} alt="Dog"/>
                                {/*<span>{photo.label}</span>}
                                
                                </div>
                                )}
                                
                            />
                        </div>
                    <div className="photo-options">
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>
                        <img src={dog1} className="selectIMGS" alt="DOG1"/>

                    </div>
<ReactSelect
                        value = {formData.photo || ''}
                        options={photos}
                        formatOptionLabel={photo => (''
                          //<div className="photo-option">
                            //{/*<img className="selectIMGS" src={photo.image} alt="country-image"/>}
                            //{/*<span>{photo.label}</span>}
                          //</div>
                          )}
                          />
<button onClick={() => openFileSelector()}> Select Photo </button>

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
<label>Pet Age n' Gender:</label> 

                    <select name="age" onChange={handleChange} value = {formData.age || 'Young'}>
                        <option value="Young">Young</option>
                        <option value="Adult">Adult</option>
                    </select>



                    <select name="gender" onChange={handleChange} value = {formData.gender || 'Male'}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

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

                                        <label>Pet Health:</label> 

                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="healthDesc" 
                        placeholder="Vaccinations up to date, spayed / neutered."
                        onChange ={handleChange} 
                        value = {formData.healthDesc|| ''}
                    /> 
*/
