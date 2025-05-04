import React,{useState,useEffect,useRef} from 'react';


 
const URL="https://dummyjson.com/products"

const FetchData = ()=>{
    
 const [data,setData]=useState([]);
 const [isLoading ,setIsLoading]=useState(true);
 const hasFetched = useRef(false);

 const getData = async()=>{
     try{
      const response=await fetch(URL);
      const result= await response.json();
      setData(result.products);

     }catch (err){

     } finally{
      setIsLoading(false);
     }
 }
 useEffect(()=>{
  console.log('useEffect triggered')
  if (!hasFetched.current) {
    // Only fetch data if it hasn't been fetched yet
    hasFetched.current = true;
    getData();
  }
 },[]);

 return isLoading?<h1>Loading...</h1>:(
    <div>
      <ul>
        {data.map((product)=>(
          <li key="product.id">{product.title}</li>
        ))}
      </ul>
    </div>
 );


};

export default FetchData;
