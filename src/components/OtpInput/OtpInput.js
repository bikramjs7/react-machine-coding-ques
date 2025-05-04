import React, { useState ,useRef, useEffect} from 'react';

const OTPInput = ({ length }) => {
  const [otp,setOtp]=useState(new Array(length).fill(""))
  const inputRefs=useRef([]);

  useEffect(()=>{
    if(inputRefs.current[0])
      inputRefs.current[0].focus();
  },[])

 useEffect(()=>{
  console.log(otp)
 },[otp])

 const handleInput=(e,idx)=>{
     const val=e.target.value
     console.log(val,idx)
     if(isNaN(val))
        return ;

     const newOtp=[...otp];
     newOtp[idx]=val.length>1?val.substring(1):val;
     setOtp(newOtp);

     if(idx < length-1)
      inputRefs.current[idx+1].focus();
     
  }

  const handleKeyDown=(e,idx)=>{
  console.log(e)
  }

  return (
    <div>
      {otp.map((data,idx)=>(
        <input
          key={idx}
          className='otp-input-box'
          type="text"
          ref={(input)=>{inputRefs.current[idx]=input}}
          value={otp[idx]}
          onChange={(e)=>{handleInput(e,idx)}}
          onKeyDown={(e)=>handleKeyDown(e,idx)}
          >
        </input>
      ))}
    </div>
  )

};

export default OTPInput;
