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
      <img src='./dog.png' style={imgstyle} alt="hero"/>  
    </section>
  );
}

const namestyle = {
  color: '#FFCA7E',
  fontSize: '90px',
  fontWeight: 'bold',
  position:'absolute',
  left: 180,
  top:'10%',
  fontFamily: 'Poppins'
}

const wordstyle = {
  color: "#6C6853",
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: 'Poppins',
  position:'absolute',
  left: 220,
  top:'43%',
  textAlign: 'center'
}

const buttonstyle = {
  position:'absolute',
  left: 220,
  top:'67%',
}

const imgstyle = {
  position:'fixed',
  right: -10,
  height: 620,
  width: 620,
  overflow:'hidden',
}

export default Home;