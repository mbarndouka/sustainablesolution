import React from 'react';
import './index.css';

export default function index(props) {
  return (
    <div className='square'>
        {props.children}
    </div>
  )
}
