import React, {useState,useEffect} from 'react';
import './App.css'

const ProgressBar = ({progress}) => {
  console.log(progress);
   return (
    <div className="bar-container">
      <div className="bar" style={{
        transform:`translateX(${progress-100}%)`
      }}>

      </div>
    </div>
   ); 
};

export default ProgressBar;
