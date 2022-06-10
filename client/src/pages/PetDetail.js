import { Link, useLocation } from "react-router-dom";
import "../components/navbar.css";
import RoundedButton from '../components/RoundedButton';

const PetDetail = () =>{
    const location = useLocation()
    const data = location.state.data
    return(
        <section className="hero" style={{display:'inline-flex',textAlign:'left'}}>
            <img src={data.image} alt={data.name} style={imgStyle}/>
            <div style={{marginLeft:'10%'}}>
                <p style={{fontSize:'50px',fontWeight:'bold',margin:'10px 0 20px 0'}}>{data.name}</p>
                <p style={{fontSize:'20px',fontWeight:'bold',color:'#FFCA7E',marginBottom:'50px'}}>{data.breed}</p>
                <p style={{justifyContent:'left',wordBreak:'keep-all',lineHeight:'1.5'}}>{data.description}</p>
                <RoundedButton text={"Adopt"} path={"/cats"} margin={'2em 1em 1em 0'}/>
            </div>
        </section>
    )


}
const imgStyle ={
    width:'100%',
    height:'70%',
}

// const ulStyle = {
//     display:'inline',
//     fontSize: '20px',
//     fontWeight:'bold',
//     color:'#FFCA7E',
// }

export default PetDetail;