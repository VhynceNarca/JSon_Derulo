import React from 'react';
import RoundedButton from '../components/RoundedButton';

const Home = () =>{
  return (
    <section className='desc'>
      <p class="sitename" style={namestyle}>Paw Society</p>
      <p class="words" style={wordstyle}>
        Saving one animal will not change the <br></br> world, but surely
        for that one animal,<br></br> the world will change forever.
      </p>
      <div class="button" style={buttonstyle}>
        <RoundedButton text={"View Pet List →"} path={"/cats"} />
      </div>   
      <img src='./dog.png' style={imgstyle} />  
    </section>
  );
}

const namestyle = {
  color: '#FFCA7E',
  fontSize: '90px',
  fontWeight: 'bold',
  position:'absolute',
  left: 180,
  top:'15%',
  fontFamily: 'sans-serif'
}

const wordstyle = {
  color: "black",
  fontSize: '20px',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  position:'absolute',
  left: 250,
  top:'45%',
  textAlign: 'center'
}

const buttonstyle = {
  position:'absolute',
  left: 205,
  top:'63%',
}

const imgstyle = {
  position:'absolute',
  right: 0,
  height: 620,
  width: 620
}

export default Home;