import {GrLinkNext, GrLinkPrevious} from 'react-icons/gr';

const Pagination = ({getPets,skipValue,length}) =>{
    var value = skipValue

    const previousPageHandler = (e)=>{
        e.preventDefault()
        value = value - 5
        getPets(value)
    }
    
      const nextPageHandler = (e)=>{
        e.preventDefault()
        value = value+5
        getPets(value)
      }
    

    return(
        <div style={{display:'flex',marginTop:'50px',justifyContent:'space-between', flexDirection:'row-reverse'}}>
            {(length-value) > 5 ?
                <div style={{display:'inline-flex',alignItems:'center'}} onClick={nextPageHandler}>
                    <p style={{fontSize:20,paddingLeft:5}}>Next</p>
                    <GrLinkNext size={30}/> 
                </div>
                : null
            }
          
          {value > 0 ? 
            <div style={{display:'inline-flex',alignItems:'center'}} onClick={previousPageHandler}>
            <GrLinkPrevious size={30}/>
            <p style={{fontSize:20,paddingLeft:5}}>Previous</p>
            </div>
            : null
          }
        </div>
    )
}

export default Pagination