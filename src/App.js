import React, {useState,useEffect} from "react"
import './App.css';
import Product from "./Product";

function App() {
  const [count, Setcount]=useState(0) ;
  // basic form of a useEffect with no code to run
  //useEffect(()=>{},[]);
  useEffect(()=>{
    // the code that we want to run
    console.log('The count is :', count);
    // optional return function which is a cleanup function 

    return ()=>{
      console.log('I am being cleaned up!')
    }

  },[count])// the dependency array it will the useEffect what it should listen to run the code 
  //let count =0;
  const increment =()=>{
   // count+=1;//Wrong
    Setcount(count +1)
  }
  const decrement =()=>{
    //count-=1;
    Setcount(count-1)
  }

  return (
    <div>
      <Product name="Amazon Echo" 
      description="Your Ai Assistant"
       price={59.99} />
        
      <Product name="Amazon Echo" 
      description="Your Ai Assistant"
       price={59.99} />

      <Product name="Amazon Echo" 
      description="Your Ai Assistant"
       price={59.99} /> 
       <h1>Welcome to My counter</h1>
       <p> the count is: {count}</p>
       <button onClick={decrement}>-</button>
       <button onClick={increment}>+</button>
    </div>
    
  );
}

export default App;
