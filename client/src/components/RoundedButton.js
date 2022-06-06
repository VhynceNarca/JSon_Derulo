import React from 'react';
import { Link } from "react-router-dom"

const RoundedButton = ({ text, path }) => {
  return (
    <Link to={path}>
    <button
      style={buttonStyle}
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
  margin: '1em',
  cursor: 'pointer',
  width: '400px'
}

export default RoundedButton;