
import React,{useState} from 'react';

const Search = ({items})=>{
   const [query,setQuery]=useState('');


   const filteredItems= items.filter((item) => {
   return item.toLowerCase().includes(query.toLowerCase())
   });

  
  return  (
 <div>
  <input
   type="text"
   placeholder="Type anything...."
   value={query}
   onChange={(e)=>{setQuery(e.target.value)}}   
  />
  <ul>
  {query.length>=1 && filteredItems.map((item,index) => (
    <li key={index}>
        {item}
    </li>
  ))}
  </ul>
 </div>
  );
};

export default Search;
