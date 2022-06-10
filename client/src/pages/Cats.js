import "../components/navbar.css";
import React, { useEffect, useState } from 'react';
import BoxedButton from '../components/BoxedButton';
import Card from "../components/Card";
import axios from 'axios';

const Cats = () =>{
  const url = 'http://localhost:8000/'

  const [cats,setCats] = useState([])

  const getCats =  () =>{
     axios.get(`${url}pets/cats`)
    .then((res)=>{
      setCats(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getCats()
  },[])
  return (
    <section className='hero'>
      <div style={{display:'flex', justifyContent: 'space-between',margin:'0 0 50px 0'}} >
        <h1>Cats List</h1>
        <BoxedButton text={"Add New Pet"} path={"/dogs"}/> {/* ilisanan pa sad */}
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
        {/* {cats?.metadata?.links?.previous ? 
          <a
              href="#"
              data-name="previous"
              // onClick={paginationHandler}
          > &lsaquo;Previous </a>
          : ''
      }
      {cats?.metadata?.links?.next ? 
          <a
              href="#"
              data-name="next"
              // onClick={paginationHandler}
          > Next&rsaquo; </a>
          : ''
      } */}
        
      </>
        
        :<p style={{fontSize:'30px',fontWeight:'bold'}}>No Cats to Display</p>    
      }
    </section>
  );
}
export default Cats;