import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    
    <button  className="load" type="button"  onClick={onClick}>
      {children}
    </button>
    
  );
};

export default Button;
