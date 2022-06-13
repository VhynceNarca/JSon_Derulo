// import "../components/navbar.css";
import "../components/card.css"
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Card = ({data}) => {
    const navigate = useNavigate()
    const category = (data.category).toLowerCase()

    const editHandler = (e) =>{
        e.stopPropagation();
        navigate(`/cats/edit/${data.id}`,{state:{data}})//ilisanan : i route sa edit page
    }

    const deleteHandler = (e) =>{
        e.stopPropagation();
        navigate(`/cats/delete/${data.id}`,{state:{data}})//ilisanan : i route sa delete page or change completely to modal
    }
    return(       
        <div className="card" onClick={()=>navigate(`/${category}s/view/${data.id}`, {state:{data}} )}>
        <div style={{marginLeft:'3%'}}>
          <p>{data.id}</p>
          <img src={data.image} alt={data.name} style={imgStyle}/>
          <p style={{marginLeft:'25%'}}>{data.name}</p>
        </div>
        <div style={{justifyContent: 'space-between',marginRight:'5%',width:'250px'}}>
        <div style={{alignItems:'center',justifyContent:'space-around',width:'80px'}} onClick={editHandler}>
          <FaEdit size={20} />
          <p>Edit</p>
        </div>
        <div style={{alignItems:'center',justifyContent:'space-around',width:'80px'}} onClick={deleteHandler}>
          <FaRegTrashAlt size={20}/>
          <p>Delete</p>
        </div>
        </div>
      </div>
    )
}


const imgStyle ={
    width:'50px',
    height:'50px',
    borderRadius:'50%',
    marginLeft:'25%', 
    alignSelf:'center'
}

export default Card;