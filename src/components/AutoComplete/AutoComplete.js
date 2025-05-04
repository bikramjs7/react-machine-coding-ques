import React,{useState,useEffect} from 'react';

const URL="https://dummyjson.com/recipes/search?q=";

const AutoComplete = ()=>{
  const [query,setQuery]=useState('');
  const [data,setData]=useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(URL + query);
      const result = await response.json();
      setData(result.recipes); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query.length>0) { 
      const timer=setTimeout(()=>{
        fetchData();   
      },[500])
      console.log('useEffect triggered');
      
      return ()=>{
        clearTimeout(timer);
      }
    }
  }, [query]); 
  
 

  return (
    <div className='search-container'>
     <h1>AutoComplete Search Bar</h1>
     <input 
      type="text"
      style={{width:'500px'}}
      placeholder='Type a query'
      value={query}
      onChange={(e)=>{setQuery(e.target.value)}}
     />
     <div className='result-container'>
     {query.length>0 && data.map((item)=>(
      <span key={item.id} className='result' style ={{textAlign:'left'}}>{item.name}</span>
     ))
     }
          </div>
     </div>
  );
};

export default AutoComplete;
