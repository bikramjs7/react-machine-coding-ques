import React, {useState,useEffect} from 'react';


const Carousel = ({items})=>{
   const [index,setIndex]= useState(0);
 console.log(items);
   const handlePrevious = () => {
    setIndex((index)=> (index-1+items.length)%items.length);
   };
   const handleNext = ()=> {
    setIndex((index)=>(index+1)%items.length);
   };
   
   return (
    <div style={{
      display: 'flex', // Use Flexbox
      flexDirection: 'row', // Stack items vertically
      alignItems: 'center', // Center items horizontally
      justifyContent: 'center', // Center items vertically
      height: '100vh', // Full viewport height to center vertically
    }} >
      <button onClick={handlePrevious} >Previous</button>
      <img style={{ 
        width:'500px', 
        height:'500px' }}src={items[index]} alt={"Wallpaper"}></img>
      <button onClick={handleNext}>Next</button>
    </div>
   );
};

export default Carousel;
