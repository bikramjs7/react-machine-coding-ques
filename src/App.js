import './App.css';
import React,{useEffect, useState,useRef} from 'react';
import Counter from './Counter';
import ToDoList from './ToDoList';
import FetchData from './FetchData';
import Search from './Search';
import Carousel from './Carousel';
import ProgressBar from './ProgressBar';
import AutoComplete from './AutoComplete';
import OTPInput from './OtpInput';
import Checkbox from './Checkbox';
import VirtualizedList from './VirtualizedList';


function App() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  const [progress,setProgress]=useState(0);
 
  const timer = useRef();
  const cyclesCompleted = useRef(0);
  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 10);
      cyclesCompleted.current += 1;
      if (cyclesCompleted.current === 10) clearInterval(timer.current);
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const images=[
    'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1472437774355-71ab6752b434?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh0bWx8ZW58MHx8MHx8fDA%3D'
  ]
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Counter /> */}
      {/* <ToDoList /> */}
      {/* <FetchData /> */}
      {/* <Search items={items} /> */}

      {/* <Carousel items={images} /> */}
      {/* <ProgressBar progress={progress}/> */}
      {/* <AutoComplete /> */}
      {/* <OTPInput length={4} /> */}
      {/* <Checkbox /> */}
      <VirtualizedList />
    </div>
  );
}

export default App;
