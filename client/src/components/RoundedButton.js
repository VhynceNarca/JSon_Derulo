import React from 'react';
import { Link } from "react-router-dom"

const RoundedButton = ({ text, path, margin='1em'}) => {
  return (
    <Link to={path}>
    <button
      style={{...buttonStyle,margin:margin}}
    > {text}
    </button >
    </Link>
  );
}

const buttonStyle = {
  padding: '0.6em 2em',
  borderRadius: '40px',
  color: '#fff',
  backgroundColor: '#FFCA7E',
  fontSize: '24px',
  border: '0',
  cursor: 'pointer',
  width: '400px',
}

export default RoundedButton;