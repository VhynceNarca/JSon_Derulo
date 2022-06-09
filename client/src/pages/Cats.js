import "../components/navbar.css";
import React from 'react';
import BoxedButton from '../components/BoxedButton';
import Card from "./Card";

const Cats = () =>{
  const mockData =[
    {id: 1, name: 'Cody'},
    {id: 2, name: 'Neyga'},
    {id: 3, name: 'Chico'},
    {id: 1, name: 'Cody'},
    {id: 2, name: 'Neyga'},
    {id: 3, name: 'Chico'},
    {id: 3, name: 'Chico'},
  ]
  // console.log(mockData)
  return (
    <section className='hero'>
      <div style={{display:'flex', justifyContent: 'space-between',margin:'0 0 50px 0'}} >
        <h1>Cats List</h1>
        <BoxedButton text={"Add New Pet"} path={"/cats"}/>
      </div>
      {mockData.length?
      <>
        <>
          {mockData.map((data,i)=>
            <div key={data.id} style={{margin: '20px 0 0 0'}}>
              <Card data={data}/>
            </div>
          )}
        </>
        {mockData?.metadata?.links?.previous ? 
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
      }
        
      </>
        
        :<p>waley</p>    
      }
    </section>
  );
}
export default Cats;