// import "../components/navbar.css";
import React, { useEffect, useState } from 'react';
import BoxedButton from '../components/BoxedButton';
import Card from "../components/Card";
import axios from 'axios';
import Pagination from "../components/Pagination";
const Dogs = () =>{

  const url = 'http://localhost:8000/'

  const [dogs,setDogs] = useState([])
  const [skipValue,setSkipValue] = useState(0)
  const [dogCount,setDogCount] = useState(0)

  const getDogs =  (skipValue) =>{
    setSkipValue(skipValue)
     axios.get(`${url}pets/dogs/${skipValue}`)
    .then((res)=>{
      setDogs(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const getDogCount = () =>{
    axios.get(`${url}pets/dogCount`)
    .then((res)=>{
      setDogCount(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
 
  useEffect(()=>{
    getDogs(skipValue)
    getDogCount()
  },[])



  return (
    <section className='hero'>
      <div style={{display:'flex', justifyContent: 'space-between',margin:'0 0 50px 0'}} >
        <h1 style={title}>Dogs List</h1>
        <BoxedButton text={"Add New Pet"} path={"/cats"}/> {/* ilisanan pa sad */}
      </div>
      {dogs.length?
      <>
        <>
          {dogs.map((dog,i)=>
            <div key={dog.id} style={{margin: '20px 0 0 0'}}>
              <Card data={dog}/>
            </div>
          )}
        </>
        <Pagination getPets={getDogs} skipValue={skipValue} length={dogCount}/>
        
      </>
        
        :<p style={{fontSize:'30px',fontWeight:'bold'}}>No Dogs to Display</p>    
      }
    </section>
  );
}
const title = {
  color:' #6C6853',
  fontSize: '32px',
}
export default Dogs;