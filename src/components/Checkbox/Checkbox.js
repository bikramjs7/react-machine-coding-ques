import React,{useState,useEffect } from 'react';
import checkboxData from './CheckboxData.json';


const CheckBoxList = ({data,checked,setChecked})=>{
  const handleOnChange=(e,id)=>{
    setChecked(prev => {
      const newState={...prev,[id]: e.target.checked};
      return newState;
    });

  };
  return (
    <div className='checkbox-list'>
    {data.map((item)=>(
    <div key={data.id}>
      <input 
      type="checkbox"
      checked={checked[item.id] || false}
      onChange={(e)=>(handleOnChange(e,data.id))}
       />
     <span>{item.name}</span>
     {item.children && <CheckBoxList data={item.children} checked={checked} setChecked={setChecked}/>}
    </div>
   ))}
   </div>

  )
  
}
const Checkbox = () => {
  const [checked,setChecked]=useState({});

  return (
    <div className='checkbox-container'>
    <CheckBoxList data={checkboxData} checked={checked} setChecked={setChecked}/>
    </div>
  );   
};

export default Checkbox;
