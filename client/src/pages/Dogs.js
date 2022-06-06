import React from 'react';
import RoundedButton from '../components/RoundedButton';

const Dogs = () =>{
  return (
    <section className='hero'>
      <RoundedButton text={"Cat"} path={"/cats"} />
    </section>
  );
}
export default Dogs;