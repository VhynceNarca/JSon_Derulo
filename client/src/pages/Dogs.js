import "../components/navbar.css";
import React, { useEffect, useState } from 'react';
import BoxedButton from '../components/BoxedButton';
import Card from "../components/Card";
import axios from 'axios';
const Dogs = () =>{

  const url = 'http://localhost:8000/'

  const [dogs,setDogs] = useState([])

  const getDogs =  () =>{
    console.log('nisud')
     axios.get(`${url}pets/dogs`)
    .then((res)=>{
      setDogs(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getDogs()
  },[])

  return (
    <section className='hero'>
      <div style={{display:'flex', justifyContent: 'space-between',margin:'0 0 50px 0'}} >
        <h1>Dogs List</h1>
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
        {/* {mockData?.metadata?.links?.previous ? 
          <a
              href="#"
              data-name="previous"
              // onClick={paginationHandler}
          > &lsaquo;Previous </a>
          : ''
      }
      {mockData?.metadata?.links?.next ? 
          <a
              href="#"
              data-name="next"
              // onClick={paginationHandler}
          > Next&rsaquo; </a>
          : ''
      } */}
        
      </>
        
        :<p style={{fontSize:'30px',fontWeight:'bold'}}>No Dogs to Display</p>    
      }
    </section>
  );
}

export default Dogs;