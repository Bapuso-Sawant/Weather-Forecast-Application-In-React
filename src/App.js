import React,{useEffect,useState} from 'react';
import './App.css';
import Tempapp from './components/Tempapp';

function App() {
  const [data,setData] =useState(false);
  useEffect(()=>{
    console.log("hello")
  });
  return (
    <div className="App"> 
        {/* <button onClick={()=>{setData(true)}}>Hello,This is Weather Forecast Application,Here you can find the weather of your current location</button>        */}
        
        {
          data ? (<Tempapp/>) : 
          (<>
           <div className="mainbox"> 
              <div className="beforeMainApp">
                <div className="msg">
                  <h2>Hello,</h2><h3>This is Weather Forecast Application,Here you can find the weather of your current location</h3>
                </div>            
              </div>
          </div><br></br>
          <button onClick={()=>{setData(true)}} className={"btn"}> Get Started </button>
          </>
          )
         
        }
        
    </div>
  );
}

export default App;
