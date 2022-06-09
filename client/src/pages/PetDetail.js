import { Link, useLocation } from "react-router-dom";
import "../components/navbar.css";
import RoundedButton from '../components/RoundedButton';

const PetDetail = () =>{
    const location = useLocation()
    const data = location.state.data
    return(
        <section className="hero" style={{display:'inline-flex',textAlign:'left'}}>
            <img src="/buchoy.png" alt="buchoy" style={imgStyle}/>
            <div style={{marginLeft:'10%'}}>
                <p style={{fontSize:'50px',fontWeight:'bold',margin:'10px 0 0 0'}}>{data.name}</p>
               {/* <ul style={{padding:'0'}}>
                   <li style={ulStyle}>Persian  </li>
                   <li style={ulStyle}>  {'\u2022'}   Adult</li>
                   <li style={ulStyle}>  {'\u2022'}   Female</li>
               </ul> */}
               <p style={{justifyContent:'left',wordBreak:'keep-all',lineHeight:'1.3'}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                {/* <p style={{fontSize:'18px',fontWeight:'bold',marginTop:'30px'}}>HEALTH</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <p style={{fontSize:'18px',fontWeight:'bold'}}>ADOPTION FEE</p>
                <p>$125.00</p> */}

                <RoundedButton text={"Adopt"} path={"/cats"} margin={'1em 1em 1em 0'}/>
                <RoundedButton text={"Go Back"} path={'/dogs'} margin={'0 1em 1em 0'}/>
            </div>
        </section>
    )


}
const imgStyle ={
    width:'50%',
    height:'60%',
}

const ulStyle = {
    display:'inline',
    fontSize: '20px',
    fontWeight:'bold',
    color:'#FFCA7E',
}

export default PetDetail;