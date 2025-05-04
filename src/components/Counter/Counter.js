import React,{useEffect, useState} from 'react';

const Counter =()=>{
  const [counter,setCounter]=useState(0);

  // useEffect(()=>{
  //    const timer=setInterval(()=>{
  //     setCounter((prev)=>prev+1);
  //    },1000);

  //    return ()=>{
  //     clearInterval(timer);
  //    }
  // },[]);

  return (
  <div>
    <h1>Counter:{counter}</h1>
    <button onClick={()=>{
      setCounter(counter+1);
    }}>Increment</button>
    <button onClick={()=>{
      setCounter(counter-1);
    }}>
      Decrement
    </button>
  </div>
  );
}

export default Counter;
