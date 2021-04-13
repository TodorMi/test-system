import React from 'react';
import './custom-button.component.scss';

const CustomButton = (props) => (
  <button
    className='button'
    
    {...props}
  >
  {props.children}
  </button>
);

export default CustomButton;
