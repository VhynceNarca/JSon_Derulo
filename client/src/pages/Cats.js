// import "../components/navbar.css";
import React, { useEffect, useState } from 'react';
import BoxedButton from '../components/BoxedButton';
import Card from "../components/Card";
import axios from 'axios';
import Pagination from "../components/Pagination";

const Cats = () =>{
  const url = 'http://localhost:8000/'

  const [cats,setCats] = useState([])
  const [skipValue,setSkipValue] = useState(0)
  const [catCount,setCatCount] = useState(0)

  const getCats =  (skipValue) =>{
    setSkipValue(skipValue)
     axios.get(`${url}pets/cats/${skipValue}`)
    .then((res)=>{
      setCats(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const getCatCount = () =>{
    axios.get(`${url}pets/catCount`)
    .then((res)=>{
      setCatCount(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
 
  useEffect(()=>{
    getCats(skipValue)
    getCatCount()
  },[])
  return (
    <section className='hero'>
      <div style={{display:'flex', justifyContent: 'space-between',margin:'0 0 50px 0'}} >
        <h1 style={title}>Cats List</h1>
        <BoxedButton text={"Add New Pet"} path={"/cats/addcat"}/> {/* ilisanan pa sad */}
      </div>
      {cats.length?
      <>
        <>
          {cats.map((cat,i)=>
            <div key={cat.id} style={{margin: '20px 0 0 0'}}>
              <Card data={cat}/>
            </div>
          )}
        </>
        <Pagination getPets={getCats} skipValue={skipValue} length={catCount}/>
        
      </>
        
        :<p style={{fontSize:'30px',fontWeight:'bold'}}>No Cats to Display</p>    
      }
    </section>
  );
}

const title = {
  color:' #6C6853',
  fontSize: '32px',
}
export default Cats;