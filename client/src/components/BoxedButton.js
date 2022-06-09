import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from "react-router-dom"

const BoxedButton = ({ text, path }) => {
  return (
    <Link to={path}>
    <button
      style={buttonStyle}
    > 
        <FaPlus size={25} style={{alignSelf:'center'}}/>
        {text}
    </button >
    </Link>
  );
}

const buttonStyle = {
  padding: '0.6em 1em',
  margin: '15px 0 0 0',
  borderRadius: '5px',
  color: '#fff',
  backgroundColor: '#FFCA7E',
  fontSize: '20px',
  border: '0',
  cursor: 'pointer',
  width: '200px',
  display:'flex', 
  justifyContent:'space-between',
  alignItems:'center',
}

export default BoxedButton;