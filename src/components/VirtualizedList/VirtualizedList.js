import { array } from '@appliedsystems/applied-design-system';
import React ,{useState,useEffect} from 'react';

const list = [];
for(let i=1;i<=10000;i++){
  list.push(i);
}
const height=500;
const itemHeight=35;
const width=300;

const List =Array.from({length:10000},(_,index)=> index+1);
const VirtualizedList = ()=>{
  
  const [indices,setIndices]=useState([0,Math.floor(height/itemHeight)]);

  const visibleList=List.slice(indices[0],indices[1]+1);

  const handleScroll =(e)=>{
   const scrollTop=e.target.scrollTop;

   const newStartIndex=Math.floor(scrollTop/itemHeight);
   const newEndIndex=newStartIndex + Math.floor(height / itemHeight);
   setIndices([newStartIndex, newEndIndex]);
  }

  return (
    <div
    onScroll={(e)=>handleScroll(e)}
    style={{ height, width, background: "grey", overflow: "auto" }}
  >
    <div style={{ height: list.length * itemHeight, position: "relative" }}>
      {visibleList.map((data,idx)=>(
         <div key={idx}
         style={{
          height:itemHeight,
          background:'coral',
          borderTop:'5px solid grey',
          position: "absolute",
          top: (indices[0] + idx) * itemHeight,
          textAlign:'center',
          width:'100%',
          color: "whitesmoke",
         }}> 
          {'Item ' + data}
          </div>
      ))

      } 
      </div>
    </div>
  );
  
};

export default VirtualizedList;
